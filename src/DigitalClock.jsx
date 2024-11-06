import { useEffect, useState } from 'react';

export default function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    })
    function formatTime(time) {
        const hours = time.getHours().toString().padStart(2, '0');
        const minutes = time.getMinutes().toString().padStart(2, '0');
        const seconds = time.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <div className="clock-container">
            <div className="clock-display">
                <span className="clock-time">
                   {formatTime(time)}
                </span>
            </div>
        </div>
    )
}
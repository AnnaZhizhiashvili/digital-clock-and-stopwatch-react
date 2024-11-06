import { useEffect, useRef, useState } from 'react';

export default function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1);
        }
        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning])

    function startStopwatch() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function resetStopwatch() {
        setElapsedTime(0);
        setIsRunning(false);
    }


    function pauseStopWatch() {
        setIsRunning(false)
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime/ (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, '0');
        seconds = String(seconds).padStart(2, '0');
        milliseconds = String(milliseconds).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;

      }


    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button className="start" onClick={startStopwatch}>Start</button>
                <button className="stop" onClick={pauseStopWatch}>Pause</button>
                <button className="reset" onClick={resetStopwatch}>Reset</button>
            </div>
        </div>
    )


}
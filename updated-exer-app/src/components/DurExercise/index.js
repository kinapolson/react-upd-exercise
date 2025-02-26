import React, { useRef, useState } from "react";

function DurExercise() {
  const [elapsedTime, setElapsedTime] = useState(0); 
  const timerRef = useRef(null); // storing id to clear later

  //starting the timer
  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 10);
    }, 10);
  };

  //stoping the timer
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  //reseting the timer
  const resetTimer = () => {
    clearInterval(timerRef.current); 
    setElapsedTime(0);
  };

  //formatting time as mm:ss.msmsms
  const timeFormat = (ms) => {
    const minutes = Math.floor(ms / 60000).toString().padStart(2, "0");
    const seconds = Math.floor((ms % 60000) / 1000).toString().padStart(2, "0");
    const milliseconds = (ms % 1000).toString().padStart(3, "0");
    return `${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <p>Timer: {timeFormat(elapsedTime)}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default DurExercise;
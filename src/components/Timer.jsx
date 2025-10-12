import { useState, useEffect } from "react";

const MINUTE = 60;

export default function Timer({ timeLimit, setTimeLimit, timeUp }) {
   const [showSeconds, setShowSeconds] = useState(true);
   const [isRunning, setIsRunning] = useState(false);
   const [remaining, setRemaining] = useState(timeLimit * 60);
   const [minutes, setMinutes] = useState(null);
   const [seconds, setSeconds] = useState(null);

   const resetTimer = () => {
      setShowSeconds(true);
      setIsRunning(false);
      setRemaining(timeLimit * 60);
   };

   const startTimer = () => {
      setIsRunning(true);
   };

   useEffect(() => {
      if (minutes < 1) setShowSeconds(true);
   }, [minutes]);

   useEffect(() => {
      resetTimer();
   }, [timeLimit]);

   useEffect(() => {
      if (!isRunning) return;
      if (remaining <= 0) {
         setIsRunning(false);
         timeUp();
         return;
      }

      const timer = setInterval(() => {
         setRemaining((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
   }, [isRunning, remaining]);

   useEffect(() => {
      setMinutes(Math.floor(remaining / MINUTE));
      setSeconds(remaining % MINUTE);
   }, [remaining]);

   return (
      <>
         <div className="timer" onClick={startTimer}>
            {minutes > 0 && `${String(minutes).padStart(2, "0")}분`}
            {showSeconds ? ` ${String(seconds).padStart(2, "0")}초` : ""}
         </div>

         <button
            className="toggle-seconds"
            onClick={() => setShowSeconds((v) => !v)}
         >
            {showSeconds ? "초 숨기기" : "초 보이기"}
         </button>

         <div className="time-buttons">
            <button onClick={() => setTimeLimit(10)}>10분</button>
            <button onClick={() => setTimeLimit(20)}>20분</button>
            <button onClick={() => setTimeLimit(30)}>30분</button>
         </div>
      </>
   );
}

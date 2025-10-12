import TopicBox from "./components/TopicBox";
import { useState } from "react";
import "./reset.css";
import "./App.css";

function App() {
   const [time, setTime] = useState(20); // 분 단위

   return (
      <div className="app">
         <TopicBox />

         <div className="timer">{String(time).padStart(2, "0")}:00</div>

         <div className="time-buttons">
            <button onClick={() => setTime(10)}>10분</button>
            <button onClick={() => setTime(20)}>20분</button>
            <button onClick={() => setTime(30)}>30분</button>
         </div>
      </div>
   );
}

export default App;

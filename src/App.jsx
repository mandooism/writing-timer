import TopicBox from "./components/TopicBox";
import { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

function App() {
   const [time, setTime] = useState(20); // 분 단위
   const [topic, setTopic] = useState(null);
   const [bgUrl, setBgUrl] = useState("");

   const loadRandomTopic = async () => {
      const res = await fetch("/topics.json");
      const data = await res.json();
      setTopic(randomFrom(data));
   };

   useEffect(() => {
      loadRandomTopic();
   }, []);

   useEffect(() => {
       console.log(topic &&  `/assets/backgrounds/${topic.eng}.jpg`)

      setBgUrl(
         topic
            ? `/assets/backgrounds/${topic.eng}.jpg`
            : "/assets/backgrounds/default.jpg",
      );
   }, [topic]);

   return (
      <div
         className="app"
         style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "background-image 0.3s ease-in-out",
         }}
      >
         {" "}
         <TopicBox onTopicClick={loadRandomTopic} topic={topic} />
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

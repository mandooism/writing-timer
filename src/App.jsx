import { Analytics } from "@vercel/analytics/next";
import { useState, useEffect } from "react";
import TopicBox from "./components/TopicBox";
import Timer from "./components/Timer";
import "./reset.css";
import "./App.css";

const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];
const DEFAULT_TIME_LIMIT = 20; // 분 단위
const RESET_TIME = -1;

function App() {
   const [timeLimit, setTimeLimit] = useState(20); // 분 단위
   const [finishedTimeStamp, setFinishedTimeStamp] = useState(RESET_TIME);
   const [topic, setTopic] = useState(null);
   const [bgUrl, setBgUrl] = useState("");

   const loadRandomTopic = async () => {
      const res = await fetch("/topics.json");
      const data = await res.json();
      setTopic(randomFrom(data));
   };

   const timeUp = () => {
      const now = new Date();
      setFinishedTimeStamp(now.getTime());
   };

   useEffect(() => {
      loadRandomTopic();
      setFinishedTimeStamp(RESET_TIME);
   }, []);

   useEffect(() => {
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
            transition: "background-image 1.0s ease-in-out, filter 1.0s ease",
            filter: finishedTimeStamp > 0 ? "blur(20px)" : "none",
         }}
      >
         <TopicBox onTopicClick={loadRandomTopic} topic={topic} />
         <Timer
            setTimeLimit={setTimeLimit}
            timeLimit={timeLimit}
            timeUp={timeUp}
         />
         <Analytics />
      </div>
   );
}

export default App;

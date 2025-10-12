import { useEffect, useState } from "react";

export default function TopicBox() {
   const [topics, setTopics] = useState([]);
   const [current, setCurrent] = useState(null);

   useEffect(() => {
      fetch("/topics.json")
         .then((res) => res.json())
         .then((data) => {
            setTopics(data);
            setCurrent(randomFrom(data));
         });
   }, []);

   const randomFrom = (arr) => arr[Math.floor(Math.random() * arr.length)];

   const handleClick = () => {
      if (topics.length > 0) {
         setCurrent(randomFrom(topics));
      }
   };

   return (
      <h1 className="topic" onClick={handleClick} style={{ cursor: "pointer" }}>
         {current ? current.kor : "불러오는 중..."}
      </h1>
   );
}

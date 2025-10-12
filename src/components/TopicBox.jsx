export default function TopicBox({ topic, onTopicClick }) {
   return (
      <h1
         className="topic"
         style={{ cursor: "pointer" }}
         onClick={onTopicClick}
      >
         {topic ? topic.kor : "불러오는 중..."}
      </h1>
   );
}

import React, { useState } from "react";
import "./Resources.css";
import Quiz from "../Quiz/Quiz";
export default function Resources() {
  const [topic, setTopic] = useState("HTML");
  return (
    <div className="App-Resources-Row">
      <div>
        <span onClick={()=>setTopic("HTML")}>HTML</span>
        <span onClick={()=>setTopic("CSS")}>CSS</span>
        <span onClick={()=>setTopic("JavaScript")}>JS</span>
        <span onClick={()=>setTopic("Reactjs")}>React</span>
      </div>
      <div>
        <h3>{topic} Quiz</h3>
        <Quiz topic={topic} />
      </div>
    </div>
  );
}

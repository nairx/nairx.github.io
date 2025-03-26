import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./InterviewQ.css";
import htmlIQ from "./htmlIQ.json";
import cssIQ from "./cssIQ.json";
import jsIQ from "./jsIQ.json";
import reactIQ from "./reactIQ.json";
export default function InterviewQ() {
  const [q, setQ] = useState(0);
  const [topic, setTopic] = useState("HTML");
  const pa = useRef(null);
  const btn = useRef(null);
  let questions;
  if (topic === "HTML") questions = htmlIQ;
  if (topic === "CSS") questions = cssIQ;
  if (topic === "JavaScript") questions = jsIQ;
  if (topic === "Reactjs") questions = reactIQ;
  const chkAnswer = () => {};
  const nextQ = () => {
    setQ(q + 1);
    pa.current.style.display = "none";
    btn.current.style.display = "block";
  };
  useEffect(() => {
    setQ(0);
  }, [topic]);
  useEffect(() => {
    pa.current.style.display = "none";
    btn.current.style.display = "block";
  }, [q]);
  const showAnswer = () => {
    btn.current.style.display = "none"
    pa.current.style.display = "block";
  };
  return (
    <div className="App-IQ-Container">
      <div className="App-IQ-Row">
        <li
          className={topic === "HTML" && "App-IQ-Active"}
          onClick={() => setTopic("HTML")}
        >
          HTML
        </li>
        <li
          className={topic === "CSS" && "App-IQ-Active"}
          onClick={() => setTopic("CSS")}
        >
          CSS
        </li>
        <li
          className={topic === "JavaScript" && "App-IQ-Active"}
          onClick={() => setTopic("JavaScript")}
        >
          JavaScript
        </li>
        <li
          className={topic === "Reactjs" && "App-IQ-Active"}
          onClick={() => setTopic("Reactjs")}
        >
          React
        </li>
      </div>
      <div className="App-IQ-Row">
        {questions &&
          questions.map((value, index) => (
            <div
              key={index}
              onClick={() => setQ(value.id - 1)}
              className={value.id - 1 === q ? "App-IQ-Active" : "App-IQ-Num"}
            >
              {value.id}
            </div>
          ))}
      </div>
      <div className="App-IQ-Question">
        <p>
          <b>
            {questions[q].id}) {questions[q].question}
          </b>
        </p>
        <p ref={btn} onClick={showAnswer}>
          <span>Show Answer</span>
        </p>
        <p ref={pa}>
          <label>{questions[q].answer}</label>
        </p>

        {q > 0 && (
          <button onClick={() => setQ(q - 1)} className="App-IQ-Btn">
            Back
          </button>
        )}
        {q < questions.length - 1 && (
          <button onClick={() => setQ(q + 1)} className="App-IQ-Btn">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

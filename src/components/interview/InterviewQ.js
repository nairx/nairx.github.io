import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./InterviewQ.css";
import htmlIQ from "../../questions/htmlQ.json";
import cssIQ from "../../questions/cssQ.json";
export default function InterviewQ() {
  const [q, setQ] = useState(0);
  const [topic, setTopic] = useState("HTML");
  const pa = useRef(null);
  let questions;
  if (topic === "HTML") questions = htmlIQ;
  if (topic === "CSS") questions = cssIQ;
  const chkAnswer = () => {};
  const nextQ = () => {
    setQ(q + 1);
  };

  useEffect(() => {
    setQ(0);
  }, [topic]);

  return (
    <div className="App-IQ-Container">
      <div className="App-IQ-Row">
        <li
          className={topic === "HTML" && "App-IQ-Topic-Active"}
          onClick={() => setTopic("HTML")}
        >
          HTML
        </li>
        <li
          className={topic === "CSS" && "App-IQ-Topic-Active"}
          onClick={() => setTopic("CSS")}
        >
          CSS
        </li>
        <li
          className={topic === "JavaScript" && "App-IQ-Topic-Active"}
          onClick={() => setTopic("JavaScript")}
        >
          JavaScript
        </li>
        <li
          className={topic === "Reactjs" && "App-IQ-Topic-Active"}
          onClick={() => setTopic("Reactjs")}
        >
          React
        </li>
      </div>
      <div className="App-IQ-Num">
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
        <p ref={pa}>
          <input type="radio" name="ans" id="lblA" onChange={chkAnswer}></input>
          <label for="lblA">{questions[q].options[0]}</label>
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

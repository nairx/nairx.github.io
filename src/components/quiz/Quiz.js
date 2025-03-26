import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Quiz.css";
import reactQ from "../../questions/reactQ.json";
import htmlQ from "../../questions/htmlQ.json";
import cssQ from "../../questions/cssQ.json";
import jsQ from "../../questions/jsQ.json";
export default function Quiz() {
  const [q, setQ] = useState(0);
  const [topic, setTopic] = useState("HTML");
  const pa = useRef(null);
  const pb = useRef(null);
  const pc = useRef(null);
  const pd = useRef(null);
  let questions;
  if (topic === "Reactjs") questions = reactQ;
  if (topic === "HTML") questions = htmlQ;
  if (topic === "CSS") questions = cssQ;
  if (topic === "JavaScript") questions = jsQ;
  const chkAnswer = () => {
    let ans = document.getElementsByName("ans");
    if (ans[0].checked) {
      if (questions[q].answer === 0) {
        pa.current.style.backgroundColor = "lightgreen";
      } else {
        pa.current.style.backgroundColor = "pink";
      }
    }
    if (ans[1].checked) {
      if (questions[q].answer === 1) {
        pb.current.style.backgroundColor = "lightgreen";
      } else {
        pb.current.style.backgroundColor = "pink";
      }
    }
    if (ans[2].checked) {
      if (questions[q].answer === 2) {
        pc.current.style.backgroundColor = "lightgreen";
      } else {
        pc.current.style.backgroundColor = "pink";
      }
    }
    if (ans[3].checked) {
      if (questions[q].answer === 3) {
        pd.current.style.backgroundColor = "lightgreen";
      } else {
        pd.current.style.backgroundColor = "pink";
      }
    }
  };
  const nextQ = () => {
    setQ(q + 1);
  };

  const refreshQ = () => {
    pa.current.style.backgroundColor = "white";
    pb.current.style.backgroundColor = "white";
    pc.current.style.backgroundColor = "white";
    pd.current.style.backgroundColor = "white";
    document.getElementsByName("ans")[0].checked = false;
    document.getElementsByName("ans")[1].checked = false;
    document.getElementsByName("ans")[2].checked = false;
    document.getElementsByName("ans")[3].checked = false;
  };

  useEffect(() => {
    refreshQ();
  }, [q]);

  useEffect(() => {
    refreshQ();
    setQ(0);
  }, [topic]);

  return (
    <div className="App-container">
      <div className="App-Resources-Row">
        {/* <div className="App-Topics"> */}
          <li
            className={topic === "HTML" && "App-Topic-Active"}
            onClick={() => setTopic("HTML")}
          >
            HTML
          </li>
          <li
            className={topic === "CSS" && "App-Topic-Active"}
            onClick={() => setTopic("CSS")}
          >
            CSS
          </li>
          <li
            className={topic === "JavaScript" && "App-Topic-Active"}
            onClick={() => setTopic("JavaScript")}
          >
            JavaScript
          </li>
          <li
            className={topic === "Reactjs" && "App-Topic-Active"}
            onClick={() => setTopic("Reactjs")}
          >
            React
          </li>
        </div>
        <div className="App-Q-Num">
          {questions &&
            questions.map((value, index) => (
              <div
                key={index}
                onClick={() => setQ(value.id - 1)}
                className={
                  value.id - 1 === q ? "App-Quiz-Active" : "App-Quiz-Num"
                }
              >
                {value.id}
              </div>
            ))}
        </div>
      {/* </div> */}
      <div className="App-Question">
        <p>
          <b>
            {questions[q].id}) {questions[q].question}
          </b>
        </p>
        <p ref={pa}>
          <input type="radio" name="ans" id="lblA" onChange={chkAnswer}></input>
          <label for="lblA">{questions[q].options[0]}</label>
        </p>
        <p ref={pb}>
          <input type="radio" name="ans" id="lblB" onChange={chkAnswer}></input>
          <label for="lblB">{questions[q].options[1]}</label>
        </p>
        <p ref={pc}>
          <input type="radio" name="ans" id="lblC" onChange={chkAnswer}></input>
          <label for="lblC">{questions[q].options[2]}</label>
        </p>
        <p ref={pd}>
          <input type="radio" name="ans" id="lblD" onChange={chkAnswer}></input>
          <label for="lblD">{questions[q].options[3]}</label>
        </p>
        {q > 0 && (
          <button onClick={() => setQ(q - 1)} className="App-Quiz-Btn">
            Back
          </button>
        )}
        {q < questions.length - 1 && (
          <button onClick={() => setQ(q + 1)} className="App-Quiz-Btn">
            Next
          </button>
        )}
      </div>
    </div>
  );
}

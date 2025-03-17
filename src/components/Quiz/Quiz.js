import React from "react";
import { useState } from "react";
import reactQ from "../../questions/reactQ.json";
export default function Quiz(props) {
  const [q, setQ] = useState(0);
  let questions;
  if (props.topic === "Reactjs") questions = reactQ;
  const chkAnswer = () => {
    let ans = document.getElementsByName("ans");
    if (ans[0].checked) {
      if (questions[q].answer === "a") {
        document.getElementById("a").style.backgroundColor = "lightgreen";
      } else {
        document.getElementById("a").style.backgroundColor = "pink";
      }
    }
    if (ans[1].checked) {
      if (questions[q].answer === "b") {
        document.getElementById("b").style.backgroundColor = "lightgreen";
      } else {
        document.getElementById("b").style.backgroundColor = "pink";
      }
    }
    if (ans[2].checked) {
      if (questions[q].answer === "c") {
        document.getElementById("c").style.backgroundColor = "lightgreen";
      } else {
        document.getElementById("c").style.backgroundColor = "pink";
      }
    }
    if (ans[3].checked) {
      if (questions[q].answer === "d") {
        document.getElementById("d").style.backgroundColor = "lightgreen";
      } else {
        document.getElementById("d").style.backgroundColor = "pink";
      }
    }
  };
  const nextQ = () => {
    setQ(q+1)
    //document.getElementsByName("ans")[0].reset
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        {questions &&
          questions.map((value, index) => (
            <div key={index} onClick={() => setQ(value.id - 1)}>
              {value.id}
            </div>
          ))}
      </div>
      <div>
        <p>
          <b>
            {questions[q].id}) {questions[q].question}
          </b>
        </p>
        <p id="a">
          <input type="radio" name="ans" onChange={chkAnswer}></input>
          {questions[q].a}
        </p>
        <p id="b">
          <input type="radio"  name="ans" onChange={chkAnswer}></input>
          {questions[q].b}
        </p>
        <p id="c">
          <input type="radio"  name="ans" onChange={chkAnswer}></input>
          {questions[q].c}
        </p>
        <p id="d">
          <input type="radio"  name="ans" onChange={chkAnswer}></input>
          {questions[q].d}
        </p>
        {q > 0 && <button onClick={() => setQ(q - 1)}>Back</button>}
        {q < questions.length - 1 && (
          <button onClick={() => setQ(q + 1)}>Next</button>
        )}
      </div>
    </div>
  );
}

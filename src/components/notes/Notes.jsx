import React from "react";
import { useState, useEffect } from "react";
import "./Notes.css";
export default function Notes() {
  const [slide, setSlide] = useState(1);
  const [topic, setTopic] = useState("html");
  let url = "/" + topic + "/Slide" + slide + ".PNG";
  useEffect(() => {
    setSlide(1);
  }, [topic]);
  return (
    <div className="App-Notes-Box">
      <p>
        <span onClick={() => setTopic("html")} className={topic==="html" && "App-Notes-Active"}>HTML</span>
        <span onClick={() => setTopic("css")}>CSS</span>
        <span onClick={() => setTopic("js")}>JavaScript</span>
        <span onClick={() => setTopic("react")}>Reactjs</span>
      </p>
      <div className="App-Notes-Slide">
      <button className="App-Notes-Btn" onClick={() => setSlide(slide - 1)}>
        Previous
      </button>
      <img className="App-Notes-Img" src={url} width={1000}></img>
      <button className="App-Notes-Btn" onClick={() => setSlide(slide + 1)}>
        Next
      </button>
      </div>
    </div>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import "./Notes.css";
export default function Notes() {
  const [slide, setSlide] = useState(1);
  const [topic, setTopic] = useState("html");
  let page = { html: 47, css: 37, js: 74, react: 35 };
  let url = topic + "/Slide" + slide + ".PNG";
  useEffect(() => {
    setSlide(1);
  }, [topic]);
  useEffect(() => {
    (slide > page[topic] || slide < 1) && setSlide(1);
  }, [slide]);
  return (
    <div className="App-Notes-Box">
      <p>
        <span
          onClick={() => setTopic("html")}
          className={topic === "html" && "App-Notes-Active"}
        >
          HTML
        </span>
        <span
          onClick={() => setTopic("css")}
          className={topic === "css" && "App-Notes-Active"}
        >
          CSS
        </span>
        <span
          onClick={() => setTopic("js")}
          className={topic === "js" && "App-Notes-Active"}
        >
          JavaScript
        </span>
        <span
          onClick={() => setTopic("react")}
          className={topic === "react" && "App-Notes-Active"}
        >
          Reactjs
        </span>
      </p>

      <div className="App-Notes-Pages">
        <button onClick={() => setSlide(slide - 20)}>&lt;&lt;</button>
        {Array.from(
          { length: slide < page[topic] - 20 ? 20 : page[topic] - slide+1 },
          (_, v) => (
            <div onClick={()=>setSlide(v+slide)}>{v + slide}</div>
          )
        )}
        {/* {Array.from({ length: page[topic]-(slide+10) }, (_, v) => (
          <div>{v + slide}</div>
        ))} */}
        <button onClick={() => setSlide(slide + 20)}>&gt;&gt;</button>
      </div>

      <div className="App-Notes-Slide">
       
        <img className="App-Notes-Img" src={url} width={1000}></img>
        <h3 style={{position:'absolute',top:'160px'}}> <button className="App-Notes-Btn" onClick={() => setSlide(slide - 1)}>
          &lt;
        </button>Page {slide} of {page[topic]}
        <button className="App-Notes-Btn" onClick={() => setSlide(slide + 1)}>
          &gt;
        </button>
        </h3>
        
      </div>
    </div>
  );
}

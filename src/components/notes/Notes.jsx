import React from "react";
import { useState, useEffect } from "react";
import "./Notes.css";
export default function Notes(props) {
  const [slide, setSlide] = useState(1);
  const [topic, setTopic] = useState(props.topic);
  let page = { html: 47, css: 37, js: 74, react: 35 };
  let url = "../" + topic + "/Slide" + slide + ".PNG";
  useEffect(() => {
    setSlide(1);
  }, [topic]);
  useEffect(() => {
    (slide > page[topic] || slide < 1) && setSlide(1);
  }, [slide]);
  return (
    <div className="App-Notes-Box">
      {/* <div style={{margin:'10px'}}>
  
          <p 
            onClick={() => setTopic("html")}
            className={topic === "html" ? "App-Notes-Active" : "App-Notes-Default"}
          >
            HTML
          </p>
       
          <p
            onClick={() => setTopic("css")}
            className={topic === "css" ? "App-Notes-Active" : "App-Notes-Default"}
          >
            CSS
          </p>
    
          <p
            onClick={() => setTopic("js")}
            className={topic === "js" ? "App-Notes-Active" : "App-Notes-Default"}
          >
            JavaScript
          </p>
     
          <p
            onClick={() => setTopic("react")}
            className={topic === "react" ? "App-Notes-Active" : "App-Notes-Default"}
          >
            Reactjs
          </p>
       
      </div> */}
      <div>
        {/* <div className="App-Notes-Pages">
          <button onClick={() => setSlide(slide - 20)}>&lt;&lt;</button>
          {Array.from(
            { length: slide < page[topic] - 20 ? 20 : page[topic] - slide + 1 },
            (_, v) => (
              <div onClick={() => setSlide(v + slide)}>{v + slide}</div>
            )
          )}
          <button onClick={() => setSlide(slide + 20)}>&gt;&gt;</button>
        </div> */}

        <div className="App-Notes-Slide">
          <img className="App-Notes-Img" src={url} width={1000}></img>
          <h3 style={{ position: "absolute", top: "100px" }}>
            <button
              className="App-Notes-Btn"
              onClick={() => setSlide(slide - 1)}
            >
              &lt;
            </button>
            Page {slide} of {page[topic]}
            <button
              className="App-Notes-Btn"
              onClick={() => setSlide(slide + 1)}
            >
              &gt;
            </button>
          </h3>
        </div>
      </div>
    </div>
  );
}

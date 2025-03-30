import React, { useState } from "react";
import "./Resources.css";
import { Link } from "react-router-dom";
export default function Resources() {
  return (
    <>
      <div className="App-Resources-Title">
        <h1>Popular Courses</h1>
      </div>

      <div className="App-Resources-Row">
        {/* <div className="App-Resources-Topic">
       <Link to="../notes">Learn</Link>
     </div>
    <div className="App-Resources-Topic">
       <Link to="../interview">Revise</Link>
     </div> 
     <div className="App-Resources-Topic">
       <Link to="../quiz">Test</Link>
     </div>*/}

        <div className="App-Resources-Topic">
          <Link to="../html">
            <img src="/html/Slide1.png" width="400px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../css">
            <img src="/css/Slide1.png" width="400px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../js">
            <img src="/js/Slide1.png" width="400px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../react">
            <img src="/react/Slide1.png" width="400px" />
          </Link>
        </div>
        {/* <div className="App-Resources-Topic">
       <Link to="../notes">CSS</Link>
     </div>
     <div className="App-Resources-Topic">
       <Link to="../notes">JavaScript</Link>
     </div> */}
      </div>
    </>
  );
}

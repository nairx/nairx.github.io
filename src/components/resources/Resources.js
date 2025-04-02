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
          <Link to="../htmlnotes">
            <img src="/html/Slide1.PNG" width="350px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../cssnotes">
            <img src="/css/Slide1.PNG" width="350px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../jsnotes">
            <img src="/js/Slide1.PNG" width="350px"></img>
          </Link>
        </div>
        <div className="App-Resources-Topic">
          <Link to="../reactnotes">
            <img src="/react/Slide1.PNG" width="350px" />
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

import React, { useState } from "react";
import "./Resources.css";
import { Link } from "react-router-dom";
export default function Resources() {
  return (
    <div className="App-Resources-Row">
      <div className="App-Resources-Topic">
        <Link to="../notes">Learn</Link>
      </div>
      <div className="App-Resources-Topic">
        <Link to="../interview">Revise</Link>
      </div>
      <div className="App-Resources-Topic">
        <Link to="../quiz">Test</Link>
      </div>
      
    </div>
  );
}

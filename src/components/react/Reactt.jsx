import React from "react";
import { Link, Outlet } from "react-router-dom";
import Notes from "../notes/Notes";
import "./React.css";
export default function () {
  return (
    <div className="App-React-Row">
      <div className="App-React-Menu">
        <div>React</div>
        <div >&gt;</div>
        <div >
          <Link to="reactnotes" className="App-React-Link">
            Notes
          </Link>

          <Link to="reactquiz" className="App-React-Link">
            Quiz
          </Link>

          <Link to="reactquest" className="App-React-Link">
            Questions
          </Link>
          <Link to="reactvideo" className="App-React-Link">
          Video
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

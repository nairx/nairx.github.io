import React from "react";
import { Link, Outlet } from "react-router-dom";
import Notes from "../notes/Notes";
import "./Jsc.css";
export default function () {
  return (
    <div className="App-Html-Row">
      <div className="App-Html-Menu">
        <div>JavaScript</div>
        <div >&gt;</div>
        <div >
          <Link to="jsnotes" className="App-Html-Link">
            Notes
          </Link>

          <Link to="jsquiz" className="App-Html-Link">
            Quiz
          </Link>

          <Link to="jsquest" className="App-Html-Link">
            Questions
          </Link>
          <Link to="jsvideo" className="App-Html-Link">
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

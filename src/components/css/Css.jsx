import React from "react";
import { Link, Outlet } from "react-router-dom";
import Notes from "../notes/Notes";
import "./Css.css";
export default function () {
  return (
    <div className="App-Html-Row">
      <div className="App-Html-Menu">
        <div>CSS</div>
        <div >&gt;</div>
        <div >
          <Link to="cssnotes" className="App-Html-Link">
            Notes
          </Link>

          <Link to="cssquiz" className="App-Html-Link">
            Quiz
          </Link>

          <Link to="cssquest" className="App-Html-Link">
            Questions
          </Link>
          <Link to="cssvideo" className="App-Html-Link">
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

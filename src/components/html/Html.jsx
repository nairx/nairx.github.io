import React from "react";
import { Link, Outlet } from "react-router-dom";
import Notes from "../notes/Notes";
import "./Html.css";
export default function () {
  return (
    <div className="App-Html-Row">
      <div className="App-Html-Menu">
        <div>HTML</div>
        <div >&gt;</div>
        <div >
          <Link to="htmlnotes" className="App-Html-Link">
            Notes
          </Link>

          <Link to="htmlquiz" className="App-Html-Link">
            Quiz
          </Link>

          <Link to="htmlquest" className="App-Html-Link">
            Questions
          </Link>
          <Link to="htmlvideo" className="App-Html-Link">
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

import React from "react";
import "./Video.css";
export default function Video(props) {
  const imgUrl = "/" + props.imgUrl + "/Slide1.PNG";
  const pathUrl = "/" + props.pathUrl + ".png"
  return (
    <div>
      <a href={props.url} target="_blank">
        <img src={pathUrl} width="200px" className="App-Video-Box" />
      </a>
    </div>
  );
}

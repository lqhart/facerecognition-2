import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import ai from "./ai.png";

const Logo = props => {
  return (
    <div className="ma4 mt0 center">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 72, width: 72 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "3px" }} alt="logo" src={ai} />
        </div>
      </Tilt>
      <div className="textContent">
        <h1> Welcome to image analyzer. </h1>
      </div>
    </div>
  );
};

export default Logo;

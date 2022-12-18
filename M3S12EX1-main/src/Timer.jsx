import React from "react";
import "./Timer.css";

export default function Timer(props) {
    return (
      <div className="timer">
        <span className="numeros">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="numeros">
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="numeros">
          {("0" + ((props.time / 10) % 100)).slice(-2)}
        </span>
      </div>
    );
  }
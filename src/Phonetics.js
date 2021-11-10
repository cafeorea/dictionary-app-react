import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetic">
      <a
        className="PhoneticLink"
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
      >
        ▶️
      </a>
      {props.phonetic.text}
    </div>
  );
}

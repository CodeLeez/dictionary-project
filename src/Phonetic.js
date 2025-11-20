import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  const playAudio = (event) => {
    event.preventDefault();

    const audioSrc = props.phonetic.audio;

    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
        alert("Sorry, we couldn't play the audio. Please try again later.");
      });
    } else {
      alert("Sorry we couldn't play this audio.Please try the next one.");
    }
  };

  return (
    <div className="Phonetic">
      <a
        href={props.phonetic.audio}
        target="_blank"
        onClick={playAudio}
        rel="noreferrer"
      >
        Listen
      </a>

      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}

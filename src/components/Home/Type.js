import React from "react";
import { ImShuffle } from "react-icons/im";
import Typewriter from "typewriter-effect";

function shuffleArray(array) {
  const newArray = [ ...array ];

  for (let i = newArray.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * i);
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}

let arr = [
  "Achiever",
  "Lifelong Learner",
  "Web Developer",

];
arr = shuffleArray(arr);

function Type() {
  return (
    <Typewriter
      options={{
        strings: arr,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

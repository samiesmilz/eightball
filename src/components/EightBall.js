import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const choice = (arr) => {
    const index = Math.floor(Math.random() * answers.length);
    return arr[index];
  };

  const [answer, setAnswer] = useState({
    msg: "Think of a Question 💭",
    color: "black",
  });

  const reset = () => {
    setAnswer(() => ({
      msg: "Think of a Question 💭",
      color: "black",
    }));
  };

  function handleClick(evt) {
    setAnswer(choice(answers));
  }

  return (
    <div className="EightBall-container">
      <button
        className="EightBall-circle"
        style={{ backgroundColor: answer.color }}
        onClick={handleClick}
      >
        <h3 className="EightBall-text">{answer.msg}</h3>
      </button>
      <div>
        <button className="EightBall-reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default EightBall;

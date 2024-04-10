import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p>The counter is now: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add</button>
      <button onClick={() => setCounter(counter - 1)}>Subtract</button>
    </>
  );
};

export default Counter;

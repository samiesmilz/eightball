import React from "react";
import logo from "../ball8.webp";
import "./Header.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to Eight Ball.</h1>
      <p className="Header-instructions">
        Think of a Question, when ready, tap the circle to reveal the answer.
        And click the button to reset.
      </p>
    </header>
  );
};

export default Header;

// App.jsx
import React, { useState } from "react";
import ImageAnimation from "./components/ImageAnimation";
import Terminal from "./components/Terminal";
import "./App.css";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [doneAnimating, setDoneAnimating] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputValue(newText);
    setIsTyping(newText.length > 0);
    // Start animation when there is some text
    setIsAnimating(newText.length > 0);
  };

  const handleInputBlur = () => {
    // Stop animation when typing finishes
    setIsAnimating(false);
    setIsTyping(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setDoneAnimating(true);
    setIsTyping(false);
    setInputValue("");
  };

  const handleInputSubmit = (command) => {
    // Add logic to handle different commands
    if (command.toLowerCase() === "start") {
      setIsAnimating(true);
    } else if (command.toLowerCase() === "stop") {
      setIsAnimating(false);
    }
  };

  return (
    <div className="app-container">
      <div className="center-container">
        <Terminal
          onInputSubmit={handleInputSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default App;

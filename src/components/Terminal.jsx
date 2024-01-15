// TerminalComponent.jsx
import React, { useState } from "react";
import "./Terminal.css";
import ImageAnimation from "./ImageAnimation";

const Terminal = () => {
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
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Anonymous+Pro"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
        />{" "}
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
        ></script>
      </head>
      <ImageAnimation
        isAnimating={isAnimating}
        doneAnimating={doneAnimating}
        isTyping={isTyping}
      />

      <div className="column is-flex">
        <div className="column-child terminal shadow">
          <div className="terminal-bar dark-mode">
            <div className="icon-btn close"></div>
            <div className="icon-btn min"></div>
            <div className="icon-btn max"></div>
            <div className="terminal-bar-text is-hidden-mobile dark-mode-text">
              guest@zach.dev: ~
            </div>
          </div>
          <div
            className="terminal-window primary-bg"
            onClick={() => document.getElementById("dummyKeyboard").focus()}
          >
            <div className="terminal-output" id="terminalOutput">
              <div className="terminal-line">
                <span className="help-msg">
                  Welcome to zach.dev — Type
                  <span className="code"> help</span> for a list of supported
                  commands.
                </span>
              </div>
            </div>
            <div className="terminal-line">
              <span className="user-input" id="userInput"></span>
              <form onSubmit={handleInputSubmit}>
                <div style={{ position: "relative" }}>
                  <span className="success">➜</span>
                  <span className="directory"> ~</span>
                  {inputValue && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0", // Adjust the top position as needed
                        left: "40px", // Adjust the left position as needed

                        color: "#ffffff", // Adjust the text color as needed
                        padding: "0 4px", // Adjust the padding as needed
                        borderRadius: "4px", // Adjust the border radius as needed
                      }}
                    >
                      {inputValue}
                    </div>
                  )}
                  <input
                    type="text"
                    id="dummyKeyboard"
                    className="dummy-keyboard"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;

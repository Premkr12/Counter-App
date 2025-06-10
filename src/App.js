import React, { useState, useEffect } from "react";
import "./App.css";
import clickSound from "./sounds/Click.mp3";

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  const playSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const triggerCount = (newCount) => {
    playSound();
    setAnimate(true);
    setCount(newCount);
  };

  const increment = () => triggerCount(count + 1);
  const decrement = () => triggerCount(count > 0 ? count - 1 : 0);
  const reset = () => triggerCount(0);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 200);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <h1>Counter App</h1>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="counter-box">
        <h2 className={animate ? "bounce" : ""}>{count}</h2>
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;

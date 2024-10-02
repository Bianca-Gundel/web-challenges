import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    {
      console.log("You clicked a button!");
    }
  }
  return (
    <Button
      text="Favorite Button"
      color="white"
      disabled={false}
      backgroundColor="black"
      onClick={handleClick}
    />
  );
}

function Button({ text, color, disabled, backgroundColor, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{ color: color, backgroundColor: backgroundColor }}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

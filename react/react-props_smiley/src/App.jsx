import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley isHappy={false} />
      <Smiley isHappy />
      <Smiley isHappy={false} />
      <Smiley isHappy />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  let emoji = null;
  if (isHappy) {
    emoji = <span>😊</span>;
  } else {
    emoji = <span>😐</span>;
  }
  // shorten: return isHappy ? <span>😊</span> : <span>😐</span>;
  return emoji;
}

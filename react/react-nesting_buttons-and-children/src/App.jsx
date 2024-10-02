import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Text</Button>
      <Button>Text2</Button>
      <Button>Text3</Button>
      <Button>Text4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}

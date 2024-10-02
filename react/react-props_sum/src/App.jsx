import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={5} />
      <Sum valueA={10} valueB={5} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}

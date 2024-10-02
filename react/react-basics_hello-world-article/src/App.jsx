import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>We got a paragraph over here!</p>
      <p>Just a extra paragraph...</p>
      <footer>Footer special without css!</footer>
    </article>
  );
}

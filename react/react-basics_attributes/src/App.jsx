import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">A heading Header Text</h2>
      <label htmlFor="email">Your E-Mail:</label>
      <input type="email" id="email"></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/React"
      ></a>
    </article>
  );
}

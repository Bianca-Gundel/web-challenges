import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Max 1" />
      <Greeting name="Max 2" />
      <Greeting name="Max 3" />
      <Greeting name="Max 4" />
      <Greeting name="Max 5" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello {name}!</h1>;
}

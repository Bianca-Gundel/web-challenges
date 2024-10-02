import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "Banana", color: "yellow" },
    { id: 1, name: "Apple", color: "green" },
    { id: 2, name: "Blueberry", color: "blue" },
    { id: 3, name: "Grapes", color: "purple" },
    { id: 4, name: "Orange", color: "orange" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}

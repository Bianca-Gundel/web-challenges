import "./Tag.css";

export default function Tag({ tag }) {
  return (
    <li className={tag === "admin" ? "tag tag--highlight" : "tag"}>{tag}</li>
  );
}

// if (tag === "admin") {
//   return <li className="tag--highlight , tag">{tag}</li>;
// } else {
//   return <li className="tag">{tag}</li>;
// }

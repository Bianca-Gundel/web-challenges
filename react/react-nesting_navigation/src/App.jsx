import "./styles.css";

import Header from "./components/header.jsx";
import Navigation from "./components/Navigation.jsx";
import Link from "./components/Link.jsx";
import Avatar from "./components/Avatar.jsx";
import Logo from "./components/Logo.jsx";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}

// <header className="header">
// <a href="#">
//   <img className="round-image" src={logo} alt="logo" />
// </a>
// <nav>
//   <a className="navigation__link" href="#home">
//     Home
//   </a>
//   <a className="navigation__link" href="#about">
//     About
//   </a>
//   <a className="navigation__link" href="#impressum">
//     Impressum
//   </a>
// </nav>
// <button
//   type="button"
//   onClick={() => console.log("I could toggle a profile!")}
//   aria-label="toggle profile"
// >
//   <img className="round-image" src={avatar} alt="avatar" />
// </button>
// </header>
// <main>content goes here…</main>

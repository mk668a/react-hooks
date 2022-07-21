import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { hooks } from "../constants";

function Home() {
  return (
    <>
      <div className="home">
        <header className="header">
          <h1>React Hooks</h1>
        </header>
        <nav className="nav">
          {hooks.map((hook) => (
            <div className="nav-item" key={hook}>
              <Link to={hook}>{hook} </Link>
            </div>
          ))}
        </nav>
        <footer className="footer">
          <a
            href="https://github.com/mk668a/react-hooks"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/mk668a/react-hooks
          </a>
        </footer>
      </div>
    </>
  );
}

export default Home;

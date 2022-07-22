import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import { routes } from "../constants";

function Home() {
  return (
    <>
      <div className="home">
        <header className="header">
          <h1>React Hooks</h1>
        </header>
        <nav className="nav">
          {routes.map((route) => (
            <div className="nav-item" key={route}>
              <Link to={route}>{route}</Link>
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

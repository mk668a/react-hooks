import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants";
import "./layout.scss";

const Menu: FunctionComponent = () => {
  return (
    <div className="menu">
      <input type="checkbox" id="menu-toggle" />
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">
        <li id="menu-item">
          <Link to="/">HOME</Link>
        </li>
        {routes
          .filter((route) => `/${route}` !== window.location.pathname)
          .map((route) => (
            <li key={route}>
              <div className="menu-item" key={route}>
                <Link to={`/${route}`}>{route} </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

type Props = {
  title: string;
  children: ReactElement;
};
export const Layout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <>
      <Menu />
      <div className="layout">
        <h1 className="layout-title">{title}</h1>
        <div className="layout-children">{children}</div>
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
};

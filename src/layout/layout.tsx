import React, { FunctionComponent, ReactElement } from "react";
import { Link } from "react-router-dom";
import { hooks } from "../constants";
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
        {hooks
          .filter((hook) => `/${hook}` !== window.location.pathname)
          .map((hook) => (
            <li key={hook}>
              <div className="menu-item" key={hook}>
                <Link to={`/${hook}`}>{hook} </Link>
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
      </div>
    </>
  );
};

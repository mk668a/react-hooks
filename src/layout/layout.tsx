import React, { FunctionComponent, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";
import "./layout.scss";
require("prismjs/components/prism-jsx");

const Menu: FunctionComponent = () => {
  return (
    <div className="menu">
      <input type="checkbox" id="menu-toggle" />
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">
        <li id="menu-item">
          <Link to="npm i --save-dev @types/prismjs/">HOME</Link>
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
  code?: string;
};
export const Layout: FunctionComponent<Props> = ({ title, children, code }) => {
  const [flex, setFlex] = useState<boolean>(false);
  const [codevisible, setCodevisible] = useState<boolean>(true);

  return (
    <>
      <Menu />
      <div className="layout">
        <h1 className="layout-title">{title}</h1>
        {code && (
          <div className="layout-filter">
            <div className="layout-filter-item">
              <label htmlFor="code">code visible</label>
              <input
                id="code"
                name="code"
                type="checkbox"
                checked={codevisible}
                onChange={() => setCodevisible(!codevisible)}
              ></input>
            </div>
            {codevisible && (
              <div className="layout-filter-item">
                <label htmlFor="flex">flex layout</label>
                <input
                  id="flex"
                  name="flex"
                  type="checkbox"
                  checked={flex}
                  onChange={() => setFlex(!flex)}
                ></input>
              </div>
            )}
          </div>
        )}

        <div className={flex ? "layout__flex" : ""}>
          <div className="layout-children">{children}</div>
          {codevisible && code && (
            <div className="layout-code">
              <a
                className="layout-code-editbutton"
                href={`https://codesandbox.io/s/react-hooks-n3jbsw?file=/src/pages/${title}.tsx`}
                target="_blank"
                rel="noreferrer"
              >
                Edit this code in editor
              </a>
              <Editor
                value={code}
                onValueChange={() => {}}
                highlight={(code) => highlight(code, languages.jsx!, "jsx")}
                padding={16}
                style={{
                  fontFamily: '"Fira code", "Fira Mono", monospace',
                  fontSize: 14,
                }}
              />
            </div>
          )}
        </div>
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

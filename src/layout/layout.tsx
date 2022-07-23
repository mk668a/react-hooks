import React, { FunctionComponent, ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import {
  defaultScope,
  Hooks,
  isDevelop,
  reactLiveHome,
  routes,
} from "../constants";
import "./layout.scss";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

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
  title: Hooks | "Not Found Page";
  children: ReactElement;
  code?: string;
  scope?: {
    [key: string]: any;
  };
};
export const Layout: FunctionComponent<Props> = ({
  title,
  children,
  code,
  scope,
}) => {
  const [flex, setFlex] = useState<boolean>(
    Boolean(window.localStorage.getItem("flex"))
  );
  const [codevisible, setCodevisible] = useState<boolean>(
    Boolean(window.localStorage.getItem("codevisible"))
  );

  return (
    <>
      <Menu />
      <div className="layout">
        <h1 className="layout-title">{title}</h1>

        <div className="layout-filter">
          <div className="layout-filter-item">
            <label htmlFor="code">code visible</label>
            <input
              id="code"
              name="code"
              type="checkbox"
              checked={codevisible}
              onChange={() => {
                window.localStorage.setItem(
                  "codevisible",
                  String(!codevisible)
                );
                setCodevisible(!codevisible);
              }}
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
                onChange={() => {
                  window.localStorage.setItem("flex", String(!flex));
                  setFlex(!flex);
                }}
              ></input>
            </div>
          )}
        </div>

        <div className={flex ? "layout__flex" : ""}>
          {isDevelop && <div className="layout-children debug">{children}</div>}

          <LiveProvider
            code={code}
            noInline={true}
            scope={{ ...defaultScope, ...scope }}
            theme={reactLiveHome as any}
            language="typescript"
            transformCode={(snippet) =>
              window.ts?.transpile(snippet, {
                noImplicitUseStrict: true,
                target: "es6",
                jsx: "react",
              })
            }
          >
            <LivePreview className="layout-children" />
            <LiveError style={{ color: "red" }} className="layout-children" />
            {codevisible && (
              <div className="layout-code">
                <LiveEditor style={{ fontSize: "16px" }} />
              </div>
            )}
          </LiveProvider>
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

declare global {
  interface Window {
    ts: any;
  }
}

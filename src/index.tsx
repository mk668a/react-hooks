import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { hooks } from "./constants";
import Home from "./pages/home";
import { UseState } from "./pages/useState";
import { NotFound } from "./pages/404";
import { UseEffect } from "./pages/useEffect";
import { UseContext } from "./pages/useContext";
import { UseReducer } from "./pages/useReducer";
import { UseCallback } from "./pages/useCallback";
import { UseMemo } from "./pages/useMemo";
import { UseRef } from "./pages/useRef";
import { UseImperativeHandle } from "./pages/useImperativeHandle";
import { UseLayoutEffect } from "./pages/useLayoutEffect";
import { UseDebugValue } from "./pages/useDebugValue";
import { UseDeferredValue } from "./pages/useDeferredValue";
import { UseTransition } from "./pages/useTransition";
import { UseId } from "./pages/useId";

const routes = [
  { path: hooks.useState, component: <UseState /> },
  { path: hooks.useEffect, component: <UseEffect /> },
  { path: hooks.useContext, component: <UseContext /> },
  { path: hooks.useReducer, component: <UseReducer /> },
  { path: hooks.useCallback, component: <UseCallback /> },
  { path: hooks.useMemo, component: <UseMemo /> },
  { path: hooks.useRef, component: <UseRef /> },
  { path: hooks.useImperativeHandle, component: <UseImperativeHandle /> },
  { path: hooks.useLayoutEffect, component: <UseLayoutEffect /> },
  { path: hooks.useDebugValue, component: <UseDebugValue /> },
  { path: hooks.useDeferredValue, component: <UseDeferredValue /> },
  { path: hooks.useTransition, component: <UseTransition /> },
  { path: hooks.useId, component: <UseId /> },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {routes.map((route, key) => (
          <Route path={`/${route.path}`} element={route.component} key={key} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useCallback,
  useContext,
  memo,
  createContext,
} from "react";

export const hooks = Object.freeze({
  useState: "useState",
  useEffect: "useEffect",
  useContext: "useContext",
  useReducer: "useReducer",
  useCallback: "useCallback",
  useMemo: "useMemo",
  useRef: "useRef",
  useImperativeHandle: "useImperativeHandle",
  useLayoutEffect: "useLayoutEffect",
  useDebugValue: "useDebugValue",
  useDeferredValue: "useDeferredValue",
  useTransition: "useTransition",
  useId: "useId",
} as const);

export type Hooks = typeof hooks[keyof typeof hooks];

export const routes = Object.freeze(Object.keys(hooks));

export const defaultScope = {
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useCallback,
  useContext,
  memo,
  createContext,
};

export const isDevelop = window.location.hostname === "localhost";

export const reactLiveHome = {
  plain: {
    color: "#9CDCFE",
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: "rgb(0, 0, 128)",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "rgb(106, 153, 85)",
      },
    },
    {
      types: ["builtin", "changed", "keyword"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: "rgb(181, 206, 168)",
      },
    },
    {
      types: ["constant"],
      style: {
        color: "rgb(100, 102, 149)",
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: "rgb(156, 220, 254)",
      },
    },
    {
      types: ["deleted", "string", "attr-value"],
      style: {
        color: "rgb(206, 145, 120)",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "rgb(215, 186, 125)",
      },
    },
    {
      types: ["tag"],
      style: {
        color: "rgb(86, 156, 214)",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "rgb(212, 212, 212)",
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: "#808080",
      },
    },
    {
      types: ["function"],
      style: {
        color: "rgb(220, 220, 170)",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "rgb(78, 201, 176)",
      },
    },
    {
      types: ["char"],
      style: {
        color: "rgb(209, 105, 105)",
      },
    },
    {
      types: ["highlight"],
      style: {
        background: "hsla(0, 0%, 40%, .5)",
      },
    },
  ],
};

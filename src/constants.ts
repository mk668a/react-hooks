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

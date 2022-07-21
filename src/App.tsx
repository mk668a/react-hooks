import React from "react";
import "./App.css";

function App() {
  const hooks = [
    "useState",
    "useEffect",
    "useContext",
    "useReducer",
    "useCallback",
    "useMemo",
    "useRef",
    "useImperativeHandle",
    "useLayoutEffect",
    "useDebugValue",
    "useDeferredValue",
    "useTransition",
    "useId",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Hooks</h1>
      </header>
      <nav className="nav">
        {hooks.map((hook) => (
          <div className="nav-item" key={hook}>
            {hook}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default App;

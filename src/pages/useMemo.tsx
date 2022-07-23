import React, { FunctionComponent, useMemo, useState } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseMemo: FunctionComponent = () => {
  console.log("-----render parent-----");

  const [state, setState] = useState<number>(100);
  const [state2, setState2] = useState<number>(100);

  const func = () => {
    console.log("call func");

    return state2 * 2;
  };

  const memoFunc = useMemo(() => {
    console.log("call memoFunc"); // not called

    return state2 * 2;
  }, [state2]);

  return (
    <Layout title={hooks.useMemo} code={code}>
      <>
        <h3>state: {state}</h3>
        <button onClick={() => setState(state + 1)}>state +1</button>
        <p>func():{func()}</p>
        <p>memoFunc:{memoFunc}</p>
      </>
    </Layout>
  );
};

const code = `
const UseMemo = () => {
  console.log("-----render parent-----");

  const [state, setState] = useState(100);
  const [state2, setState2] = useState(100);

  const func = () => {
    console.log("call func");

    return state2 * 2;
  };

  const memoFunc = useMemo(() => {
    console.log("call memoFunc"); // not called

    return state2 * 2;
  }, [state2]);

  return (
    <>
      <h3>state: {state}</h3>
      <button onClick={() => setState(state + 1)}>state +1</button>
      <p>func():{func()}</p>
      <p>memoFunc:{memoFunc}</p>
    </>
  );
};

render(
  <UseMemo />
)
`.trim();

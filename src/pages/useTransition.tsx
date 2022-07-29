import React, { FunctionComponent, useState, useTransition } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseTransition: FunctionComponent = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c: number) => c + 1);
    });
  }

  return (
    <Layout title={hooks.useTransition} code={code}>
      <>
        {isPending && <p>loading</p>}
        <button onClick={handleClick}>{count}</button>
      </>
    </Layout>
  );
};

const code = `
const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);

  function handleClick() {
    startTransition(() => {
      setCount((c: number) => c + 1);
    });
  }

  return (
    <>
      {isPending && <p>loading</p>}
      <button onClick={handleClick}>{count}</button>
    </>
  );
};

render(
  <UseTransition />
)
`.trim();

import React, { useState, FunctionComponent } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseState: FunctionComponent = () => {
  const [state, setState] = useState<string>("value");

  return (
    <Layout title={hooks.useState} code={code} scope={scope}>
      <>
        <h2>{state}</h2>
        <input value={state} onChange={(e) => setState(e.target.value)} />
      </>
    </Layout>
  );
};

const code = `
const UseState = () => {
  const [state, setState] = useState("value");

  return (
    <>
      <h2>{state}</h2>
      <input value={state} onChange={(e) => setState(e.target.value)} />
    </>
  );
};

render(
  <UseState />
)
`.trim();

const scope = {};

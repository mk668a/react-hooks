import React, { useState, FunctionComponent } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseState: FunctionComponent = () => {
  const [state, setState] = useState("value");

  return (
    <Layout title={hooks.useState}>
      <>
        <h2>{state}</h2>
        <input value={state} onChange={(e) => setState(e.target.value)} />
      </>
    </Layout>
  );
};

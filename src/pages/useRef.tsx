import React, { FunctionComponent, useState, useRef } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseRef: FunctionComponent = () => {
  const [width, setWith] = useState<number>(0);

  const refElement = useRef<HTMLDivElement>(null);

  return (
    <Layout title={hooks.useRef} code={code}>
      <>
        <div
          className="refElement"
          ref={refElement}
          style={{
            width: "100px",
            height: "100px",
            background: "gray",
          }}
        ></div>
        <h2>ref element width: {width}</h2>
        <button
          onClick={() => {
            if (refElement.current) setWith(refElement.current.clientWidth);
          }}
        >
          Set ref element width
        </button>
      </>
    </Layout>
  );
};

const code = `
const UseRef = () => {
  const [width, setWith] = useState(0);

  const refElement = useRef(null);

  return (
    <>
      <div
        className="refElement"
        ref={refElement}
        style={{
          width: "100px",
          height: "100px",
          background: "gray",
        }}
      ></div>
      <h2>ref element width: {width}</h2>
      <button
        onClick={() => {
          if (refElement.current) setWith(refElement.current.clientWidth);
        }}
      >
        Set ref element width
      </button>
    </>
  );
};

render(
  <UseRef />
)
`.trim();

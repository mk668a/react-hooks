import React, {
  FunctionComponent,
  useState,
  useLayoutEffect,
  useEffect,
} from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseLayoutEffect: FunctionComponent = () => {
  const [number, setNumber] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);

  useEffect(() => {
    if (number === 0) {
      setNumber(Math.floor(Math.random() * 100));
    }
  }, [number]);

  useLayoutEffect(() => {
    if (number2 === 0) {
      setNumber2(Math.floor(Math.random() * 100));
    }
  }, [number2]);

  return (
    <Layout title={hooks.useLayoutEffect} code={code}>
      <>
        <h3>useEffect value: {number}</h3>
        <p>
          Called asynchronously after DOM changes. 0 is drawn for a moment
          before the value is updated by useEffect.
        </p>
        <button onClick={() => setNumber(0)}>set random value</button>

        <h3>useLayoutEffect value: {number2}</h3>
        <p>Called synchronously after DOM changes. Called brefore mounted.</p>
        <button onClick={() => setNumber2(0)}>set random value</button>
      </>
    </Layout>
  );
};

const code = `
const UseLayoutEffect = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  useEffect(() => {
    if (number === 0) {
      setNumber(Math.floor(Math.random() * 100));
    }
  }, [number]);

  useLayoutEffect(() => {
    if (number2 === 0) {
      setNumber2(Math.floor(Math.random() * 100));
    }
  }, [number2]);

  return (
    <>
      <h3>useEffect value: {number}</h3>
      <p>
        Called asynchronously after DOM changes. 0 is drawn for a moment
        before the value is updated by useEffect.
      </p>
      <button onClick={() => setNumber(0)}>set random value</button>

      <h3>useLayoutEffect value: {number2}</h3>
      <p>Called synchronously after DOM changes. Called brefore mounted.</p>
      <button onClick={() => setNumber2(0)}>set random value</button>
    </>
  );
};

render(
  <UseLayoutEffect />
)
`.trim();

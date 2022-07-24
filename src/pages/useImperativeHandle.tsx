import React, {
  forwardRef,
  FunctionComponent,
  useImperativeHandle,
  useRef,
} from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

interface Handler {
  setFocus(): void;
}

const Child = forwardRef<Handler>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => {
    return {
      setFocus() {
        inputRef?.current?.focus();
      },
    };
  });

  return <input ref={inputRef} type="text" />;
});

export const UseImperativeHandle: FunctionComponent = () => {
  const ref = useRef<Handler>(null);

  return (
    <Layout title={hooks.useImperativeHandle} code={code}>
      <>
        <Child ref={ref} />
        <button
          onClick={() => {
            ref?.current?.setFocus();
          }}
        >
          focus
        </button>
      </>
    </Layout>
  );
};

const code = `
const Child = forwardRef((_props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      setFocus() {
        inputRef?.current?.focus();
      },
    };
  });

  return <input ref={inputRef} type="text" />;
});

const UseImperativeHandle = () => {
  const ref = useRef(null);

  return (
    <>
      <Child ref={ref} />
      <button
        onClick={() => {
          ref?.current?.setFocus();
        }}
      >
        focus
      </button>
    </>
  );
};

render(
  <UseImperativeHandle />
)
`.trim();

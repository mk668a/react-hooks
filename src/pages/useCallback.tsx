import React, { FunctionComponent, memo, useCallback, useState } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

const CallBackChild = ({ callBack }: { callBack: any }) => {
  console.log("render component with callBack");
  return <></>;
};

const MemoChild = memo(({ func }: { func: any }) => {
  console.log("render component with memo");
  return <></>;
});

const CallBackMemoChild = memo(({ callBack }: { callBack: any }) => {
  console.log("render component with memo & callBack");
  return <></>;
});

export const UseCallback: FunctionComponent = () => {
  console.log("-----render parent-----");

  const [state, setState] = useState<number>(100);
  const [state2, setState2] = useState<number>(100);

  const func = () => {
    return state2;
  };

  const callBackFunc = useCallback(() => {
    return state2;
  }, [state2]);

  return (
    <Layout title={hooks.useCallback} code={code}>
      <>
        <h3>state: {state}</h3>
        <button onClick={() => setState(state + 1)}>state +1</button>

        <MemoChild func={func} />
        <CallBackChild callBack={callBackFunc} />
        <CallBackMemoChild callBack={callBackFunc} />
      </>
    </Layout>
  );
};

const code = `
const CallBackChild = ({ callBack }) => {
  console.log("render component with callBack");
  return <></>;
};

const MemoChild = memo(({ func }) => {
  console.log("render component with memo");
  return <></>;
});

const CallBackMemoChild = memo(({ callBack }) => {
  console.log("render component with memo & callBack");
  return <></>;
});

const UseCallback = () => {
  console.log("-----render parent-----");

  const [state, setState] = useState(100);
  const [state2, setState2] = useState(100);

  const func = () => {
    return state2;
  };

  const callBackFunc = useCallback(() => {
    return state2;
  }, [state2]);

  return (
    <>
      <h3>state: {state}</h3>
      <button onClick={() => setState(state + 1)}>state +1</button>

      <MemoChild func={func} />
      <CallBackChild callBack={callBackFunc} />
      <CallBackMemoChild callBack={callBackFunc} />
    </>
  );
};

render(
  <UseCallback />
)
`.trim();

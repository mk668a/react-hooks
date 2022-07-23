import React, { FunctionComponent, useCallback, useState } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

const Age = ({
  age,
  handleClick,
}: {
  age: number;
  handleClick: () => void;
}) => {
  return (
    <div>
      <div style={{ border: "2px", background: "papayawhip", padding: "1rem" }}>
        Today I am {age} Years of Age
      </div>
      <pre> - click the button below 👇 </pre>
      <button onClick={handleClick}>Get older! </button>
    </div>
  );
};

const Instructions = React.memo((props: { doSomething: any }) => {
  return (
    <div style={{ background: "black", color: "yellow", padding: "1rem" }}>
      <p>Follow the instructions above as closely as possible</p>
    </div>
  );
});

export const UseCallback: FunctionComponent = () => {
  const [age, setAge] = useState<number>(99);
  const handleClick = () => setAge(age + 1);
  const someValue = "someValue";

  return (
    <Layout title={hooks.useCallback}>
      <>
        <Age age={age} handleClick={handleClick} />
        <Instructions
          doSomething={useCallback(() => {
            return someValue;
          }, [someValue])}
        />
      </>
    </Layout>
  );
};

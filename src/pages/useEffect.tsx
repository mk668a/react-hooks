import React, { useEffect, FunctionComponent, useState } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

export const UseEffect: FunctionComponent = () => {
  const [title, setTitle] = useState("You are 0 years old");
  const [age, setAge] = useState(0);
  const handleClick = () => setAge(age + 1);

  useEffect(() => {
    return setTitle(`You are ${age} years old`);
  }, [age]);

  return (
    <Layout title={hooks.useEffect}>
      <>
        <h2>{title}</h2>
        <h4>age: {age}</h4>
        <button onClick={handleClick}>age + 1</button>
      </>
    </Layout>
  );
};

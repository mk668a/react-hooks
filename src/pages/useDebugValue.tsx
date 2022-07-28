import React, { FunctionComponent, useState, useDebugValue } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

const useUser = () => {
  const [user, setUser] = useState<{ name?: string }>({});

  useDebugValue(user.name ? `user: ${user.name}` : "user not found");
  console.log(user.name ? `user: ${user.name}` : "user not found");

  return { user, setUser };
};

export const UseDebugValue: FunctionComponent = () => {
  const { user, setUser } = useUser();

  return (
    <Layout title={hooks.useDebugValue} code={code}>
      <>
        <p>
          useDebugValue can be used to display a label for custom hooks in React
          DevTools.
        </p>
        <h3>user: {user.name}</h3>
        <button
          onClick={() => {
            setUser({ name: "jhon" });
          }}
        >
          set user
        </button>
        <button
          onClick={() => {
            setUser({});
          }}
        >
          set user to false
        </button>
      </>
    </Layout>
  );
};

const code = `
const useUser = () => {
  const [user, setUser] = useState({});

  useDebugValue(user.name ? \`user: \${user.name}\` : "user not found");

  return { user, setUser };
};

const UseDebugValue = () => {
  const { user, setUser } = useUser();

  return (
    <>
      <p>
        useDebugValue can be used to display a label for custom hooks in React
        DevTools.
      </p>
      <h3>user: {user.name}</h3>
      <button
        onClick={() => {
          setUser({ name: "jhon" });
        }}
      >
        set user
      </button>
      <button
        onClick={() => {
          setUser({});
        }}
      >
        set user to false
      </button>
    </>
  );
};

render(
  <UseDebugValue />
)
`.trim();

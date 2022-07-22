import React, { FunctionComponent } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

type UserContext = {
  username: string;
  setUsername: (value: string) => void;
};
const MyContext = React.createContext<UserContext>({
  username: "",
  setUsername: (value) => {},
});

export const MyContextProvider = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const [username, setUsername] = React.useState("John Doe");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};

export const UseContext: FunctionComponent = () => {
  const myContext = React.useContext(MyContext);
  const { username, setUsername } = React.useContext(MyContext);

  const [newUsername, setNewUsername] = React.useState("");

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNewUsername(e.target.value);
  };

  return (
    <Layout title={hooks.useContext}>
      <>
        <h3>{myContext.username}</h3>
        <input placeholder={username} onChange={handleChange} />
        <button onClick={() => setUsername(newUsername)}>Save</button>
      </>
    </Layout>
  );
};

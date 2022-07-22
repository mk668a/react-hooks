import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

type UserContext = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
};
const MyContext = createContext<UserContext>({
  userName: "initial context username",
  setUserName: () => {},
});

const MyContextProvider = ({ children }: { children: ReactElement }) => {
  const [userName, setUserName] = useState<string>("provider username");

  return (
    <MyContext.Provider value={{ userName, setUserName }}>
      {children}
    </MyContext.Provider>
  );
};

const MyContextEditor = () => {
  const { userName, setUserName } = useContext(MyContext);

  const [inputValue, setInputValue] = useState("new username");

  return (
    <>
      <h3>userName(inside the provider): {userName}</h3>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setUserName(inputValue);
        }}
      >
        set input value to myContext
      </button>
    </>
  );
};

export const UseContext: FunctionComponent = () => {
  const myContext = useContext(MyContext);
  return (
    <Layout title={hooks.useContext}>
      <>
        <p>userName(outside the provider): {myContext.userName}</p>
        <MyContextProvider>
          <MyContextEditor />
        </MyContextProvider>
      </>
    </Layout>
  );
};

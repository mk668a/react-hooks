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

type Context = {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
};
const MyContext = createContext<Context>({
  text: "initial text",
  setText: () => {},
});

const MyContextProvider = ({ children }: { children: ReactElement }) => {
  const [text, setText] = useState<string>("provider text");

  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};

const MyContextEditor = () => {
  const { text, setText } = useContext(MyContext);

  const [inputValue, setInputValue] = useState("new text");

  return (
    <>
      <p>text: {text}</p>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setText(inputValue);
        }}
      >
        set input value to myContext
      </button>
    </>
  );
};

export const UseContext: FunctionComponent = () => {
  return (
    <Layout title={hooks.useContext} code={code}>
      <>
        <h3>outside the provider</h3>
        <MyContextEditor />

        <MyContextProvider>
          <>
            <h3>inside the provider</h3>
            <MyContextEditor />
          </>
        </MyContextProvider>
      </>
    </Layout>
  );
};

const code = `
const MyContext = createContext({
  text: "initial text",
  setText: () => {},
});

const MyContextProvider = ({ children }) => {
  const [text, setText] = useState<string>("provider text");

  return (
    <MyContext.Provider value={{ text, setText }}>
      {children}
    </MyContext.Provider>
  );
};

const MyContextEditor = () => {
  const { text, setText } = useContext(MyContext);

  const [inputValue, setInputValue] = useState("new text");

  return (
    <>
      <p>text: {text}</p>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button
        onClick={() => {
          setText(inputValue);
        }}
      >
        set input value to myContext
      </button>
    </>
  );
};

const UseContext = () => {
  return (
    <>
      <h3>outside the provider</h3>
      <MyContextEditor />

      <MyContextProvider>
        <>
          <h3>inside the provider</h3>
          <MyContextEditor />
        </>
      </MyContextProvider>
    </>
  );
};

render(
  <UseContext />
)
`.trim();

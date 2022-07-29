import React, {
  FunctionComponent,
  useDeferredValue,
  useMemo,
  useState,
} from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

const userList = [
  {
    name: "john",
  },
];

const SlowUI = () => (
  <>
    {Array(50000)
      .fill(1)
      .map((_, index) => (
        <span key={index}></span>
      ))}
  </>
);

export const UseDeferredValue: FunctionComponent = () => {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);

  const [calledListWithDeferredValue, setCalledListWithDeferredValue] =
    useState(0);
  const [calledList, setCalledList] = useState(0);

  const list = useMemo(() => {
    setCalledList(calledList + 1);

    return userList.filter((user) => user.name.includes(name));
  }, [name]);

  const listWithDeferredValue = useMemo(() => {
    setCalledListWithDeferredValue(calledListWithDeferredValue + 1);

    return userList.filter((user) => user.name.includes(deferredName));
  }, [deferredName]);

  return (
    <Layout title={hooks.useDeferredValue} code={code}>
      <>
        <p>type "john"</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h4>list search result: </h4>
        {list.map((item, i) => (
          <h3 key={i}>{item.name}</h3>
        ))}
        <p>called list: {calledList} times</p>

        <h4>list With DeferredValue search result: </h4>
        {listWithDeferredValue.map((item, i) => (
          <h3 key={i}>{item.name}</h3>
        ))}
        <p>
          called list With DeferredValue: {calledListWithDeferredValue} times
        </p>

        <p>
          <b>keyword: throttle, debounce</b>
        </p>

        <SlowUI />
      </>
    </Layout>
  );
};

const code = `
const userList = [
  {
    name: "john",
  },
];

const SlowUI = () => (
  <>
    {Array(50000)
      .fill(1)
      .map((_, index) => (
        <span key={index}></span>
      ))}
  </>
);

const UseDeferredValue = () => {
  const [name, setName] = useState("");
  const deferredName = useDeferredValue(name);

  const [calledListWithDeferredValue, setCalledListWithDeferredValue] =
    useState(0);
  const [calledList, setCalledList] = useState(0);

  const list = useMemo(() => {
    setCalledList(calledList + 1);

    return userList.filter((user) => user.name.includes(name));
  }, [name]);

  const listWithDeferredValue = useMemo(() => {
    setCalledListWithDeferredValue(calledListWithDeferredValue + 1);

    return userList.filter((user) => user.name.includes(deferredName));
  }, [deferredName]);

  return (
    <>
      <p>type "john"</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>list search result: </h4>
      {list.map((item, i) => (
        <h3 key={i}>{item.name}</h3>
      ))}
      <p>called list: {calledList} times</p>

      <h4>list With DeferredValue search result: </h4>
      {listWithDeferredValue.map((item, i) => (
        <h3 key={i}>{item.name}</h3>
      ))}
      <p>
        called list With DeferredValue: {calledListWithDeferredValue} times
      </p>

      <p>
        <b>keyword: throttle, debounce</b>
      </p>

      <SlowUI />
    </>
  );
};

render(
  <UseDeferredValue />
)
`.trim();

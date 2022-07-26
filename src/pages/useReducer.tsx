import React, { Dispatch, FunctionComponent, memo, useReducer } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

type State = {
  name: string;
  lastname: string;
};

type Action = {
  type: string;
  payload: any;
};

const actionIds = {
  setName: "setname",
  setLastname: "setlastname",
};

const userInfoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionIds.setName:
      return {
        ...state,
        name: action.payload,
      };
    case actionIds.setLastname:
      return {
        ...state,
        lastname: action.payload,
      };
    default:
      return state;
  }
};

const EditUsername: FunctionComponent<{
  name: string;
  dispatch: Dispatch<Action>;
}> = memo(({ name, dispatch }) => {
  console.log("rerendered memo");

  return (
    <input
      value={name}
      onChange={(e) =>
        dispatch({ type: actionIds.setName, payload: e.target.value })
      }
    />
  );
});

export const UseReducer: FunctionComponent = () => {
  const [userInfo, dispatch] = useReducer(userInfoReducer, {
    name: "name",
    lastname: "lastname",
  });

  return (
    <Layout title={hooks.useReducer} code={code}>
      <>
        <h3>name: {userInfo.name}</h3>
        <h3>lastname: {userInfo.lastname}</h3>
        <EditUsername name={userInfo.name} dispatch={dispatch} />
        <input
          value={userInfo.lastname}
          onChange={(e) =>
            dispatch({ type: actionIds.setLastname, payload: e.target.value })
          }
        />
      </>
    </Layout>
  );
};

const code = `
const actionIds = {
  setName: "setname",
  setLastname: "setlastname",
};

const userInfoReducer = (state, action) => {
  switch (action.type) {
    case actionIds.setName:
      return {
        ...state,
        name: action.payload,
      };
    case actionIds.setLastname:
      return {
        ...state,
        lastname: action.payload,
      };
    default:
      return state;
  }
};

const EditUsername = memo(({ name, dispatch }) => {
  console.log("rerendered memo");

  return (
    <input
      value={name}
      onChange={(e) =>
        dispatch({ type: actionIds.setName, payload: e.target.value })
      }
    />
  );
});

const UseReducer: FunctionComponent = () => {
  const [userInfo, dispatch] = useReducer(userInfoReducer, {
    name: "name",
    lastname: "lastname",
  });

  return (
    <>
      <h3>name: {userInfo.name}</h3>
      <h3>lastname: {userInfo.lastname}</h3>
      <EditUsername name={userInfo.name} dispatch={dispatch} />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          dispatch({ type: actionIds.setLastname, payload: e.target.value })
        }
      />
    </>
  );
};


render(
  <UseReducer />
)
`.trim();

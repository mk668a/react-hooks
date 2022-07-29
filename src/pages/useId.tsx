import React, { FunctionComponent, useId } from "react";
import { hooks } from "../constants";
import { Layout } from "../layout/layout";

type Props = {
  title: string;
  errorMessage?: string;
};
const InputBlock = ({ title, errorMessage }: Props) => {
  const errorMessageId = useId();

  return (
    <div>
      <label>
        <span role="textbox">{title}</span>
        <input
          type="text"
          aria-invalid={!!errorMessage}
          aria-errormessage={errorMessageId}
        />
      </label>
      {!!errorMessage && <h3>{errorMessage}</h3>}
      <p>errorMessageId: {errorMessageId}</p>
    </div>
  );
};

export const UseId: FunctionComponent = () => {
  return (
    <Layout title={hooks.useId} code={code}>
      <>
        <InputBlock title="first_name" errorMessage="error" />
        <hr />
        <InputBlock title="last_name" />
      </>
    </Layout>
  );
};

const code = `
const InputBlock = ({ title, errorMessage }: Props) => {
  const errorMessageId = useId();

  return (
    <div>
      <label>
        <span role="textbox">{title}</span>
        <input
          type="text"
          aria-invalid={!!errorMessage}
          aria-errormessage={errorMessageId}
        />
      </label>
      {!!errorMessage && <h3>{errorMessage}</h3>}
      <p>errorMessageId: {errorMessageId}</p>
    </div>
  );
};

const UseId = () => {
  return (
    <>
      <InputBlock title="first_name" errorMessage="error" />
      <hr />
      <InputBlock title="last_name" />
    </>
  );
};

render(
  <UseId />
)
`.trim();

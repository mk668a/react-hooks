import React, { FunctionComponent } from "react";
import { Layout } from "../layout/layout";

export const NotFound: FunctionComponent = () => {
  return (
    <Layout title="Not Found Page">
      <>
        <h2>404</h2>
        <p>Sorry, the page you're looking con not found.</p>
      </>
    </Layout>
  );
};

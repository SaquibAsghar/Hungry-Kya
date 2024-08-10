import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Page {err.statusText}.</h1>
      <p>
        {err.status}: {err.error.message}
      </p>
    </div>
  );
};

export default Error;

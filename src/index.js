import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./router";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={rootRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLayout from "./Layout/AppLayout";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<AppLayout />);

import React from "react";
import ReactDOM from "react-dom/client";

const children = React.createElement(
  "div",
  {},
  React.createElement("span", {}, [
    React.createElement("h1", {}, "React With Parcel ⚛️ + 📦 = 🚀"),
    React.createElement(
      "p",
      {},
      "This is a simple example of React application bundled with Parcel."
    ),
    React.createElement("a", { href: "https://parceljs.org/" }, "Learn More"),
    React.createElement("br", {}),
  ])
);
const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(children);

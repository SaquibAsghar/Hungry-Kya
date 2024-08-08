import React from "react";

const Header = () => (
  <h1 className="text-3xl font-bold underline">
    React With Parcel ⚛️ + 📦 = 🚀{" "}
  </h1>
);

const Description = () => (
  <>
    <p>This is a simple example of React application bundled with Parcel.</p>
    <a href="https://react.dev/" target="blank">
      Learn React
    </a>
    &nbsp;
    <a href="https://parceljs.org/" target="blank">
      Learn Parcel
    </a>
    <br />
    <h3>This is a simple example of React application bundled with Parcel</h3>
  </>
);
const App = () => {
  return (
    <div>
      <Header />
      <Description />
    </div>
  );
};

export default App;

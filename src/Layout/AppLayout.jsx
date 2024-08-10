import React from "react";
import App from "../App";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="bg-slate-200">
      <Outlet />
    </div>
  );
};

export default AppLayout;

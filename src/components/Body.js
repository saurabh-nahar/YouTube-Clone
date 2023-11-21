import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div>
      <Header />
      <div className="flex pt-16">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;

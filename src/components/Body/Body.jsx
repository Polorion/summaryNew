import * as React from "react";
import Left from "./Left/Left";
import Right from "./Right/Right";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div>
      <Outlet />
      <div className={"container "}>
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Body;

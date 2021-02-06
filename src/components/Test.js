import React from "react";
import { Test2 } from "./Test2";
import GlobalStateProvider from "../store/GlobalStateProvider";

export default function Test() {
  return (
    <GlobalStateProvider>
      <div className="App">
        <h1>Download Image</h1>
        <Test2 />
      </div>
    </GlobalStateProvider>
  );
}

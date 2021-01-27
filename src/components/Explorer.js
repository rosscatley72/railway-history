import React from "react";
import Map from "./Map.js";

const Explorer = () => {
  return (
    <>
      <h1>{process.env.REACT_APP_GOOGLE_KEY}</h1>
      <Map />
    </>
  );
};

export default Explorer;

import React, { Fragment, useContext } from "react";
import NonEditMap from "./EditMap";
import EditMap from "./RouteEditMap";
import Context from "../store/context";

export const Test9 = () => {
  const { globalState, globalDispatch } = useContext(Context);

  console.log(globalState);
  console.log(`globalState.editAction: ${globalState.editAction}  `);
  try {
    console.log(
      `globalState.editRoute.status.name: ${globalState.editRoute.status.name}`
    );
  } catch {
    console.log(`status.name not defined`);
  }

  console.log(
    `Show Edit Map: ${
      globalState.editAction === "EDITROUTE" &&
      globalState.editRoute.status.name === "EDITINGROUTE"
    }`
  );

  return (
    <Fragment>
      {globalState.editAction === "EDITROUTE" &&
      globalState.editRoute.status.name === "EDITINGROUTE" ? (
        <NonEditMap />
      ) : (
        <NonEditMap />
      )}
    </Fragment>
  );
};

export default Test9;

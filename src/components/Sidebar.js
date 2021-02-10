import { React, useContext } from "react";
import Context from "../store/context";

import "../custom.css";

export function Sidebar() {
  const { globalState, globalDispatch } = useContext(Context);

  const addRouteStyle = {
    backgroundColor: globalState.addRoute.active
      ? "rgba(128, 16, 38, 1)"
      : "blue",
  };

  console.log(`SIDEBAR......${JSON.stringify(globalState)}`);
  const editRouteStyle = {
    backgroundColor: globalState.editRoute.active
      ? "rgba(128, 16, 38, 1)"
      : "blue",
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <div>
          <li
            className="sidebar-row"
            style={addRouteStyle}
            key="1"
            onClick={(event) =>
              globalState.addRoute.active
                ? null
                : globalDispatch({ type: "SIDEBARADDROUTE", payload: event })
            }
          >
            <div id="icon"></div>
            <div id="title">Add Route</div>
          </li>
          <li
            className="sidebar-row"
            style={editRouteStyle}
            key="2"
            onClick={(event) =>
              globalState.editRoute.active
                ? null
                : globalDispatch({ type: "SIDEBAREDITROUTE", payload: event })
            }
          >
            <div id="icon"></div>
            <div id="title">Edit Route</div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;

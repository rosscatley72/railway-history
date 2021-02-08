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
                : globalDispatch({ type: "ADDROUTE", payload: event })
            }
          >
            <div id="icon"></div>
            <div id="title">Add Route</div>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;

import React, { useContext } from "react";
import { SidebarData } from "./SidebarData";
import Context from "../store/context";

export const Test2 = () => {
  const { globalState, globalDispatch } = useContext(Context);
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((menuItem, key) => {
          return (
            <div>
              <li
                className="sidebar-row"
                key={key}
                onClick={(event) =>
                  globalDispatch({ type: "MAPCLICK", payload: event })
                }
              >
                <div id="icon"></div>
                <div id="title">{menuItem.title}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

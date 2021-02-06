import React from "react";
import { SidebarData } from "./SidebarData";

import "../custom.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        {SidebarData.map((menuItem, key) => {
          return (
            <div>
              <li
                className="sidebar-row"
                key={key}
                onClick={() => {
                  window.location.pathname = menuItem.link;
                }}
              >
                {console.log(menuItem.icon.type)}
                <div id="icon">
                  <img
                    src={menuItem.icon}
                    style={{ width: "100%", height: "100%" }}
                    alt="Menu Icon"
                  />
                </div>
                <div id="title">{menuItem.title}</div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

import { createContext } from "react";

const Context = createContext({
  editing: false,
  editaction: "NONE",
  addRoute: { active: false, status: { name: "NOTACTIVE", id: 0 } },
});

export default Context;

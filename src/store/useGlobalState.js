import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(
    `DISPATCH CALLED......${JSON.stringify(state)} ${JSON.stringify(
      action.type
    )}`
  );
  switch (action.type) {
    case "ADDROUTE":
      if (state.editing === true) return state;
      return {
        ...state,
        editing: true,
        editAction: "ADDROUTE",
        addRoute: { active: true, status: { name: "ADDINGSTARTPOINT", id: 1 } },
      };

    case "MAPCLICK":
      switch (state.addRoute.status.name) {
        case "ADDINGSTARTPOINT":
          console.log("Creating state for start route point");
          console.log(`Payload: ${action.payload}`);
          return (
            //User has clicked on add route, hasn't yet clicked on map
            //Load info panel
            //Get an ID for this route
            {
              ...state,
              addRoute: {
                ...state.addRoute,
                status: { name: "ADDINGENDPOINT", id: 2 },
                startRoutePoint: {
                  lat: action.payload.latLng.lat(),
                  lng: action.payload.latLng.lng(),
                },
              },
            }
          );
        case "ADDINGENDPOINT":
          console.log("ADDINGENDPOINT");
          console.log(state);
          return {
            ...state,
            addRoute: {
              ...state.addRoute,
              status: { name: "COMPLETINGDETAILS", id: 3 },
              endRoutePoint: {
                lat: action.payload.latLng.lat(),
                lng: action.payload.latLng.lng(),
              },
            },
          };

        default:
          return state;
      }

    case "CANCEL":
      console.log("CANCEL");
      switch (state.editAction) {
        case "ADDROUTE":
          return {
            ...state,
            editing: false,
            editAction: "NONE",
            addRoute: {
              active: false,
              status: { name: "NOTACTIVE", id: 0 },
            },
          };
      }
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    addRoute: {},
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;

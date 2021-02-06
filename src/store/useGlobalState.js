import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isLoggedIn: true };
    case "LOGOUT":
      return { isLoggedIn: false };
    case "MAPCLICK":
      console.log(action);
      console.log(
        `Lat: ${action.payload.latLng.lat()}, Lng: ${action.payload.latLng.lng()}`
      );
      return {
        //User has clicked on add route, hasn't yet clicked on map
        //Load info panel
        //Get an ID for this route
      };
    case "ADDROUTEENDPOINT":
      return {
        //User has clicked on startpoint for route
        //Record start point coordinates
        //Place route start marker on map
      };

    case "ADDROUTE":
      //User has added end point of new route.

      //Record end point coordinates
      //Add polyline between start and end point
      //Move state to EditRoute - this allows user to add and move routepoints and create points of interest

      return {};

    case "EDITROUTE":
      //User has either selected to edit an existing route or is adding a new route and

      return {};

    case "UPDATEROUTE":
      return {};
    default: {
      return state;
    }
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    isLoggedIn: false,
  });

  return { globalState, globalDispatch };
};

export default useGlobalState;

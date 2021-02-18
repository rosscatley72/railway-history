import { useReducer } from "react";
import { ChangePolylineClickableStatus } from "../components/EditMap";
import { RouteData } from "../components/RouteData";

const reducer = (state, action) => {
  let newRoutes = [];
  switch (action.type) {
    case "SIDEBARADDROUTE":
      if (state.editing === true) return state;
      return {
        ...state,
        editing: true,
        editAction: "ADDROUTE",
        addRoute: { active: true, status: { name: "ADDINGSTARTPOINT", id: 1 } },
      };

    case "SIDEBAREDITROUTE":
      if (state.editing === true) return state;
      newRoutes = ChangePolylineClickableStatus(state.routes, true);
      return {
        ...state,
        editing: true,
        editAction: "EDITROUTE",
        editRoute: { active: true, status: { name: "SELECTINGROUTE", id: 1 } },
        routes: newRoutes,
      };

    case "MAPCLICK":
      if (state.editing !== true) return state;
      switch (state.addRoute.status.name) {
        case "ADDINGSTARTPOINT":
          return {
            ...state,
            addRoute: {
              ...state.addRoute,
              status: { name: "ADDINGENDPOINT", id: 2 },
              startRoutePoint: {
                lat: action.payload.latLng.lat(),
                lng: action.payload.latLng.lng(),
              },
            },
          };

        case "ADDINGENDPOINT":
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

        case "FINISHADDROUTE":
          return {
            ...state,
            editing: false,
            editAction: "NONE",
            addRoute: { active: false, status: { name: "NOTACTIVE", id: 0 } },
          };

        default:
          return state;
      }

    case "ADDROUTESTARTROUTEPOINTMOVED":
      return {
        ...state,
        addRoute: { ...state.addRoute, startRoutePoint: action.payload.latLng },
      };

    case "ADDROUTEENDROUTEPOINTMOVED":
      return {
        ...state,
        addRoute: { ...state.addRoute, endRoutePoint: action.payload.latLng },
      };

    case "UPDATEROUTESTYLES":
      return {
        ...state,
        routes: { ...state.routes, styles: action.payload },
      };

    case "EDITROUTESELECTED":
      newRoutes = ChangePolylineClickableStatus(state.routes, false);
      return {
        ...state,
        editRoute: {
          ...state.editRoute,
          status: { name: "EDITINGROUTE", id: 2 },
          routeId: action.payload.routeId,
        },
        routes: newRoutes,
      };

    case "CANCEL":
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
        default:
          return state;
      }
    default:
      return state;
  }
};

const useGlobalState = () => {
  const newRouteData = [];
  RouteData.map((route) => {
    newRouteData.push({
      ...route,
      styles: { strokeColor: "#ff8800", clickable: false },
    });
    return false;
  });

  const [globalState, globalDispatch] = useReducer(reducer, {
    editing: false,
    editAction: "NONE",
    addRoute: { active: false, status: { name: "NOTACTIVE", id: 0 } },
    editRoute: { active: false },
    status: { name: "NOTACTIVE", id: 0 },
    routes: newRouteData,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;

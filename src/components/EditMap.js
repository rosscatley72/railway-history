import React, { Fragment, useEffect, useContext, useRef } from "react";
import {
  GoogleMap,
  Polyline,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import Context from "../store/context";
import RoutePointIcon from "../images/circle-10.png";

const EditMap = (props) => {
  const { globalState, globalDispatch } = useContext(Context);
  const testRef = useRef();
  const testMapRef = useRef();

  const mapContainerStyle = {
    width: props.width,
    height: "80vh",
  };

  let editLine;

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  const centre = { lat: 51.999889, lng: -0.98807 };

  if (loadError) return "Error loading Google Map";
  if (!isLoaded) return "Loading Maps....";

  const handleRouteClick = (event, routeId) => {
    globalDispatch({
      type: "EDITROUTESELECTED",
      payload: { edit: true, routeId: routeId },
    });
  };

  const handleRoutePointDrag = (event, routePointIdx) => {};

  return (
    <Fragment>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        ref={testMapRef}
        zoom={10}
        center={centre}
        onClick={(event) =>
          globalDispatch({ type: "MAPCLICK", payload: event })
        }
      >
        {globalState.routes.map((route, idx) => {
          return (
            <Polyline
              key={idx}
              path={route.routePoints}
              options={route.styles}
              onClick={(event) => handleRouteClick(event, route.routeId)}
            />
          );
        })}

        {globalState.editing &&
          globalState.editAction === "EDITROUTE" &&
          globalState.editRoute.status.id === 2 &&
          globalState.routes
            .find((route) => route.routeId === globalState.editRoute.routeId)
            .routePoints.map((routePoint, idx) => {
              //Code below adds a Marker (drag handle) for every route point
              //and an add route point marker between each pair of route points

              let addHandleLat, addHandleLng;
              console.log(`${globalState.routes.routePoints}`);

              if (idx > 0) {
                console.log(
                  `Idx: ${idx}Previous routepoint: ${
                    globalState.routes.routePoints[idx - 1]
                  }  Length: ${globalState.routes.routePoints.length}`
                );
                addHandleLat =
                  (routePoint.lat +
                    globalState.routes.routePoints[idx - 1].lat) /
                  2;
                addHandleLng =
                  (routePoint.lng +
                    globalState.routes.routePoints[idx - 1].lng) /
                  2;
              }

              return (
                <Marker
                  key={idx}
                  position={routePoint}
                  icon={{
                    url: RoutePointIcon,
                    scaledSize: new window.google.maps.Size(10, 10),
                    origin: new window.google.maps.Point(0, 0),
                    anchor: new window.google.maps.Point(5, 5),
                  }}
                  draggable={true}
                  onDragEnd={(event) => {
                    console.log("drag complete");
                  }}
                  onDrag={(event) => console.log(event)}
                />
              );
              {
                {
                  /* Drag markers between route points - no intermediate marker on start route point*/
                }
              }
              {
                idx > 0 && (
                  <Marker
                    key={idx + 0.5}
                    s
                    position={{ lat: addHandleLat, lng: addHandleLng }}
                  />
                );
              }
            })}
      </GoogleMap>
      )
    </Fragment>
  );
};

export const ChangePolylineClickableStatus = (routes, status) => {
  const newRoutes = [];
  routes.map((route) => {
    newRoutes.push({
      ...route,
      styles: { ...route.styles, clickable: status },
    });
  });
  return newRoutes;
};

export default EditMap;

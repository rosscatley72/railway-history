import { React, Fragment, useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
  DrawingManager,
  //InfoWindow,
} from "@react-google-maps/api";
import {} from "@types/googlemaps";
import { mapStyles } from "./MapStyles";
import Context from "../store/context";

const Map2 = (props) => {
  const { globalState, globalDispatch } = useContext(Context);

  const mapContainerStyle = {
    width: props.width,
    height: "80vh",
  };

  const centre = { lat: 51.999889, lng: -0.98807 };
  const options = { styles: mapStyles };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  console.log(JSON.stringify(globalState.routes.data));
  console.log(JSON.stringify(globalState.routes.styles));

  if (loadError) return "Error loading Google Map";
  if (!isLoaded) return "Loading Maps....";

  const handlePolylineClick = (event, route, idx) => {
    const newRoutes = globalState.routes.data.slice(idx);
    newRoutes[idx] = { strokeColor: "#ff00ff", editable: true };
    globalDispatch({ type: "UPDATEROUTESTYLES", payload: newRoutes });
    globalDispatch({ type: "EDITROUTESELECTED", payload: route });
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={centre}
        options={options}
        onClick={(event) =>
          globalDispatch({ type: "MAPCLICK", payload: event })
        }
      >
        <DrawingManager
          defaultDrawingMode={google.maps.drawing.OverlayType.POLYGON}
          defaultOptions={{
            drawingControl: true,
            drawingControlOptions: {
              position: google.maps.ControlPosition.TOP_CENTER,
              drawingModes: [google.maps.drawing.OverlayType.POLYGON],
            },
          }}
        />

        {globalState.addRoute.active && globalState.addRoute.status.id >= 2 && (
          <Marker
            position={globalState.addRoute.startRoutePoint}
            draggable={true}
            radius={500}
            onDragEnd={(event) =>
              globalDispatch({
                type: "ADDROUTESTARTROUTEPOINTMOVED",
                payload: event,
              })
            }
          />
        )}
        {globalState.addRoute.active && globalState.addRoute.status.id >= 3 && (
          <Fragment>
            <Marker
              position={globalState.addRoute.endRoutePoint}
              draggable={true}
              radius={500}
              onDragEnd={(event) =>
                globalDispatch({
                  type: "ADDROUTEENDROUTEPOINTMOVED",
                  payload: event,
                })
              }
            />
            <Polyline
              path={[
                globalState.addRoute.startRoutePoint,
                globalState.addRoute.endRoutePoint,
              ]}
            />
          </Fragment>
        )}

        {globalState.routes.data.map((route, idx) => {
          return (
            <Polyline
              key={route.routeId}
              path={route.routePoints}
              options={globalState.routes.styles[idx]}
              onClick={(event) => handlePolylineClick(event, route, idx)}
            />
          );
        })}
      </GoogleMap>
    </div>
  );
};

export const ChangePolylineClickableStatus = (currentStyles, status) => {
  console.log(JSON.stringify(currentStyles));

  const updatedPolylineStyles = [];
  currentStyles.map((style) => {
    updatedPolylineStyles.push({ ...style, clickable: status });
    return false;
  });
  return updatedPolylineStyles;
};

export default Map2;

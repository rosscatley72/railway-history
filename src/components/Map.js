import React, { useContext } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import Context from "../store/context";

function UnframedMap() {
  const { globalState, globalDispatch } = useContext(Context);
  console.log(globalState);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.999889, lng: -0.98807 }}
      onClick={() => globalDispatch({ type: "MAPCLICK" })}
    />
  );
}
const WrappedMap = withScriptjs(withGoogleMap(UnframedMap));

function Map(props) {
  return (
    <div style={{ width: props.width, height: "80vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v.3.exp&libraries=geometry.drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default Map;

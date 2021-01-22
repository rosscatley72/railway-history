import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function UnframedMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 51.999889, lng: -0.98807 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(UnframedMap));

function Map() {
  return (
    <div style={{ width: "100vw", height: "80vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v.3.exp&libraries=geometry.drawing,places&key=AIzaSyCSO8_DJRsRa1JHotFmqOKwdt5AFbI3HmY`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
}

export default Map;

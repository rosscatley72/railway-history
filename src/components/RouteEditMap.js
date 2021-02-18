import React, { Fragment, useEffect, useContext } from "react";
import Context from "../store/context";

const Test8 = (props) => {
  const { globalState, globalDispatch } = useContext(Context);
  let polyLine;

  const handleClick = () => {
    console.log(polyLine.getPath().Lb[0].lat());
    polyLine.getPath().Lb.forEach((routePoint) => {
      console.log(`{lat: ${routePoint.lat()},lng: ${routePoint.lng()}},`);
    });
  };

  const initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map2"), {
      center: { lat: 51.999889, lng: -0.98807 },
      zoom: 10,
    });

    console.log("Polyline component");
    polyLine = new window.google.maps.Polyline({
      path: globalState.routes[1].routePoints,
      editable: true,
      strokeColor: "#0088ff",
      strokeWeight: 2,
    });
    polyLine.setMap(map);
  };
  useEffect(() => {
    initMap();
  }, []);

  return (
    <Fragment>
      <div style={{ height: "100vh", width: "70vw" }} id="map2"></div>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Get Path
      </button>
      ;
    </Fragment>
  );
};

export default Test8;

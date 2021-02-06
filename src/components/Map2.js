import { React, useContext } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { mapStyles } from "./MapStyles";
import Context from "../store/context";

const Map2 = () => {
  const { globalState, globalDispatch } = useContext(Context);
  const mapContainerStyle = {
    width: "60vw",
    height: "80vh",
  };
  const centre = { lat: 51.999889, lng: -0.98807 };
  const options = { styles: mapStyles };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
  });

  if (loadError) return "Error loading Google Map";
  if (!isLoaded) return "Loading Maps....";

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
      ></GoogleMap>
    </div>
  );
};

export default Map2;

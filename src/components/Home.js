import React from "react";
import Container from "react-bootstrap/Container";
import { TextPageStyle, Title } from "./styled/TextPageStyle";

import WSH from "../images/water_stratford_half_old1.jpg";

function Homepage() {
  return (
    <TextPageStyle
      style={{ backgroundImage: `url(${WSH})`, backgroundSize: "cover" }}
    >
      <Container className="text-panel">
        <Title>Welcome to British Railway History. </Title>
        <p className="lead">
          This site is aiming to capture the history of Britain's Railways in
          geographic form, showing when railways, stations and junctions were
          opened and closed and who owned them.
        </p>
        <p className="lead">
          To start exploring simply enter the name of a station in the search
          box to see the railways around the location, then use the time slider
          to show how they have changed through the years.
        </p>
      </Container>
    </TextPageStyle>
  );
}

export default Homepage;

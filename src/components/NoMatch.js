import React from "react";
import Container from "react-bootstrap/Container";
import { TextPageStyle, Title } from "./styled/TextPageStyle";
import Disused from "../images/disused.jpg";

const NoMatch = () => {
  return (
    <TextPageStyle style={{ backgroundImage: `url(${Disused})` }}>
      <Container className="text-panel">
        <Title>Sorry, You Are Off-Track</Title>
        <p className="lead">
          We can't find the page you are looking for, please check the spelling
          in the address bar above or use the navigation bar at the top to
          select your page.{" "}
        </p>
      </Container>
    </TextPageStyle>
  );
};

export default NoMatch;

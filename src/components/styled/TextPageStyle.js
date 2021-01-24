import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

export const TextPageStyle = styled.div.attrs(() => ({
  className: "jumbotron",
}))`
  .home-text-panel {
    background-color: rgba(255, 255, 255, 0.8);
    color: #000f89;
    height: 60vh;
  }
`;

export const Title = styled.div.attrs(() => ({
  className: "display-4 text-center",
}))`
  .test {
    color: purple;
  }
`;

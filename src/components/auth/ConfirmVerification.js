import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { TextPageStyle, Title } from "../styled/TextPageStyle";
import TPO from "../../images/tpo.jpg";

const ConfirmVerification = () => {
  return (
    <TextPageStyle
      style={{
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundImage: `url(${TPO})`,
      }}
    >
      <Container>
        <div className="text-panel">
          <Title>Thanks for registering - please verify your E-Mail</Title>
          <p className="lead">
            Before you can start creating railway history, there is one small
            thing you need to do. An e-mail has been sent to you with a link,
            which you need to click to verify. Once you've clicked on that link
            come back here and <Link to="/explorer">click here</Link> to start
            exploring!
          </p>
        </div>
      </Container>
    </TextPageStyle>
  );
};

export default ConfirmVerification;

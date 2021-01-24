import React, { useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

import UserPool from "./UserPool";
import Container from "react-bootstrap/Container";
import {
  TextPageStyle,
  Title,
  FormElement,
  StyledButton,
} from "../styled/TextPageStyle";
import RCH from "../../images/rch.jpg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    //This is where the validation code needs to sit.....

    const attributeList = [];
    const dataEmail = { Name: "email", Value: email };
    const attributeEmail = new CognitoUserAttribute(dataEmail);
    console.log(`Attribute E-Mail: ${attributeEmail}`);
    attributeList.push(attributeEmail);

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <TextPageStyle
      style={{ backgroundImage: `url(${RCH})`, backgroundSize: "cover" }}
    >
      <Container>
        <div className="text-panel">
          <Title>Register for British Railway History</Title>
          <p className="lead">
            Registering for British Railway History allows you to add to our
            project. If you have a favourite route that's not already been
            added, why not put yourself forward to create it and make sure its
            never forgotten. You can add the route on the map, add photos, video
            and even links to books, websites or any other resources that will
            give everyone else loads of information about its history.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="element-holder">
              <FormElement>
                <label htmlFor="email">E-Mail:</label>
                <input
                  type="text"
                  value={email}
                  placeholder="E-mail"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormElement>
              <FormElement>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormElement>
              <FormElement>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormElement>
              <StyledButton type="submit">Register</StyledButton>
            </div>
          </form>
        </div>
      </Container>
    </TextPageStyle>
  );
};

export default Register;

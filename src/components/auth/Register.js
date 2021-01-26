import React from "react";
import { useForm } from "react-hook-form";
//import { CognitoUserAttribute } from "amazon-cognito-identity-js";

//import UserPool from "./UserPool";
import Container from "react-bootstrap/Container";
import {
  TextPageStyle,
  Title,
  FormElement,
  StyledButton,
} from "../styled/TextPageStyle";
import RCH from "../../images/rch.jpg";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();

  const borderStyle = {
    outlineWidth: "0",
    borderStyle: "solid",
    borderWidth: "2px",
  };

  const emailBorderStyle = {
    ...borderStyle,
    borderColor: errors.email ? "red" : "#000f89",
  };

  const passwordBorderStyle = {
    ...borderStyle,
    borderColor: errors.password ? "red" : "#000f89",
  };

  const confirmPasswordBorderStyle = {
    ...borderStyle,
    borderColor: errors.confirmPassword ? "red" : "#000f89",
  };

  const onSubmit = (data) => {
    //event.preventDefault();

    //This is where the validation code needs to sit.....

    //const attributeList = [];
    //const dataEmail = { Name: "email", Value: email };
    //const attributeEmail = new CognitoUserAttribute(dataEmail);
    //console.log(`Attribute E-Mail: ${attributeEmail}`);
    //attributeList.push(attributeEmail);
    //"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    console.log(data);
    /* UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });*/
  };

  return (
    <TextPageStyle style={{ backgroundImage: `url(${RCH})` }}>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="element-holder">
              <FormElement>
                <label htmlFor="email">E-Mail:</label>
                <div className="error-container">
                  <input
                    name="email"
                    type="text"
                    style={emailBorderStyle}
                    placeholder="E-mail"
                    ref={register({
                      required: "E-Mail is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid e-mail address",
                      },
                    })}
                  />
                  <p className="error">
                    {errors.email && errors.email.message}
                  </p>
                </div>
              </FormElement>
              <FormElement>
                <label htmlFor="password">Password:</label>
                <div className="error-container">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    style={passwordBorderStyle}
                    placeholder="Password"
                    ref={register({
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[\W]).{1,}$/,
                        message: "Password must conform to policy below",
                      },
                    })}
                  />
                  <p className="error">
                    {errors.password && errors.password.message}
                  </p>
                </div>
                <p className="instruction">
                  {`Password must be at least 8 chars, with 1 upper, 1 lower, 1
                  number and 1 special (@$!%*?&)`}
                </p>
              </FormElement>
              <FormElement>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <div className="error-container">
                  <input
                    name="confirmPassword"
                    type="password"
                    style={confirmPasswordBorderStyle}
                    placeholder="Confirm Password"
                    ref={register({
                      required: "Confirm password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                      validate: {
                        matchPassword: (value) =>
                          value === document.getElementById("password").value
                            ? undefined
                            : "Passwords must match",
                      },
                    })}
                  />
                  <p className="error">
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </p>
                </div>
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

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";
import Container from "react-bootstrap/Container";
import {
  TextPageStyle,
  Title,
  FormElement,
  StyledButton,
} from "../styled/TextPageStyle";
import RCH from "../../images/rch.jpg";
import { useSpring, animated } from "react-spring";

const Register = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const [apiInfo, setApiInfo] = useState({});

  const borderStyle = {
    outlineWidth: "0",
    borderStyle: "solid",
    borderWidth: "2px",
    overflow: "hidden",
  };

  const emailBorderStyle = useSpring({
    ...borderStyle,
    borderColor: errors.email ? "#ff0000" : "#000f89",
  });

  const emailErrorStyle = useSpring({
    height: errors.email ? "20px" : "0px",
  });

  const passwordBorderStyle = useSpring({
    ...borderStyle,
    borderColor: errors.password ? "#ff0000" : "#000f89",
  });

  const passwordErrorStyle = useSpring({
    height: errors.password ? "20px" : "0px",
  });

  const confirmPasswordBorderStyle = useSpring({
    ...borderStyle,
    borderColor: errors.confirmPassword ? "red" : "#000f89",
  });

  const confirmPasswordErrorStyle = useSpring({
    height: errors.confirmPassword ? "20px" : "0px",
  });

  const apiInfoStyle = useSpring({
    color: apiInfo.type === 0 ? "#0000ff" : "#ff0000",
    height: apiInfo && apiInfo.message ? "25px" : "0px", //* temporary line until bug with animation can be located */
    margin: "0",
    overflow: "hidden",
  });

  const handleChange = (event) => {
    setApiInfo({});
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setApiInfo({ message: "Registering User", type: 0 });
      const signUpResponse = await Auth.signUp({
        username: email,
        password,
        attributes: { email: email },
      });
      console.log(signUpResponse);
      props.history.push("/confirm-verification");
    } catch (error) {
      let err = null;
      !error.message
        ? (err = { message: error, type: 1 })
        : (err = { ...error, type: 1 });
      setApiInfo(err);
      console.log("After API Call (on error): " + apiInfo);
      //event.preventDefault();
    }
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
                  <animated.input
                    name="email"
                    type="text"
                    style={emailBorderStyle}
                    placeholder="E-mail"
                    onChange={handleChange}
                    ref={register({
                      required: "E-Mail is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid e-mail address",
                      },
                    })}
                  />
                  <animated.p className="error" style={emailErrorStyle}>
                    {errors.email && errors.email.message}
                  </animated.p>
                </div>
              </FormElement>
              <FormElement>
                <label htmlFor="password">Password:</label>
                <div className="error-container">
                  <animated.input
                    id="password"
                    name="password"
                    type="password"
                    style={passwordBorderStyle}
                    placeholder="Password"
                    onChange={handleChange}
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
                  <animated.p className="error" style={passwordErrorStyle}>
                    {errors.password && errors.password.message}
                  </animated.p>{" "}
                  <p className="instruction">
                    {`Password must be at least 8 chars, with 1 upper, 1 lower, 1
                  number and 1 special.`}
                  </p>
                </div>
              </FormElement>
              <FormElement>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <div
                  className="error-container"
                  style={confirmPasswordErrorStyle}
                >
                  <animated.input
                    name="confirmPassword"
                    type="password"
                    style={confirmPasswordBorderStyle}
                    placeholder="Confirm Password"
                    onChange={handleChange}
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
                  <animated.p
                    className="error"
                    style={confirmPasswordErrorStyle}
                  >
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </animated.p>
                </div>
              </FormElement>
              <animated.p className="error" style={apiInfoStyle}>
                {apiInfo && apiInfo.message}
              </animated.p>
              <StyledButton type="submit">Register</StyledButton>
            </div>
          </form>
        </div>
      </Container>
    </TextPageStyle>
  );
};

export default Register;

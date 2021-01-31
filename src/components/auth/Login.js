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
import SB from "../../images/sb.jpg";
import { useSpring, animated } from "react-spring";

const Login = (props) => {
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

  const apiInfoStyle = useSpring({
    color: apiInfo.type === 0 ? "#0000ff" : "#ff0000",
    height: apiInfo && apiInfo.message ? "25px" : "0px",
    margin: "0",
    overflow: "hidden",
  });

  const handleChange = (event) => {
    setApiInfo({});
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      setApiInfo({ message: "Logging In", type: 0 });
      const user = await Auth.signIn(email, password);
      console.log(user);
      props.auth.setUser(user);
      props.auth.setAuthStatus(true);
      props.history.push("/");
    } catch (error) {
      let err = null;
      !error.message
        ? (err = { message: error, type: 1 })
        : (err = { ...error, type: 1 });
      setApiInfo(err);
      //event.preventDefault();
    }
  };

  return (
    <TextPageStyle
      style={{ backgroundImage: `url(${SB})`, backgroundPosition: "50% 50%" }}
    >
      <Container>
        <div className="text-panel">
          <Title>Login</Title>
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
                    })}
                  />
                  <animated.p className="error" style={passwordErrorStyle}>
                    {errors.password && errors.password.message}
                  </animated.p>{" "}
                </div>
              </FormElement>

              <animated.p className="error" style={apiInfoStyle}>
                {apiInfo && apiInfo.message}
              </animated.p>
              <StyledButton type="submit">Login</StyledButton>
            </div>
          </form>
        </div>
      </Container>
    </TextPageStyle>
  );
};

export default Login;

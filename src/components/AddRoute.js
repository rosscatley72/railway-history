import React, { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import { useSpring, animated } from "react-spring";
import Context from "../store/context";
import { FormElement, StyledMiniButton } from "./styled/TextPageStyle";

export const AddRoute = () => {
  const { globalState, globalDispatch } = useContext(Context);

  const { register, handleSubmit, errors } = useForm();
  //const [apiInfo, setApiInfo] = useState({});

  console.log(`AddRoute RENDER....${globalState.addRoute.status.id}`);

  const enterPointStyle = {
    fontSize: "10pt",
    width: "80%",
    padding: "5px",
    margin: "20px",
    textAlign: "center",
    overflow: "hidden",
  };

  const startPointStyle = useSpring({
    ...enterPointStyle,
    backgroundColor:
      globalState.addRoute.status.id <= 1 ? "rgba(128, 16, 38, 1)" : "#b7b4ad",
    color: globalState.addRoute.status.id <= 1 ? "#f9f1de" : "green",
  });

  const endPointStyle = useSpring({
    ...enterPointStyle,
    backgroundColor:
      globalState.addRoute.status.id <= 2 ? "rgba(128,16,38,1)" : "#b7b4ad",
    color: globalState.addRoute.status.id <= 2 ? "#f9f1de" : "green",
    display: globalState.addRoute.status.id <= 1 ? "none" : "block",
    marginTop: globalState.addRoute.status.id <= 1 ? "0" : "20px",
    marginBottom: globalState.addRoute.status.id <= 1 ? "0" : "20px",
  });

  const borderStyle = {
    outlineWidth: "0",
    borderStyle: "solid",
    borderWidth: "2px",
    overflow: "hidden",
  };

  const nameBorderStyle = useSpring({
    ...borderStyle,
    borderColor: errors.email ? "#ff0000" : "#000f89",
  });

  const nameErrorStyle = useSpring({
    height: errors.email ? "20px" : "0px",
  });

  const handleChange = (event) => {
    //setApiInfo({});
  };

  const onSubmit = async (data) => {
    const { name } = data;

    try {
      //setApiInfo({ message: "Adding Route" });

      // VALIDATION OF THE ADD ROUTE FORM GOES HERE AND SUBMIT TO DATABASE/API GATEWAY
      //NEED TO CHECK START AND FINISH POINTS HAVE BEEN ADDED
      // AS WELL AS INITIAL OPENING DATE, AND ROUTE NAME

      globalDispatch({ type: "FINISHADDROUTE" });

      console.log(name);
    } catch (error) {
      let err = null;
      !error.message
        ? (err = { message: error, type: 1 })
        : (err = { ...error, type: 1 });
      //setApiInfo(err);
      console.log(err);
    }
  };

  return (
    <Fragment>
      <div>
        <animated.p style={startPointStyle}>
          {globalState.addRoute && globalState.addRoute.status.id <= 1 && (
            <Fragment>Click on the Start Point</Fragment>
          )}
          {globalState.addRoute && globalState.addRoute.status.id >= 2 && (
            <Fragment>Start Point Captured</Fragment>
          )}
        </animated.p>
      </div>
      <div>
        <animated.p style={endPointStyle}>
          {globalState.addRoute && globalState.addRoute.status.id <= 2 && (
            <Fragment>Click on the End Point</Fragment>
          )}
          {globalState.addRoute && globalState.addRoute.status.id >= 3 && (
            <Fragment>End Point Captured</Fragment>
          )}
        </animated.p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="element-holder">
          <FormElement>
            <label htmlFor="name">Route Name:</label>
            <div className="error-container">
              <animated.input
                name="name"
                type="text"
                style={nameBorderStyle}
                placeholder="Route Name"
                onChange={handleChange}
                ref={register({
                  required: "Route name is required",
                })}
              />
              <animated.p className="error" style={nameErrorStyle}>
                {errors.name && errors.name.message}
              </animated.p>
            </div>
          </FormElement>
          <StyledMiniButton
            disabled={globalState.addRoute.status.id !== 3}
            type="submit"
          >
            Add Route
          </StyledMiniButton>
          <StyledMiniButton
            type="button"
            onClick={() => globalDispatch({ type: "CANCEL" })}
          >
            Cancel
          </StyledMiniButton>
        </div>
      </form>
    </Fragment>
  );
};

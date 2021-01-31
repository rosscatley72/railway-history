import React, { Fragment } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { Auth } from "aws-amplify";

const NavigationBar = (props) => {
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      Auth.signOut();
      props.auth.setAuthStatus(false);
      props.auth.setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar expand="lg" className="cust-navbar">
      <Navbar.Brand href="/">British Railway History</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/explorer">Explore</Nav.Link>
          {isAuthenticated && <Nav.Link href="/editor">Edit</Nav.Link>}
        </Nav>

        {props.auth.isAuthenticated && props.auth.user && (
          <Fragment>
            <p className="m-0 px-2">{props.auth.user.username}</p>

            <Button href="/" className="mx-1 cust-btn" onClick={handleLogout}>
              Logout
            </Button>
          </Fragment>
        )}

        {!props.auth.isAuthenticated && (
          <Fragment>
            <Button href="/login" className="mx-1 cust-btn">
              Login
            </Button>
            <Button href="/register" className="mx-1 cust-btn">
              Register
            </Button>
          </Fragment>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;

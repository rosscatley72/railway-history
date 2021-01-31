import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "aws-amplify";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explorer from "./components/Explorer";
import Login from "./components/auth/Login";
import NoMatch from "./components/NoMatch";
import Register from "./components/auth/Register";
import ConfirmVerification from "./components/auth/ConfirmVerification";

import "bootstrap/dist/css/bootstrap.min.css";

import "./custom.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthStatus] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(true);

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    setAuthStatus: setAuthStatus,
    setUser: setUser,
  };

  useEffect(() => {
    //This the equivalent of the componentdidmount functionality for hooks
    async function setSessionStatus() {
      try {
        const session = await Auth.currentSession();
        setAuthStatus(true);
        const user = await Auth.currentAuthenticatedUser();
        setUser(user);
      } catch (error) {
        console.log(error);
      }
      setAuthenticating(false);
    }
    setSessionStatus();
  }, []);

  return (
    !isAuthenticating && (
      <Fragment>
        <Router>
          <NavigationBar auth={authProps} />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/explorer"
              render={(props) => <Explorer {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/editor"
              render={(props) => <Explorer {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Register {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/confirm-verification"
              render={(props) => (
                <ConfirmVerification {...props} auth={authProps} />
              )}
            />

            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Router>
      </Fragment>
    )
  );
};

export default App;

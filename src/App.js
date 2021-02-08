import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Auth } from "aws-amplify";

import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explorer from "./components/Explorer";
import Edit from "./components/Edit";
import Login from "./components/auth/Login";
import NoMatch from "./components/NoMatch";
import Register from "./components/auth/Register";
import ConfirmVerification from "./components/auth/ConfirmVerification";
import GlobalStateProvider from "./store/GlobalStateProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthStatus] = useState(false);
  const [isAuthenticating, setAuthenticating] = useState(false);

  const authProps = {
    isAuthenticated: isAuthenticated,
    user: user,
    setAuthStatus: setAuthStatus,
    setUser: setUser,
  };

  useEffect(() => {
    async function setSessionStatus() {
      try {
        //const session = await Auth.currentSession();
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
      <GlobalStateProvider>
        <NavigationBar auth={authProps} />
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} auth={authProps} />}
            />
            <Route
              exact
              path="/editor"
              render={(props) => <Edit {...props} auth={authProps} />}
            />

            <Route
              exact
              path="/explorer"
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
      </GlobalStateProvider>
    )
  );
};

export default App;

import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explorer from "./components/Explorer";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Register from "./components/auth/Register";
import ConfirmVerification from "./components/auth/ConfirmVerification";

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explorer" component={Explorer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route
            exact
            path="/confirm-verification"
            component={ConfirmVerification}
          />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;

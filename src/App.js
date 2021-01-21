import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Explorer from "./Explorer";
import Login from "./Login";
import NoMatch from "./components/NoMatch";
import { Layout } from "./components/Layout";

const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/explorer" component={Explorer} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </Fragment>
  );
};

export default App;

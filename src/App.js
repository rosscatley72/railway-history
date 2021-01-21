import { React, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Explorer from "./components/Explorer";
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
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </Router>
      </Layout>
    </Fragment>
  );
};

export default App;

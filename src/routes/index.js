import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import HomeContainer from '../containers/Container';

const renderRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AppRoute Component={Home} props={props} />
            )}
          />
          <Route
            path="/withheader"
            render={props => (
              <AppRoute Layout={HomeContainer} Component={Home} props={props} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  }

  if (!Component) {
    return <Layout {...props} />;
  }

  return <Component {...props} />;
};

export default renderRoutes;

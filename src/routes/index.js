import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import HomeContainer from '../containers/container';

const renderRoutes = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <AppRoute Component={Dashboard} props={props} />
            )}
          />
          <Route
            path="/test"
            render={props => (
              <AppRoute Layout={HomeContainer} Component={Dashboard} props={props} />
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

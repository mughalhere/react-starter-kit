import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Resources from '../pages/Resources'
import NotFound from '../pages/NotFound'
import HomeContainer from '../containers/Container'

const renderRoutes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path='/'
        render={props => (
          <AppRoute Layout={HomeContainer} Component={Home} props={props} />
        )}
      />
      <Route
        path='/resources'
        render={props => (
          <AppRoute Layout={HomeContainer} Component={Resources} props={props} />
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>
)

const AppRoute = ({ Component, Layout, props }) => {
  if (Layout) return <Layout {...props}> <Component {...props} /> </Layout>
  if (!Component) return <Layout {...props} />

  return <Component {...props} />
}

export default renderRoutes

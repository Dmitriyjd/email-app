import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Home from './components/pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          component={Home} />

        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
};

export default Routes

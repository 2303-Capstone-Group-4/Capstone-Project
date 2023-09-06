import React, { Component, Fragment } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage';

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/home"
            component={LandingPage}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Routes;

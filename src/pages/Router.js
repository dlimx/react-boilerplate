import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Connections from './Connections/Connections';
import Dashboard from './Dashboard/Dashboard';
import Organization from './Organization/Organization';
import Discover from './Discover/Discover';
import Navbar from '../components/Navbar';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route
            path="/"
            exact
            component={() => <Redirect to="/dashboard" />}
          />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/discover" component={Discover} />
          <Route path="/organization" component={Organization} />
          <Route path="/connections" component={Connections} />
        </div>
      </BrowserRouter>
    );
  }
}

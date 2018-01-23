/**
 * Dependencies
 */

import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Courses from './containers/courses';
import Test from './containers/tests';
import Registration from './containers/registration';

/**
 * Expo
 */

const App = () => (
  <Switch>
    <Route path="/" exact={true} component={Home} />
    <Route path="/courses" component={Courses} />
    <Route path="/tests" component={Test} />
    <Route path="/login" component={Login} />
    <Route path="/registration" exact={true} component={Registration} />
  </Switch>
);

export default App;

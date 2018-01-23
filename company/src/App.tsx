/**
 * Dependencies
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';

import Login from './containers/login';
import Home from './containers/home';
import Users from './containers/users';
import UsersCreate from './containers/usersCreate';
import Registration from './containers/registration';

/**
 * Expo
 */

class App extends React.Component<any, any> {
  componentWillMount() {
    const { auth } = this.props;

    if (!auth.isAuthenticated && location.pathname !== '/login') {
      location.pathname = '/login';
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/create" exact component={UsersCreate} />
        <Route path="/login" component={Login} />
        <Route path="/registration" exact component={Registration} />
      </Switch>
    );
  }
}

const mapDispatchToProps = ({ auth }) => ({ auth });

export default withRouter(connect(mapDispatchToProps)(App as any) as any);


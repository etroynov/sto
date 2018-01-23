import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from '../components/course/list';
import Item from '../components/course/item';

/*!
 * Expo
 */

export default () => (
  <Switch>
    <Route exact path="/courses" component={List} />
    <Route path="/courses" component={Item} />
  </Switch>
);

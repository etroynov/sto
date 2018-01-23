/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../../components/layout';
import List from '../../components/courses/List';

/*!
 * Data
 */

import production from '../../data/production';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List {...production} />
  </Site>
);

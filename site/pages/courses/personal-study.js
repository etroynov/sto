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

import personal from '../../data/personal';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...personal} />
  </Site>
);

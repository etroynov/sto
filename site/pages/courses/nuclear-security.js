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

import nuclear from '../../data/nuclear';

/*!
 * Expo
 */

export default () => (
  <Site>
    <List key="list" {...nuclear} />
  </Site>
);

/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import List from '../../components/courses/List';

/*!
 * Data
 */

import eco from './../../data/eco';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <List key="list" {...eco} />,
  <Footer key="footer" />,
];

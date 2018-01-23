/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Header from '../components/common/Header';
import Article from '../components/home/article/Article';
import Footer from '../components/common/Footer';

/*!
 * Expo
 */

export default () => [
  <Header key="header" />,
  <Article key="about" title="О компании" />,
  <Footer key="footer" />,
];

/**
 * Dependencies
 */
import * as React from 'react';

/**
 * Components
 */

import { Layout } from 'antd';

import Header from './common/Header';
import Footer from './common/Footer';

/*!
 * Expo
 */

const { Content } = Layout;

export default ({ children }) => (
  <Layout>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Layout>
);

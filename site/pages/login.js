/**
 * Dependencies
 */

import * as React from 'react';
import Head from 'next/head';
import { Layout, Card, Row, Col } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;

export default () => (
  <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 490, height: 340 }}>
    <Head>
      <link rel="stylesheet" href="/static/css/antd.min.css" />
    </Head>
    <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Войти как:</h2>
    <Row type="flex" justify="space-between">
      <Col>
        <a href="http://dashboard.ucavtor.ru/login">
          <Card
            hoverable={true}
            title="абитуриент"
            style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
            cover={<img alt="абитуриент" src="/static/img/whitecollar.svg" style={{ padding: 20 }}  />}
          />
        </a>
      </Col>
      <Col>
        <a href="http://company.ucavtor.ru/login">
          <Card
            hoverable={true}
            title="компания"
            style={{ width: 240, textAlign: 'center', textTransform: 'uppercase' }}
            cover={<img alt="компания" src="/static/img/briefcase.svg" style={{ padding: 20 }} />}
          />
        </a>
      </Col>
    </Row>
  </Content>
);

import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'antd';

import Dashboard from '../layout';

declare const require: any;

/*!
 * Expo
 */

export default () => (
  <Dashboard title="Курсы">
    <header
      style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
    >
      <h1 style={{ margin: 0 }}>Доступные курсы</h1>
    </header>
    <Row gutter={16}>
      <Col span={6}>
        <Link to="/courses/trud">
          <Card title="Промышленая безопасность" className="uc-course-card">
            <img
              src={require('./../../assets/img/oot.svg')}
              alt="го и чс"
              className="uc-img-response"
            />
          </Card>
        </Link>
      </Col>
    </Row>
  </Dashboard>
);

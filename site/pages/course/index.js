/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Site from '../../components/layout';
import Container from '../../components/common/Container';

import { Row, Col, Icon, Button } from 'antd';

/*!
 * Expo
 */

export default ({
  url: {
    query: {
      name,
      description,
      banner,
      duration,
      price,
    },
  },
}) => (
  <Site>
    <Container>
      <div className="article">
        <header className="article__header" style={{ textAlign: 'center' }}>
          <h1 className="article__title">{name}</h1>
          <hr style={{ width: '15%', margin: '30px auto', borderColor: '#999' }} />
        </header>

        <Row className="article__body">
          <Col span={18} className="article__content" style={{ borderRight: '1px solid #eee' }}>
            <figure className="article__img-container">
              <img src={banner} style={{ maxWidth: 800, width: '100%' }} />
            </figure>
            <p>{description}</p>
          </Col>
          <Col span={6} className="article__properties">
            <ul className="params" style={{ listStyle: 'none' }}>
              <li className="params__item">
                <Icon type="clock-circle-o" className="params__icon" />
                <span className="params__text">{duration} ч.</span>
              </li>
              <li className="params__item">
                <Icon type="shopping-cart" className="params__icon" />
                <span className="params__text">{price} руб.</span>
              </li>
            </ul>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" size="large" href="/login" style={{ width: '100%', margin: '0 20px' }}>Заказать</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  </Site>
);

/*!
 * Dependencies
 */

import * as React from 'react';

/**
 * Components
 */

import Container from '../components/common/Container';
import Site from '../components/layout';

/*!
 * Expo
 */

const Content = () => (
  <Container>
    <div className="article">
      <header className="article__header">
        <h1 className="article__title">Работа</h1>
      </header>

      <section className="article__body">
        <p>Раздел находится в стадии наполнения.</p>
      </section>
    </div>
  </Container>
);

export default () => (
  <Site>
    <Content />
  </Site>
);

/*!
 * Dependencies
 */

import * as React from 'react';
import Link from 'next/link';

import { Row, Col } from 'antd';

/**
 * Components
 */

import Site from '../../components/layout';
import Container from '../../components/common/Container'

/*!
 * Data
 */

import courses from './../../data/courses';

/*!
 * Expo
 */

export default () => (
  <Site>
    <Container className="courses">
      <header className="courses__header">
        <h2 className="courses__title">{courses.name}</h2>
        <p className="courses__description">{courses.description}</p>
      </header>

      <Row type="flex" justify="space-between">
        {courses.items.map(item => (
          <Col span={12}>
            <article className="course">
              <Link href={item.href}>
                <a className="course__link">
                  <Row type="flex">
                    <Col span={6} className="left-column">
                      <figure className="course__img-container">
                        <img src={item.img} alt={item.name} className="course__img" width="100" height="100" />
                      </figure>
                    </Col>
                    
                    <Col span={18} className="right-column">
                      <header className="course__header">
                        <h3 className="course__title">{item.name}</h3>
                      </header>
                      <section className="course__body">
                        <p className="course__text">{`${item.description.slice(0, 110)}...`}</p>
                      </section>
                    </Col>
                  </Row>
                </a>
              </Link>
            </article>
          </Col>
        ))}
      </Row>
    </Container>
  </Site>
);

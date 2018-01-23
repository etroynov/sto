import * as React from 'react';
import Link from 'next/link';
import { Row, Col } from 'antd';

const Course = ({ img, banner, name, description, duration, price }) => (
  <Col span={12}>
    <article className="course">
      <Link
        as={`/курс/${name.toLowerCase().replace(/\s/g, '-')}`}
        href={`/course?name=${name}&description=${description}&img=${img}&banner=${banner}&duration=${duration}&price=${price}`}
      >
        <a className="course__link">
          <Row>
            <Col span={6} className="left-column">
              <figure className="course__img-container">
                <img src={img} alt={name} className="course__img" width="100" height="100" />
              </figure>
            </Col>
            
            <Col span={18} className="right-column">
              <header className="course__header">
                <h3 className="course__title">{`${name.slice(0, 40)}...`}</h3>
              </header>
              <section className="course__body">
                <p className="course__text">{`${description.slice(0, 90)}...`}</p>
              </section>
            </Col>
          </Row>
        </a>
      </Link>
    </article>
  </Col>
);

export default Course;

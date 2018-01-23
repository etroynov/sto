import * as React from 'react';
import { Row, Col } from 'antd';

/*!
 * Expo
 */


const Content = ({ name, description, context } : IStepContent) => (
  <Col span={12} className={context}>
    <div className="step__description">
      <header className="step__header">
        <h2 className="step__title">{name}</h2>
      </header>

      <section className="step__body">
        <p className="step__text">{description}</p>
      </section>
    </div>
  </Col>
);

const Img = ({ img, context } : IStepImg) => (
  <Col span={12} className={`step__timeline step__timeline--circle ${context}`}>
    <figure className="step__img-container">
      <img src={img} alt="" className="step__img" />
    </figure>
  </Col>
);

const Step = ({ name, description, img, odd } : IStep) => {
  let body;

  if (odd) {
    body = (
      <Row>
        <Img context="step__timeline--right step__timeline--circle--right" img={img} />
        <Content context="" name={name} description={description} />
      </Row>
    );
  } else {
    body = (
      <Row>
        <Content context="ant-text-right" name={name} description={description} />
        <Img img={img} />
      </Row>
    );
  }

  return (
    <Col span={24} className="step">
      {body}
    </Col>
  );
};

export default Step;

import * as React from 'react';
import Link from 'next/link';

import { Button } from 'antd';

export default () => (
  <div className="slider">
    <div className="uk-container">
      <section className="slider__item">
        <header className="slider__header">
          <h4 className="slider__title">Учебный центр "Автор"</h4>
        </header>
        <section className="slider__body">
          <p className="slider__text">Дополнительное профессиональное образование</p>
        </section>
        <section className="slider__control">
          <Link href="/registration">
            <Button href="/registration" size="large" type="primary" className="slider__button">регистрация</Button>
          </Link>
          <Link href="/courses">
            <Button href="/courses" size="large" className="slider__button">наши курсы</Button>
          </Link>
        </section>
      </section>
    </div>
  </div>
);

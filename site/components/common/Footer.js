/*!
 * Vendor
 */
import * as React from 'react';
import Link from 'next/link';

import { Col, Row } from 'antd';
import { YMInitializer } from 'react-yandex-metrika';

/**
 * Components
 */

import Container from './Container';

/*!
 * Expo
 */

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col span={12}>
          <section className="menu-footer">
            <header className="footer-menu__header">
              <h4 className="footer-menu__title">О нас</h4>
            </header>
            <ul className="footer-menu__body">
              <li className="footer-menu__item">
                <Link href="/about">
                  <a className="footer-menu__text">Компания</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/job">
                  <a className="footer-menu__text">Работа</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/oferta">
                  <a className="footer-menu__text">Пользовательское соглашение</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/oferta">
                  <a className="footer-menu__text">Оферта</a>
                </Link>
              </li>
              <li className="footer-menu__item">
                <Link href="/confidentiality">
                  <a className="footer-menu__text">Положение о конфиденциальности</a>
                </Link>
              </li>
            </ul>
          </section>
        </Col>
        <Col span={12}>
          <div className="footer__about">
            <p><strong>Учебный центр "Автор"</strong> преподаем в режиме онлайн посредством браузера видео уроки, скринкасты и многое другое. Мы стремимся помочь вам учиться.</p>
          </div>
        </Col>
      </Row>
      <div className="uk-flex-nowrap footer__copyright">
        <p className="footer_copyright-light uk-text-small">© 2017 Автор. Россия, Челябинск. | проспект Ленина д.83,офис 510 | +7 (904) 812-57-38 | <a href="mailto:kursy@ucavtor.ru">kursy@ucavtor.ru</a></p>
      </div>
    </Container>
    <YMInitializer accounts={[47130420]} version="2" />
    <script  dangerouslySetInnerHTML={{__html: `(function(){ var widget_id = 'MLkTdVcinx';var d=document;var w=window;function l(){var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();` }} />
  </footer>
);

export default Footer;

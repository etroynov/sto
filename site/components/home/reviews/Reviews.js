import * as React from 'react';
import Review from './Review';
import Container from './../../common/Container';

import { Row, Col } from 'antd';

/*!
 * Expo
 */

export default () => (
  <div className="reviews">
    <Container>
      <header className="reviews__header">
        <h2 className="reviews__title">Наши преимущества</h2>
      </header>

      <section className="reviews__body">
        <Row>
          <Col span={6}>
            <Review
              avatar="/static/img/whitecollar.svg"
              name="Тройнов Евгений"
              text="Пока меня все устраивает. Не знаю насколько у них хорошая стажировка пока, но в целом все очень даже неплохо. Ведь главная работа все равно остается за нами, преподавателю надо хорошо материал подать, в нужной последовательности, чтоб не было каши в голове, а в каких-то тонкостях надо уже самим разбираться, пробовать. Поэтому именно новичкам, которые только думают стоит этим заниматься не стоит, или пробовали,но как-то не покатило и забросили, очень рекомендую!"
            />
          </Col>
          <Col span={6}>
            <Review
              avatar="/static/img/whitecollar.svg"
              name="Николай Смирнов"
              text="Сайт вполне можно назвать уникальным. А в рунете - даже уникальным. Что он нам предлагает? Обучится нелёгкому, на первый взгляд (да и не на первый) , делу - промышленной безопасности в игровой форме. Всё и правда воспринимается легко, но без ряда недостатков не обошлось. Сам достаточное время знаком с сайтом - время, потраченное на нём так или иначе приносит свои плоды."
            />
          </Col>
          <Col span={6}>
            <Review
              avatar="/static/img/whitecollar.svg"
              name="Денис Осташкин"
              text="Автор мне дал нечто большее, чем просто возможность сменить профессию. Что-то, что сильно поменяло меня и распространилось на всю жизнь в целом: превратило меня из «диванной картошки» в проактивного человека, который всё время что-то учит, делает, заставляет других учить…"
            />
          </Col>
          <Col span={6}>
            <Review
              avatar="/static/img/whitecollar.svg"
              name="Денис Осташкин"
              text="Автор мне дал нечто большее, чем просто возможность сменить профессию. Что-то, что сильно поменяло меня и распространилось на всю жизнь в целом: превратило меня из «диванной картошки» в проактивного человека, который всё время что-то учит, делает, заставляет других учить…"
            />
          </Col>
        </Row>
      </section>
    </Container>
  </div>
);

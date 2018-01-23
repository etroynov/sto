/**
 * Dependencies
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Card, List, Avatar, Button, Modal, Form, Icon, Input, Checkbox } from 'antd';

import Dashboard from './../components/layout';

const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

declare const require;

/**
 * Expo
 */

class Home extends React.Component<{
  form: any;
  auth: any;
}, {}> {
  render() {
    const {
      email,
      managerPhone,
      managerPosition,
      managerFio,
      representativePhone,
      representativePosition,
      representativeFio,
      address,
      bic,
      bankAccount,
      kpp,
      inn,
      name,
    } = this.props.auth.user;

    return (
      <Dashboard title="Главная">
        <header
          style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
        >
          <h1 style={{ margin: 0 }}>Главная</h1>
        </header>
        <section
          style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}
        >
          <Row>
            <Col span={16} style={{ borderRight: '1px solid #eee' }}>
              <Row>
                <Col
                  span={8}
                  style={{ borderRight: '1px solid #eee' }}
                >
                  <figure style={{ textAlign: 'center', paddingTop: '25px 0' }}>
                    <img
                      src={require('./../assets/img/briefcase.svg')}
                      alt=""
                      style={{ width: '50%' }}
                    />
                    <figcaption style={{ fontSize: 20, padding: '20px 0' }}>{name}</figcaption>
                  </figure>
                </Col>
                <Col span={16}>
                  <div className="gutter-box" style={{ padding: '0 20px' }}>
                    <h3 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                      Контакты
                    </h3>
                    <Row>
                      <Col span={12}>
                        <ul>
                          <li><strong>Руководитель:</strong> {representativeFio} - {representativePosition}</li>
                          <li><strong>Адрес:</strong> {address}</li>
                          <li><strong>Телефон:</strong> {representativePhone}</li>
                          <li><strong>Адрес электронной почты:</strong> {email}</li>
                        </ul>
                      </Col>
                      <Col span={12}>
                        <ul>
                          <li><strong>БИК:</strong> {bic}</li>
                          <li><strong>Р/С:</strong> {bankAccount}</li>
                          <li><strong>КПП:</strong> {kpp}</li>
                          <li><strong>ИНН:</strong> {inn}</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <hr style={{ border: 'none', borderBottom: '1px solid #eee' }} />
              <Row>
                <Col span={8} style={{ padding: 20, borderRight: '1px solid #eee' }}>
                  <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                    Сотрудники
                    <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
                  </h2>
                  <List
                    itemLayout="horizontal"
                    dataSource={[]}
                    renderItem={item => (
                      <List.Item actions={[<Button type="primary" icon="eye-o" />]}>
                        <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={item.fio}
                          description={item.position}
                        />
                      </List.Item>
                    )} />
                    <hr style={{ border: 'none', borderBottom: '1px solid #eee' }} />
                    <Button type="primary" icon="user-add" style={{ float: 'right', marginTop: 10 }}>
                      <Link to="/users/create" style={{ color: '#fff' }}>
                        Добавить сотрудника
                      </Link>
                    </Button>
                </Col>
                <Col span={16} style={{ padding: 20 }}>
                  <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                    Курсы
                    <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
                  </h2>
                    <Row gutter={16}>
                      {/* <Col span={8}>
                        <Card className="uc-course-card">
                          <img
                            src={require('./../assets/img/oot.svg')}
                            alt="Охрана труда"
                            className="uc-img-response"
                          />
                        </Card>
                      </Col> */}
                    </Row>
                </Col>
              </Row>
            </Col>
            <Col span={8}>
              <Row>
                <Col span={24} style={{ padding: '20px', textAlign: 'center' }}>
                  <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
                    Уведомления
                    <hr style={{ width: '20%', border: 'none', borderBottom: '1px solid #eee' }} />
                  </h2>
                  <List
                    itemLayout="horizontal"
                    dataSource={[]}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          title={`Добавлен сотрудник - ${item.fio}`}
                        />
                      </List.Item>
                    )} />
                </Col>
              </Row>
            </Col>
          </Row>
        </section> 
      </Dashboard>
    );
  }
}

const mapDispatchToProps = ({ auth, notifications, employers }) => ({ auth, notifications, employers });

export default connect(mapDispatchToProps)(Home as any);

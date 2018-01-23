/**
 * Dependencies
 */

import * as React from 'react';

import { Layout, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';

const { Content } = Layout;
const FormItem = Form.Item;

declare const require: any;
/*!
 * Expo
 */

class PersonalRegistration extends React.Component<any, any> {
  state = {
    fromCompany: true,
  };

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields((err: any, values: any) => {
      if (!err) { console.log('Received values of form: ', values); }
    });
  }

  handleFromCompanyCheckbox = (e: any) => {
    this.setState({ fromCompany: !e.target.checked });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { fromCompany } = this.state;

    return (
        <Content style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, margin: 'auto', width: 900, height: 800 }}>
          <h2 style={{ textAlign: 'center', textTransform: 'uppercase' }}>
            <img
              src={require('./../assets/img/whitecollar.svg')}
              style={{ display: 'inline-block', width: 200, padding: 20 }}
            />
            <p>абитуриент</p>
          </h2>
          <Form className="personal-registration-form" onSubmit={this.handleSubmit}>
            <Row type="flex" justify="space-between">
              <Col span={8} style={{ padding: 20 }}>
                <fieldset>
                  <legend>Ваши данные</legend>
                  <FormItem>
                    {getFieldDecorator('fio', {
                      rules: [{ required: true, message: 'Укажите ФИО!' }],
                    })(
                      <Input prefix={<Icon type="user" className="input__icon--gray" />} placeholder="Иванов Иван Иванович" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('position', {
                      rules: [{ required: true, message: 'Укажите должность!' }],
                    })(
                      <Input prefix={<Icon type="idcard" className="input__icon--gray" />} placeholder="должность" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('email', {
                      rules: [{ required: true, message: 'Укажите email!' }],
                    })(
                      <Input prefix={<Icon type="mail" className="input__icon--gray" />} placeholder="example@mail.com" />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('company', {
                      valuePropName: 'checked',
                    })(
                      <Checkbox onChange={this.handleFromCompanyCheckbox}>я представитель компании</Checkbox>,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={8} style={{ padding: 20 }}>
              <fieldset>
                  <legend>Данные организации</legend>
                  <FormItem>
                    {getFieldDecorator('organization', {
                      rules: [{ required: !fromCompany, message: 'Укажите название организации' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="schedule" className="input__icon--gray" />}
                        placeholder="название организации" 
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('inn', {
                      rules: [{ required: !fromCompany, message: 'Укажите ИНН' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="schedule" className="input__icon--gray" />}
                        placeholder="ИНН"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('kpp', {
                      rules: [{ required: !fromCompany, message: 'Укажите КПП' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="schedule" className="input__icon--gray" />}
                        placeholder="КПП"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('bankAccount', {
                      rules: [{ required: !fromCompany, message: 'Укажите р/с' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="schedule" className="input__icon--gray" />}
                        placeholder="р/с"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('bic', {
                      rules: [{ required: !fromCompany, message: 'Укажите БИК' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="schedule" className="input__icon--gray" />}
                        placeholder="БИК"
                      />,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={8} style={{ padding: 20 }}>
                <fieldset>
                  <legend>Лицо, подписывающее договор</legend>
                  <FormItem>
                    {getFieldDecorator('representativeFio', {
                      rules: [{ required: !fromCompany, message: 'Укажите Фио!' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="user" className="input__icon--gray" />}
                        placeholder="Иванов Иван Иванович"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('representativePosition', {
                      rules: [{ required: !fromCompany, message: 'Укажите должность!' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="idcard" className="input__icon--gray" />}
                        placeholder="должность"
                      />,
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('representativeEmail', {
                      rules: [{ required: !fromCompany, message: 'Укажите почтовый адрес' }],
                    })(
                      <Input
                        disabled={fromCompany}
                        prefix={<Icon type="mail" className="input__icon--gray" />}
                        placeholder="почтовый адрес"
                      />,
                    )}
                  </FormItem>
                </fieldset>
              </Col>
              <Col span={24} style={{ padding: '0 20px' }}>
                <hr />
              </Col>
              <FormItem style={{ padding: '0 20px' }}>
                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                  зарегистрироватся
                </Button>
              </FormItem>
              <FormItem style={{ padding: '0 20px' }}>
                {getFieldDecorator('accept', {
                  valuePropName: 'checked',
                })(
                  <Checkbox>Я согласен на обработку персональных данных</Checkbox>,
                )}
              </FormItem>
            </Row>
          </Form>
        </Content>
    );
  }
}

const WrappedPersonalRegistration = Form.create()(PersonalRegistration as any);

export default WrappedPersonalRegistration;

/**
 * Dependencies
 */

import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

/*!
 * Expo
 */

const { Content } = Layout;
const FormItem = Form.Item;

class LoginForm extends React.Component<any, any> {
  handleSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        return location.pathname = '/';
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Content style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 'auto',
        width: 300,
        height: 500,
      }}>
        <h2 style={{ margin: 0, textAlign: 'center', textTransform: 'uppercase' }}>авторизация</h2>
        <h3 style={{ fontSize: 15, textAlign: 'center' }}>( 0.2.0 )</h3>
        <Form className="login-form" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Укажите имя пользователя!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="имя пользователя" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Укажите пароль!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="пароль" />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
            })(
              <Checkbox>запомнить меня</Checkbox>,
            )}
            <a className="login-form-forgot" href="">забыли пароль?</a>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              войти
            </Button>
            или <Link to="/registration">зарегистрироватся!</Link>
          </FormItem>
        </Form>
      </Content>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm as any);

export default WrappedLoginForm;

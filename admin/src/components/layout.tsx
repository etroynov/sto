import * as React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

declare const require: any;

/*!
 * Expo
 */

class Dashboard extends React.Component<any, any> {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: boolean) => this.setState({ collapsed });

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible={true}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className="sidebar"
        >
          <div className="profile">
            <figure className="profile__img-container">
              <img
                src={require('./../assets/img/whitecollar.svg')}
                alt=""
                className="profile__img"
              />
              <figcaption className="profile__img-caption">
                Администратор
                <hr className="profile__divider" />
              </figcaption>
            </figure>
          </div>
          <Menu defaultSelectedKeys={['0']} mode="inline">
            <Menu.Item key="0">
              <Link to="/">
                <Icon type="desktop" />
                <span>Главная</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/pages">
                <Icon type="file-text" />
                <span>Страницы</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/sections">
                <Icon type="book" />
                <span>Разделы</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/courses">
                <Icon type="book" />
                <span>Курсы</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/organizations">
                <Icon type="schedule" />
                <span>Организации</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/users">
                <Icon type="idcard" />
                <span>Пользователи</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/blog">
                <Icon type="contacts" />
                <span>Блог</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/settings">
                <Icon type="tool" />
                <span>Настройки</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className="content">{this.props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            УЦ "Автор" ©2017 разработанно <a href="http://troinof.ru/portfolio/author">troinof.ru</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard;

import * as React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withState } from 'recompose';
import { Helmet } from 'react-helmet';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

declare const require: any;

/*!
 * Expo
 */


const Dashboard = ({ children, title = '', collapsed, onCollapse, auth }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ title }</title>
    </Helmet>

    <Sider
      collapsible={true}
      collapsed={collapsed}
      onCollapse={() => onCollapse(!collapsed)}
      className="sidebar"
    >
      <div className="profile">
        <figure className="profile__img-container">
          <img src={require('./../assets/img/briefcase.svg')} alt="" className="profile__img" />
          <figcaption className="profile__img-caption">
            {auth.user.name}
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
          <Link to="/users">
              <Icon type="book" />
              <span>Сотрудники</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>главная</Breadcrumb.Item>
          <Breadcrumb.Item>{ title !== 'Главная' ? title.toLocaleLowerCase() : ''}</Breadcrumb.Item>
        </Breadcrumb>
        <div className="content">
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        УЦ "Автор" ©2017 разработанно <a href="http://troinof.ru/portfolio/author">troinof.ru</a>
      </Footer>
    </Layout>
  </Layout>
);


const mapDispatchToProps = ({ auth }) => ({ auth });

export default connect(mapDispatchToProps)(withState(
  'collapsed',
  'onCollapse',
  false,
)(Dashboard) as any);

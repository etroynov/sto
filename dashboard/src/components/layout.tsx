import * as React from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

/*!
 * Expo
 */


class Dashboard extends React.Component<void, {
  collapsed: boolean;
}> {
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
          style={{
            background: '#fff',
          }}
        >
          {/* <div className="profile">
            <figure className="profile__img-container">
              <img src="/public/img/whitecollar.svg" alt="" className="profile__img" />
              <figcaption className="profile__img-caption">
                Тройнов Евгений Александрович
                <hr className="profile__divider" />
              </figcaption>
            </figure>
          </div> */}
          <Menu defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="0">
                <a>
                  <Icon type="desktop" />
                  <span>Главная</span>
                </a>
            </Menu.Item>
            <Menu.Item key="1">
                <a>
                  <Icon type="book" />
                  <span>Организации</span>
                </a>
            </Menu.Item>
            <Menu.Item key="2">
                <a>
                  <Icon type="tool" />
                  <span>Настройки</span>
                </a>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>главная</Breadcrumb.Item>
              <Breadcrumb.Item>курсы</Breadcrumb.Item>
            </Breadcrumb>
            <div className="content">
              {this.props.children}
            </div>
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

import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon, Button, Table } from 'antd';

/**
 * Components
 */

import Dashboard from './components/layout';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <div>
      <Button type="primary" icon="edit" />
      <Button type="primary" icon="delete" />
    </div>
  ),
}];

class App extends React.Component<{}, {
  collapsed: boolean;
}> {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Dashboard>
        <Content style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Dashboard>
    );
  }
}

export default App;

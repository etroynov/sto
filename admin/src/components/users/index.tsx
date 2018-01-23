/*!
 * Vendor
 */

import * as React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Table, Button, Switch } from 'antd';

/*!
 * Actions
 */

import { deletePage } from '../../actions/pagesActions';

/*!
 * Columns
 */

const columns = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: 'Компания',
    dataIndex: 'company',
    key: 'company',
  }, {
    title: 'Зарегистрирован',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (text, record) => moment(text).locale('ru').format('L'),
  }, {
    title: 'Оплачен',
    dataIndex: 'status',
    key: 'status',
    render: text => <Switch />,
  }, {
    title: 'Действия',
    key: 'action',
    render: (text, record) => (
      <div>
        {/* <Link to="/pages/show">
          <Button type="primary" icon="eye" />
        </Link> */}

        <Link to={`/pages/edit/${record._id}`}>
          <Button type="primary" icon="edit" style={{ marginLeft: 10 }} />
        </Link>

        <Button type="primary" icon="delete" style={{ marginLeft: 10 }} onClick={() => deletePage(record._id)} />
      </div>
    ),
  },
];

/*!
 * Expo
 */

const PagesIndex = ({ loading, data }) => (
  <Table 
    columns={columns}
    rowKey={(record: any) => record._id}
    dataSource={data}
    loading={loading}
  />
);

const mapStateToProps = ({ pages: { loading, data } }) => ({ loading, data });

export default connect(
  mapStateToProps,
)(PagesIndex as any);

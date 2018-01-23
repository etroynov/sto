/**
 * Vendor
 */

import * as React from 'react';
import { connect } from 'react-redux'
import { lifecycle } from 'recompose';
import { Button, Table } from 'antd';
import { Link } from 'react-router-dom';

/**
 * Actions
 */

import { fetchEmployers } from './../actions/organizationActions';

/**
 * Components
 */

import Dashboard from '../components/layout';
import UsersList from '../components/users/list';

/*!
 * Expo
 */

const Users = () => (
  <Dashboard title="Сотрудники">
    <header style={{ marginBottom: 20, padding: '10px 20px', background: '#ffffff' }}>
      <h1 style={{ margin: 0 }}>
        Сотрудники
        {/* <Button type="primary" icon="user-add" style={{ float: 'right', marginTop: 10 }}>
          <Link to="/users/create" style={{ color: '#fff' }}>
            Добавить сотрудника
          </Link>
        </Button> */}
      </h1>
    </header>

    <UsersList />
  </Dashboard>
);

export default connect(
  null,
  { fetchEmployers }
)(lifecycle({
  componentDidMount() {
    this.props.fetchEmployers();
  }
} as any)(Users) as any);

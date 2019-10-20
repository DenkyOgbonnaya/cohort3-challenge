import React from 'react';
import { Table, Divider, Tag } from 'antd';

const columns = [
  {
    title: 'Firstname',
    dataIndex: 'firstname',
    key: 'firstname',
  },
  {
    title: 'Lastname',
    dataIndex: 'lastname',
    key: 'lastname',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Hobby',
    key: 'hobby',
    dataIndex: 'hobby',
  },
  {
    title: 'Date',
    key: 'date',
    dataIndex: 'date',
    
  },
];

const data = [
  {
    key: '1',
    firstname: 'John',
    lastname: 'Brown',
    age: 32,
    hobby: 'Dancing',
  },
  {
    key: '2',
    firstname: 'John',
    lastname: 'Brown',
    age: 32,
    hobby: 'Dancing',
  },
  {
    key: '5',
    firstname: 'John',
    lastname: 'Brown',
    age: 32,
    hobby: 'Dancing',
  },
  {
    key: '4',
    firstname: 'John',
    lastname: 'Brown',
    age: 32,
    hobby: 'Dancing',
  },
];

const UserList = ({users}) => {

    return (
        <Table columns={columns} dataSource={users} />
    )
}

export default UserList;
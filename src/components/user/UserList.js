import React from 'react';
import { Table} from 'antd';
import {useSelector} from 'react-redux';

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
    title: 'Birthday',
    key: 'birthday',
    dataIndex: 'birthday',
    
  },
];



const UserList = () => {
  const users = useSelector( state => state.user.users);
    return (
        <Table columns={columns} dataSource={users} />
    )
}

export default UserList;
import React from 'react';
import { Table} from 'antd';
import propTypes from 'prop-types';

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



const UserList = ({users}) => {

    return (
        <Table columns={columns} dataSource={users} />
    )
}

UserList.prototypes = {
    users: propTypes.array.isRequired
}

export default UserList;
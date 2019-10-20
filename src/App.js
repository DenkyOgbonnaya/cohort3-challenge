import React, {useState} from 'react';
import './App.css';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import {Layout, Button, message} from 'antd';

function App() {
  const[users, setUsers] = useState([]);
  const[isVisible, setIsVisble] = useState(false);
  const { Header, Content, Footer } = Layout;

  const addUser = user => {
    setUsers(users.concat(user));
    hideUserForm();
    message.info('New user added');
  }
  const hideUserForm = () => {
    setIsVisble(!isVisible)
  }
  return (
    <Layout className="Layout">
      <Header>
        <div className="logo"  />
        <span style={{color: '#fff', fontSize:'20px'}}>UserForm</span>
      </Header>
      <br />
      <Content className='content'>
        <Button onClick = { () => setIsVisble(!isVisible)}>Add user</Button>
        <UserForm
            isVisible = {isVisible}
            handleAdd = {addUser}
            handleCancel = {hideUserForm}
        />
        <UserList users= {users} />
      </Content>
       <Footer className='footer'>©{new Date().getFullYear()} Dennis Ogbonnaya</Footer>
    </Layout>
  );
}

export default App;

import React from 'react';
import './App.css';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import {Layout, Button} from 'antd';
import {useDispatch} from 'react-redux';
import { TOGGLE_USER_FORM } from './actions/action-types';

function App() {
  const { Header, Content, Footer } = Layout;
  const dispatch = useDispatch();
  

  return (
    <Layout className="Layout">
      <Header>
        <div className="logo"  />
        <span style={{color: '#fff', fontSize:'20px'}}>UserForm</span>
      </Header>
      <Content className='content'>
        <Button onClick = { () => dispatch({type: TOGGLE_USER_FORM})}>Add user</Button>
        <UserForm/>
        <UserList />
      </Content>
       <Footer className='footer'>©{new Date().getFullYear()} Dennis Ogbonnaya</Footer>
    </Layout>
  );
}

export default App;

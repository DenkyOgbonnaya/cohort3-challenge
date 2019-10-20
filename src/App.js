import React, {useState} from 'react';
import './App.css';
import UserForm from './components/user/UserForm';
import UserList from './components/user/UserList';
import { Button} from 'antd';

function App() {
  const[users, setUsers] = useState([]);
  const[isVisible, setIsVisble] = useState(false);

  const addUser = user => {
    setUsers(users.concat(user));
    hideUserForm();
  }
  const hideUserForm = () => {
    setIsVisble(!isVisible)
  }
  return (
    <div className="App">
      <br />
      <Button onClick = { () => setIsVisble(!isVisible)}>Add user</Button>
      <UserForm
        isVisible = {isVisible}
        handleAdd = {addUser}
        handleCancel = {hideUserForm}
       />
       <UserList users= {users} />
    </div>
  );
}

export default App;

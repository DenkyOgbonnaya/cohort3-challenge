import React, {useState} from 'react';
import './App.css';
import UserForm from './components/UserForm';

function App() {
  const[isVisible, setIsVisble] = useState(true);

  const handleAdd = () => {
    setIsVisble(!isVisible)
  }
  const handleCancel = () => {
    setIsVisble(!isVisible)
  }
  return (
    <div className="App">
      <UserForm
        isVisible = {isVisible}
        handleAdd = {handleAdd}
        handleCancel = {handleCancel}
       />
    </div>
  );
}

export default App;

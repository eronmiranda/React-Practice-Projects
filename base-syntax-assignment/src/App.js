import './App.css';
import UserOutput from './components/UserOutput';
import {useState} from 'react';
import UserInput from './components/UserInput';

function App() {
  const [userName,setUserName] = useState("eronmiranda");

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }

  return (
    <div className="App">
      <UserOutput firstText="Welcome to Base Syntax Assignment" />
      <UserOutput firstText="Created by Eronielle Miranda" />
      <UserOutput 
        firstText="User Name:"
        userName={userName} />
      <UserInput 
        onChange={userNameChangeHandler} 
        userName={userName}/>
    </div>
  );
}

export default App;

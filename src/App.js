import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import SignIn from 'C:/Users/USER/Desktop/網頁設計/react/quiz7/src/signin/sign_in';
import App_todo from 'C:/Users/USER/Desktop/網頁設計/react/quiz7/src/todoList/App';

function App() {
  const [signinStatus,setSigninStatus]=useState(false);
  function ProcessSignin(){
    const isLoggedIn =signinStatus;
    return isLoggedIn? (<App_todo/>) : (<SignIn setStatus={setSigninStatus}/>);
  };
  return (
    <div className="App">         
        <ProcessSignin/>
    </div>
  );
};

export default App;

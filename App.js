import React,{useState} from 'react';
import LoginForm from './LoginForm';
import "./App.css"
import "./Login.css"
import Home from "./Home"



function App() {
  const root= {
    username:"root",
    password:"root"
  }

  const [user,setUser]=useState({username: ""});
  const [error,setError]=useState("");

  const Login=details =>{
    console.log(details);
    if(details.username ==root.username && details.password==root.password)
    {
      console.log("Logged in");
      setUser({
        username:details.username

      });
    }
    else{
      console.log("Invalid Credentials");
    }

  }
  const Logout=() =>
  {
    console.log("Logout");
  }
  return (
    <div className="App">
    {(user.username!="") ? (
      <Home/>
):(
  <div>
  <div className="header">
    <h1>Protocloud Pvt Ltd</h1>
  </div>
<div className="content">
<LoginForm Login={Login} />
</div>
</div>
          

)}
</div>
  );
}

export default App;
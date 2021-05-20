import React,{ useState } from "react";
import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
function Login({Login,error}) {
  const [details,setDetails]= useState({username: "",password:""});
  
  
  const submitHandler = e => {
    e.preventDefault();
    Login(details);
  }

    return (
        <div className="Container">
        <form className="demoForm" onSubmit={submitHandler}>
        <h2>Login</h2>
        
        <div className={`form-group`}>
          <label htmlFor="username">Username:</label>
          <input type="username" 
          onChange={e =>setDetails({...details, username: e.target.value})} 
          required className="form-control" name="username" 
          value={details.name}
            placeholder="username"
             />
        </div>
        <div className={`form-group `}>
          <label htmlFor="password">Password:</label>
          <input type="password" className="form-control" name="password"
          onChange={e =>setDetails({...details,password:e.target.value})}
            placeholder="Password"
            value={details.password}
          />
        </div>
       
        <div class="forgetpass">
        forget password?
        </div>
     
        
        <button  type="submit" 
        className="btn btn-primary button" onClick={Home} >Login</button>
       
      </form>
        </div>
    );
}

export default Login;
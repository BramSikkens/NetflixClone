import React from "react";
import "./Login.css";

/*This is the login page*/
function Login() {
  return (
    <div className="loginPage">
      <div className="loginBox">
        <h2>Sign In</h2>
        <form className="loginForm">
          <input type="text" defaultValue="Name"></input>
          <input type="password" defaultValue="password"></input>
          <button className="signInButton"> Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

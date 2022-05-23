import React, { useState } from "react";
import "./Login.css";
//import getFirebase from "../../../lib/firebase";

/*This is the login page*/
function Login() {
  //const firebaseInstance = getFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const signUp = async (event) => {
  //   event.preventDefault();

  //   try {
  //     if (firebaseInstance) {
  //       const user = await firebaseInstance
  //         .auth()
  //         .createUserWithEmailAndPassword(email.value, password.value);
  //       console.log("user", user);
  //       alert(`Welcome ${email.value}!`);
  //     }
  //   } catch (error) {
  //     console.log("error", error);
  //     alert(error.message);
  //   }
  // };

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h2>Sign In</h2>
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" className="signInButton">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from "react";
import "./Login.css";
import getFirebase from "../../../lib/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useSelector, useDispatch } from "react-redux";
import { signInRx } from "../../../redux/Slices/AuthenticationSlice";
import { Navigate, Link } from "react-router-dom";

const signUp = async (email, password) => {
  const auth = getAuth(getFirebase());
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      // ..
    });
};

const signIn = async (email, password, dispatch) => {
  const auth = getAuth(getFirebase());

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("signed In!", user);
      console.log(user);
      dispatch(signInRx(user));

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

/*This is the login page*/
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("LOGIN");
  const dispatch = useDispatch();

  return (
    <div className="loginPage">
      <div className="loginBox">
        <h2>{status == "LOGIN" ? "Login" : "Regiser"}</h2>
        <form
          className="loginForm"
          onSubmit={(e) => {
            e.preventDefault();

            if (status == "LOGIN") {
              let user = signIn(email, password, dispatch);
            } else {
              signUp(email, password);
            }
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
            {status == "LOGIN" ? "Login" : "Regiser"}
          </button>
        </form>

        {status == "LOGIN" && (
          <span>
            No account yet?
            <button
              onClick={() => {
                setStatus("REGISTER");
              }}
            >
              Register
            </button>{" "}
          </span>
        )}

        {status == "REGISTER" && (
          <span>
            No account yet?
            <button
              onClick={() => {
                setStatus("LOGIN");
              }}
            >
              Login
            </button>{" "}
          </span>
        )}
        <Link to="/">
          <button>Go to movies</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

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
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password)
      .user;
    return { status: "succes", user: user };
  } catch (e) {
    console.log
    return { status: "fail", message: e.message };
  }
};

const signIn = (email, password) => {
  const auth = getAuth(getFirebase());

  return signInWithEmailAndPassword(auth, email, password)
    .then((userImpl) => {
      console.log("koekoek");
      return { status: "succes", user: userImpl.user };
    })
    .catch((error) => {
      console.log("error", error.message);
      return { status: "fail", message: error.message };
    });
};

/*This is the login page*/
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("LOGIN");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.authentication.user);

  if (currentUser == undefined) {
    return (
      <div className="loginPage">
        <div className="loginBox">
          <h2>{status == "LOGIN" ? "Login" : "Regiser"}</h2>
          <p className="errorMessage">{error}</p>
          <form
            className="loginForm"
            onSubmit={async (e) => {
              e.preventDefault();

              if (status == "LOGIN") {
                var loginResponse = await signIn(email, password);
                if (loginResponse.status == "succes") {
                  dispatch(signInRx(loginResponse.user));
                } else {
                  setError(loginResponse.message);
                  setEmail("");
                  setPassword("");
                }
              } else {
                const signUpResponse = await signUp(email, password);
                if (signUpResponse.status == "succes") {
                  console.log("sign up succes");
                } else {
                  setError(signUpResponse.message);
                }
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
  } else {
    return <Navigate to="/" replace />;
  }
}

export default Login;

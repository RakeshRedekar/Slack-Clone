import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <img
          src="https://cdn.auth0.com/marketplace/catalog/content/assets/creators/slack/slack-avatar.png"
          alt=""
        />
        <h1>Sign in to Slack</h1>
        <p>slack_clone.com</p>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    </div>
  );
}

export default Login;

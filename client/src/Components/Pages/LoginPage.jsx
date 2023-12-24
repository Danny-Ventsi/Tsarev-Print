import "../../static/stylesheets/login.css";
import { Link, useNavigate } from "react-router-dom";
import { useBetween } from "use-between";
import { useState } from "react";

export const useSharedLogin = () => {
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const changeUsername = (event) => {
    setUsernameField(event.target.value);
  };
  const changePassword = (event) => {
    setPasswordField(event.target.value);
  };

  //Login call from frontend
  const login = async () => {
    const url = "https://localhost:8443/login";
    const payload = {
      username: usernameField,
      password: passwordField,
    };
    //Posting information
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payload),
    });
    //Setting token to be saved in app and session
    const token = await response.json();
    sessionStorage.setItem("token", token.jwtToken);
  };
  return {
    login,
    changeUsername,
    changePassword,
  };
};

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, changeUsername, changePassword } = useBetween(useSharedLogin);
  return (
    <div className="login">
      <h1>Login</h1>
      <label>Username: </label>
      <input
        onChange={changeUsername}
        autocorrect="off"
        autocapitalize="off"
        type="text"
      />
      <br />
      <br />
      <label>Password: </label>
      <input onChange={changePassword} type="password" />
      <br />
      <button
        onClick={async () => {
          await login();
          navigate("/redirect");
          document.location.reload();
        }}
        className="login-button-page"
        type="submit"
      >
        <span>Login </span>
      </button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;

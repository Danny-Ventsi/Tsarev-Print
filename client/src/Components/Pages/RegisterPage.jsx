import "../../static/stylesheets/register-page.css";
import { Link, useNavigate } from "react-router-dom";
import { useBetween } from "use-between";
import { useState } from "react";

export const useSharedRegister = () => {
  const [emailField, setEmailField] = useState("");
  const [usernameField, setUsernameField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const [confirmPassField, setConfirmPassField] = useState("");

  const changeEmail = (event) => {
    setEmailField(event.target.value);
  };

  const changeUsername = (event) => {
    setUsernameField(event.target.value);
  };
  const changePassword = (event) => {
    setPasswordField(event.target.value);
  };
  const changeConfirmPass = (event) => {
    setConfirmPassField(event.target.value);
  };

  const handleRegister = async (event) => {
    const url = "https://localhost:8443/users";
    if (passwordField !== confirmPassField) {
      alert("Please make sure that passwords match");
    } else {
      const payload = {
        userInfo: {
          emailAddress: emailField,
        },
        username: usernameField,
        password: passwordField,
      };
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
      const token = await response.json();
      console.log(token);
      sessionStorage.setItem("token", token.jwtToken);
    }
  };
  return {
    handleRegister,
    changeEmail,
    changeUsername,
    changePassword,
    changeConfirmPass,
  };
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    handleRegister,
    changeEmail,
    changeUsername,
    changePassword,
    changeConfirmPass,
  } = useBetween(useSharedRegister);
  return (
    <div id="register">
      <div id="register-page">
        <h1>Register</h1>
        <div
          style={{ position: "relative", left: "-13px" }}
          className="register-elements"
        >
          <label>Email address: </label>
          <input type="email" onChange={changeEmail} />
        </div>
        <div className="register-elements">
          <label>Username: </label>
          <input onChange={changeUsername} type="text" />
        </div>
        <div className="register-elements">
          <label>Password: </label>
          <input onChange={changePassword} id="pass" type="password" />
        </div>
        <div style={{}} id="confirmPass" className="register-elements">
          <label>Confirm Password: </label>
          <input
            onChange={changeConfirmPass}
            id="confirm-pass"
            type="password"
          />
        </div>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <button
          onClick={async () => {
            await handleRegister();
            navigate("/");
            document.location.reload();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

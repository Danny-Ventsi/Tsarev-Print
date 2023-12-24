import { useBetween } from "use-between";
import { useSharedLogin } from "../Pages/LoginPage";
import { useNavigate } from "react-router-dom";
import { useSharedRegister } from "../Pages/RegisterPage";

const DropdownLogin = () => {
  return (
    <div className="dropdown">
      <div className="triangle-down"></div>
      <div className="cart-dropdown-content">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, changeUsername, changePassword } = useBetween(useSharedLogin);
  const showRegister = () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.querySelector(".triangle-down").style.top = "-5.5%";
  };
  return (
    <form id="login-form">
      <h4>Login</h4>
      <label>Username: </label>
      <input
        autocorrect="off"
        autocapitalize="off"
        onChange={changeUsername}
        type="text"
      />
      <br />
      <br />
      <label>Password: </label>
      <input onChange={changePassword} type="password" />
      <br />
      <br />
      <button
        onClick={async (event) => {
          event.preventDefault();
          await login();
          navigate("/redirect");
          document.location.reload();
        }}
        className="login-button"
        type="submit"
      >
        <span>Login </span>
      </button>
      <p className="under-text">
        Don't have an account? <a onClick={showRegister}>Register here</a>
      </p>
    </form>
  );
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    handleRegister,
    changeEmail,
    changeUsername,
    changePassword,
    changeConfirmPass,
  } = useBetween(useSharedRegister);
  const showLogin = () => {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.querySelector(".triangle-down").style.top = "-7.6%";
  };

  return (
    <form id="register-form" style={{ display: "none" }}>
      <h4>Register</h4>
      <label>Email Address: </label>
      <input onChange={changeEmail} id="email-field" type="email" />
      <br />
      <br />
      <label>Username: </label>
      <input onChange={changeUsername} id="username-field" type="text" />
      <br />
      <br />
      <label>Password: </label>
      <input onChange={changePassword} id="password-field" type="password" />
      <br />
      <br />
      <label style={{ fontSize: "13px" }}>Confirm Password: </label>
      <input onChange={changeConfirmPass} type="password" />
      <br />
      <br />
      <button
        onClick={async (event) => {
          event.preventDefault();
          await handleRegister();
          navigate("/");
          document.location.reload();
        }}
        className="login-button"
        type="submit"
      >
        <span>Register </span>
      </button>
      <p className="under-text">
        Already have an account? <a onClick={showLogin}>Login here</a>
      </p>
    </form>
  );
};

export default DropdownLogin;

import React, { useState } from "react";
import "./Login.css";
import logo from "./assets/Group.svg";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$\-\][!%*?&^#.~+=><"',(){}])/;
  const [isErrorCombination, setIsErrorCombination] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    if (
      usernameInput === "test@luxpmsoft.com" &&
      passwordInput === "test1234!"
    ) {
      console.log("Oui");
      setIsErrorPassword(false);
      window.location.href = "/blank";
    } else {
      console.log("nON");
      setIsErrorPassword(true);
    }
    console.log(isErrorPassword, usernameInput, passwordInput);
  }

  return (
    <div className="app">
      <div className="group">
        <img
          src={logo}
          className="group-logo"
          alt="Logo of Luxolis coding test"
        />
        <form className="login-form" onSubmit={submitForm}>
          <div className="login-group">
            <input
              type="text"
              id="login"
              placeholder="USERNAME"
              className="username-input"
              value={usernameInput}
              onChange={(e) => {
                setUsernameInput(e.target.value);
              }}
            ></input>
          </div>
          <div className="login-group">
            <input
              type="text"
              id="login"
              placeholder="PASSWORD"
              className="password-input"
              value={passwordInput}
              onChange={(e) => {
                const newPass = e.target.value;
                setPasswordInput(newPass);
                if (!regex.test(newPass)) setIsErrorCombination(true);
                else setIsErrorCombination(false);
              }}
            ></input>
            {isErrorCombination && (
              <p className="error-combination-msg">Wrong combination</p>
            )}
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
          <p className="forgot">Forgot password?</p>
          {isErrorPassword && <p>WESH</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;

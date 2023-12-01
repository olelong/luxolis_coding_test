import React, { useState } from "react";
import Modal from "react-modal";

import "./Login.css";

import logo from "./assets/Group.svg";

function Login() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isErrorCombination, setIsErrorCombination] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  var regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$\-\][!%*?&^#.~+=><"',(){}])/;

  function submitForm(e) {
    e.preventDefault();
    if (
      usernameInput === "test@luxpmsoft.com" &&
      passwordInput === "test1234!"
    ) {
      setIsModalOpen(false);
      setIsLogin(true);
    } else {
      setIsModalOpen(true);
      setIsLogin(false);
    }
  }

  function closeModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="app">
      {!isLogin && (
        <div className="group">
          {/* Cart logo Part */}
          <img
            src={logo}
            className="group-logo"
            alt="Logo of Luxolis coding test"
          />
          {/* Form for login part */}
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
                type="password"
                id="login-pass"
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
            {/* Forgot Password Part */}
            <p className="forgot">Forgot password?</p>
            {/* Modal Pop Up Part for incorrect password/login */}
            {isModalOpen && (
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                className="modal-group"
                style={{
                  overlay: { backgroundColor: "rgba(33, 72, 192, 0.5)" },
                }}
                ariaHideApp={false}
              >
                <button onClick={closeModal} className="modal-close-button">
                  X
                </button>
                <p className="modal-p">The provided password is wrong</p>
              </Modal>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;

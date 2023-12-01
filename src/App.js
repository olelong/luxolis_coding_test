import "./App.css";
import logo from "./assets/Group.svg";

function App() {
  return (
    <div className="app">
      <div className="group">
        <img
          src={logo}
          className="group-logo"
          alt="Logo of Luxolis coding test"
        />
        <form className="login-form">
          <div className="login-group">
            <input
              type="text"
              id="login"
              placeholder="USERNAME"
              className="username-input"
            ></input>
          </div>
          <div className="login-group">
            <input
              type="text"
              id="login"
              placeholder="PASSWORD"
              className="password-input"
            ></input>
          </div>
          <button type="submit" className="login-button">
            LOGIN
          </button>
          <p className="forgot">Forgot password?</p>
        </form>
      </div>
    </div>
  );
}

export default App;

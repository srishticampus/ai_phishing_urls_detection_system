import { useState } from "react";
import "../../Pages/AdvertisersLogin/AdvertisersLogin.css";
import LoginBackground from "../../assets/Images/Login_Background.png";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function AdvertisersLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      // Perform login logic
      console.log("Logging in...");
    } else {
      setErrorMessage("Both fields are required!");
    }
  };

  return (
    <div className="advertiser-login-container d-flex">
      <div className="advertiser-login-left">
        <img
          className="advertiser-login-image"
          src={LoginBackground}
          alt="Login Background"
        />
      </div>
      <div className="advertiser-login-right">
        <p className="advertiser-login-head">Advertisers Login</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control advertiser-login-username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password-container">
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control advertiser-login-password mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={passwordVisible ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={handleTogglePassword}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link className="advertiser-login-forgotpassword" to="/advertisers-forget-password">
            Forget Password ?
          </Link>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn advertiser-login-button">
              Login
            </button>
          </div>
        </form>
        <p className="advertiser-login-dont-have-account mt-4">
          Don&apos;t have an Account ?{" "}
          <a className="advertiser-login-dont-have-account-atag" href="/advertisers-signup">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default AdvertisersLogin;

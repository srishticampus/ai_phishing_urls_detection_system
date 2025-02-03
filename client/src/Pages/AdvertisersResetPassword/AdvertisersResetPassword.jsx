import { useState } from "react";
import "../../Pages/AdvertisersResetPassword/AdvertisersResetPassword.css";
import resetbackground from "../../assets/Images/reset-background.png";
import 'font-awesome/css/font-awesome.min.css'; 

function AdvertisersResetPassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleConfirmPasswordToggle = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
 
    setError("");
   
  };

  return (
    <div className="advertisers-reset-password-container">
      <div className="advertisers-reset-password-left">
        <img
          className="advertisers-reset-password-image"
          src={resetbackground}
          alt="reset background"
        />
      </div>
      <div className="advertisers-reset-password-right">
        <h1 className="advertisers-reset-password-head">Reset Password!</h1>
        <p className="advertisers-reset-password-para">
          Your new password must be different
          <br />
          from the previous password.
        </p>

        {/* New Password Input */}
        <div className="password-input-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="New Password"
            className="form-control advertisers-reset-password-newpass"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <i
            className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
            onClick={handlePasswordToggle}
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        {/* Confirm Password Input */}
        <div className="password-input-container">
          <input
            type={confirmPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            className="form-control advertisers-reset-password-confirmpass"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <i
            className={`fa ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`}
            onClick={handleConfirmPasswordToggle}
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button
          className="btn btn-dark advertisers-reset-password-btn"
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default AdvertisersResetPassword;

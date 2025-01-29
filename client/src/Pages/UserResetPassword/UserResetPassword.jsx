import { useState } from "react";
import "../../Pages/UserResetPassword/UserResetPassword.css";
import resetbackground from "../../assets/Images/reset-background.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function UserResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); 

  const handleSubmit = () => {
    if (!newPassword || !confirmPassword) {
      setError("Both fields are required.");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

  
    setError(""); 
    alert("Password has been reset successfully!");
  };

  return (
    <div className="users-reset-password-container">
      <div className="users-reset-password-left">
        <img className="users-reset-password-image" src={resetbackground} alt="reset background" />
      </div>
      <div className="users-reset-password-right">
        <h1 className="users-reset-password-head">Reset Password!</h1>
        <p className="users-reset-password-para">
          Your new password must be different<br></br>from previous password.
        </p>

        <div className="password-input-container">
          <input
            type={showNewPassword ? "text" : "password"} 
            placeholder="New Password"
            className={`form-control users-reset-password-newpass ${error ? 'error' : ''}`} 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowNewPassword(!showNewPassword)} 
            className="eye-icon-btn"
          >
            {showNewPassword ? <FaEyeSlash /> : <FaEye />} 
          </button>
        </div>

        <div className="password-input-container">
          <input
            type={showConfirmPassword ? "text" : "password"} 
            placeholder="Confirm Password"
            className={`form-control users-reset-password-confirmpass ${error ? 'error' : ''}`} 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
            className="eye-icon-btn"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />} 
          </button>
        </div>

        {error && <div className="error-message">{error}</div>} 

        <div>
          <button className="btn btn-dark users-reset-password-btn" onClick={handleSubmit}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default UserResetPassword;

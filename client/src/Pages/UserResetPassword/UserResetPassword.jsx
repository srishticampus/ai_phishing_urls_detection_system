import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../Pages/UserResetPassword/UserResetPassword.css";
import resetbackground from "../../assets/Images/reset-background.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword } from "../../Services/apiService"; // ✅ Import API function

function UserResetPassword() {
  const { uid, token } = useParams(); // ✅ Extract uid and token from URL
  const navigate = useNavigate(); // ✅ Redirect after successful reset
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Both fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await resetPassword({ uid, token, new_password: newPassword });

      if (response.success) {
        toast.success("Password reset successful! Redirecting...");
        setTimeout(() => navigate("/login"), 3000); // ✅ Redirect to login
      } else {
        toast.error(response.errors?.message || "Failed to reset password.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="users-reset-password-container">
      {/* Left Side with Image */}
      <div className="users-reset-password-left">
        <img className="users-reset-password-image" src={resetbackground} alt="reset background" />
      </div>

      {/* Right Side with Form */}
      <div className="users-reset-password-right">
        <h1 className="users-reset-password-head">Reset Password!</h1>
        <p className="users-reset-password-para">
          Your new password must be different <br /> from the previous password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="password-input-container">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="New Password"
              className="form-control users-reset-password-newpass"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="eye-icon-btn"
            >
              {showNewPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="password-input-container">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="form-control users-reset-password-confirmpass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="eye-icon-btn"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-center">
            <button className="btn btn-dark users-reset-password-btn" type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserResetPassword;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../Pages/AdvertisersResetPassword/AdvertisersResetPassword.css";
import resetbackground from "../../assets/Images/reset-background.png";
import { toast } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS
import { resetPassword } from "../../Services/apiService"; // ✅ Import API function

function AdvertisersResetPassword() {
  const { uid, token } = useParams(); // ✅ Extract uid and token from URL
  const navigate = useNavigate(); // ✅ Redirect after success
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Track API request status

  // ✅ Function to toggle password visibility
  const handlePasswordToggle = () => setPasswordVisible(!passwordVisible);
  const handleConfirmPasswordToggle = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  // ✅ Function to handle password reset
  const handleSubmit = async (event) => {
    event.preventDefault();

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
        setTimeout(() => navigate("/advertiser-login"), 3000); // ✅ Redirect to login
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
    <div className="advertisers-reset-password-container">
      <div className="advertisers-reset-password-left">
        <img className="advertisers-reset-password-image" src={resetbackground} alt="reset background" />
      </div>
      <div className="advertisers-reset-password-right">
        <h1 className="advertisers-reset-password-head">Reset Password!</h1>
        <p className="advertisers-reset-password-para">
          Your new password must be different <br /> from the previous password.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="password-input-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="New Password"
              className="form-control advertisers-reset-password-newpass"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <i
              className={`fa ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`}
              onClick={handlePasswordToggle}
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          {/* Confirm Password */}
          <div className="password-input-container">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              className="form-control advertisers-reset-password-confirmpass"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i
              className={`fa ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`}
              onClick={handleConfirmPasswordToggle}
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-dark advertisers-reset-password-btn"
              type="submit"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Confirm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdvertisersResetPassword;

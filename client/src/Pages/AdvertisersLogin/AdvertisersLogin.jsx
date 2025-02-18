import "../../Pages/AdvertisersLogin/AdvertisersLogin.css";
import LoginBackground from "../../assets/Images/Login_Background.png";
import { useState } from "react";
import { login } from "../../Services/apiService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast

function AdvertisersLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formValid = true;
    let newErrors = { username: "", password: "" };

    // Validate Username
    if (!username.trim()) {
      newErrors.username = "Username is required.";
      formValid = false;
    }

    // Validate Password
    if (!password.trim()) {
      newErrors.password = "Password is required.";
      formValid = false;
    }

    setErrors(newErrors);

    if (formValid) {
      try {
        const response = await login({ username, password });
        console.log("Login response:", response);
        if (response.success) {
          console.log("Login successful", response.data);
          toast.success("Login successful! Redirecting to dashboard..."); // Show success toast
          setTimeout(() => {
            navigate("/advertiser-dashboard"); // Redirect after a delay
          }, 2000); // 2-second delay
        } else {
          // Handle specific error for inactive account
          if (response.errors?.error?.includes("This account is not active. Please contact the ADMIN.")) {
            toast.error("This account is not active. Please contact the ADMIN."); // Show error toast
          } else {
            setErrors({ ...errors, password: "Invalid username or password." });
            toast.error("Invalid username or password."); // Show error toast
          }
        }
      } catch (error) {
        console.error("Login failed", error);
        setErrors({
          ...errors,
          password: "An error occurred. Please try again.",
        });
        toast.error("An error occurred. Please try again."); // Show error toast
      }
    } else {
      toast.error("Please fix the errors in the form."); // Show error toast for validation errors
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
          {errors.username && (
            <p className="error-message">{errors.username}</p>
          )}

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control advertiser-login-password mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <Link
            className="advertiser-login-forgotpassword"
            to="/advertisers-forget-password"
          >
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
          <Link
            className="advertiser-login-dont-have-account-atag"
            to="/advertisers-signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AdvertisersLogin;
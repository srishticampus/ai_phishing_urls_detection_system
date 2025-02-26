import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SignUp_Page_Img from "../../assets/Images/SignUp_Page_Img.png";
import { userSignup } from "../../Services/apiService";
import "./UserSignup.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function UserSignup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);

  // Handle form validation
  const validateForm = () => {
    const newErrors = {};
    const usernameMaxLength = 15;
    const passwordMaxLength = 20;

    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length > usernameMaxLength) {
      newErrors.username = `Username cannot exceed ${usernameMaxLength} characters`;
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
      if (!passwordRegex.test(password)) {
        newErrors.password =
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.";
      } else if (password.length > passwordMaxLength) {
        newErrors.password = `Password cannot exceed ${passwordMaxLength} characters`;
      }
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the highlighted errors.");
      return;
    }

    setErrors({});
    setApiError("");

    const formData = {
      username,
      email,
      password,
      user_type: "user",
    };

    try {
      const response = await userSignup(formData);

      if (response.success) {
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        if (response.errors) {
          setErrors(response.errors);
          toast.error("Registration failed. Please check your input.");
        } else if (response.message) {
          setApiError(response.message);
          toast.error(response.message);
        } else {
          setApiError("An unexpected error occurred. Please try again.");
          toast.error("An unexpected error occurred.");
        }
      }
    } catch (error) {
      setApiError("An unexpected error occurred. Please try again.");
      toast.error("An unexpected error occurred.");
      console.error("Signup Error:", error);
    }
  };

  return (
    <div className="signup-container">
      <div className="Signup_LeftSide">
        <img className="SignUp_Page_Img" src={SignUp_Page_Img} alt="Sign Up" />
      </div>
      <div className="Signup_RightSide">
        <p className="Signup_RightSide_head">Sign Up!</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="mb-3 signup-password-relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-eye-icon"
              onClick={() => setIsPasswordVisible((prev) => !prev)}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="mb-3 signup-confirm-relative">
            <input
              type={isPassVisible ? "text" : "password"}
              className="form-control"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="password-eye-icon"
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}
          </div>

          {apiError && <div className="api-error">{apiError}</div>}

          <button type="submit" className="btn Signup_Button mb-5">
            Sign Up
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <a className="user-signup-login" href="/blog_sphere/Login">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;

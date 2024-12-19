import { useState } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import SignUp_Page_Img from "../../assets/Images/SignUp_Page_Img.png";
import { userSignup } from "../../Services/apiService";
import "./UserSignup.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function UserSignup() {
  // States for form fields and validation errors
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility
  const [isPassVisible, setIsPassVisible] = useState(false);
  // Handle form validation
  const validateForm = () => {
    const newErrors = {};
    const usernameMaxLength = 15;  // Set the max length for username
    const passwordMaxLength = 20;  // Set the max length for password
    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length > usernameMaxLength) {
      newErrors.username = `Username cannot exceed ${usernameMaxLength} characters`;
    }
    if (!email) {
      newErrors.email = "Email is required";
    } else {
      // Regular expression for a valid email format
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
        newErrors.password = "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character.";
      } else if (password.length > passwordMaxLength) {
        newErrors.password = `Password cannot exceed ${passwordMaxLength} characters`;
      }
    }
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Reset errors if validation passed
    setErrors({});
    setApiError("");

    // Prepare form data
    const formData = {
      username,
      email,
      password,
      user_type: "user",
    };

    try {
      const response = await userSignup(formData);

      if (response.success) {
        // Redirect on successful signup
        toast.success(response.data);
        navigate("/login");
      } else {
        // Parse and display specific field errors or generic API error
        if (response.errors) {
          setErrors(response.errors);
        } else if (response.message) {
          setApiError(response.message);
        } else {
          setApiError("An unexpected error occurred. Please try again.");
        }
        toast.warn(response.errors);
      }
    } catch (error) {
      // Handle unexpected errors
      setApiError("An unexpected error occurred. Please try again.", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const toggleConfimPassVisibility = () => {
    setIsPassVisible(prevState => !prevState);
  }

  return (
    <div className="signup-container">
      <ToastContainer />
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
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <div className="error">{errors.username.join(", ")}</div>
            )}
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="E-mail"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="error">{errors.email.join(", ")}</div>
            )}
          </div>
          <div className="mb-3  signup-password-relative">
            <input
              type={isPasswordVisible ? "text" : "password"}
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="password-eye-icon"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <div className="error">{errors.password.join(", ")}</div>
            )}
          </div>
          <div className="mb-3 signup-confirm-relative">
            <input
              type={isPassVisible ? "text" : "password"}
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="password-eye-icon"
              onClick={toggleConfimPassVisibility}
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
          Already have an account? <a className="user-signup-login" href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;

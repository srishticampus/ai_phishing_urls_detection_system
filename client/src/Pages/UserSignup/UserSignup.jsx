import { useState } from "react";
import { useNavigate } from "react-router";
import SignUp_Page_Img from "../../assets/Images/SignUp_Page_Img.png";
import { userSignup } from "../../Services/apiService";
import "./UserSignup.css";

function UserSignup() {
  // States for form fields and validation errors
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  // Handle form validation
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
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
    };

    try {
      const response = await userSignup(formData);

      if (response.success) {
        // Redirect on successful signup
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
      }
    } catch (error) {
      // Handle unexpected errors
      setApiError("An unexpected error occurred. Please try again.", error);
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
          <div className="mb-5 mt-3">
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
          <div className="mb-5 mt-3">
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
          <div className="mb-5">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="error">{errors.password.join(", ")}</div>
            )}
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
          Already have an account? <a href="/Login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;

import { useState } from "react";
import { useNavigate, Link } from "react-router"
import "./UserLogin.css";
import Login_Background from "../../assets/Images/Login_Background.png";
import { userLogin } from "../../Services/apiService";

function UserLogin() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors
  const [apiError, setApiError] = useState(""); // State for API error messages

  // Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({}); // Clear previous validation errors
    setApiError(""); // Clear previous API error

    const formData = { username, password };

    const response = await userLogin(formData);

    if (response.success) {
      navigate("/"); // Navigate to home page after successful login
    } else {
      // Display API error messages
      const errorMessage =
        response.errors?.non_field_errors?.[0] ||
        "Invalid login credentials. Please try again.";
      setApiError(errorMessage);
    }
  };

  return (
    <div className="Login-container">
      <div className="Login_LeftSide">
        <img
          className="Login_Page_Img"
          src={Login_Background}
          alt="Background"
        />
      </div>
      <div className="Login_RightSide">
        <p className="Login_RightSide_head">Login</p>
        <form onSubmit={handleLogin}>
          <div className="mb-5 mt-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}{" "}
            {/* Show username error */}
          </div>

          <div className="mb-5">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}{" "}
            {/* Show password error */}
          </div>

          {apiError && <div className="error">{apiError}</div>}{" "}
          {/* Show API error */}

          <button type="submit" className="btn Login_Button mb-5">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;

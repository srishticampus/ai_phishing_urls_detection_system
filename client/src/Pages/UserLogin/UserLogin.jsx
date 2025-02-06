import { useState } from "react";
import { useNavigate, Link } from "react-router";
import "./UserLogin.css";
import Login_Background from "../../assets/Images/Login_Background.png";
import { login } from "../../Services/apiService";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

function UserLogin() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // State for validation errors
  const [apiError, setApiError] = useState(""); // State for API error messages
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for password visibility

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

    const response = await login(formData);
    // console.log(response);

    if (response.success) {
      console.log(response.data.message) 
      // toast.success(response.data.message);
      toast.success(response.data.message, {
        position: "top-right",  // Adjust position as needed
        autoClose: 5000,         // Toast duration (in milliseconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/user-profile"); // Navigate to home page after successful login
    } else {
      // Display API error messages
      const errorMessage =
        response.errors?.non_field_errors?.[0] ||
        "Invalid login credentials. Please try again.";
      setApiError(errorMessage);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  return (
    <div className="Login-container">
      <div className="Login_LeftSide">
        <img className="Login_Page_Img" src={Login_Background} alt="Background" />
      </div>
      <div className="Login_RightSide">
        <p className="Login_RightSide_head">Login!</p>
        <form onSubmit={handleLogin}>
          <div className="mb-4 mt-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>

          <div className="mb-4 position-relative">
            <input
              type={isPasswordVisible ? "text" : "password"} // Toggle between text and password type
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="password-eye-icon"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <div className="error">{errors.password}</div>}
          </div>

          <div className="d-flex justify-content-end mb-3">
            <Link to="/forgetpassword" className="login-forgetpass">Forget Password?</Link>
          </div>

          {apiError && <div className="error">{apiError}</div>}

          <button type="submit" className="btn Login_Button mb-5">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account? <Link className="signup-decoration" to="/signup"><span className="dont-have-an-account-signup">Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;

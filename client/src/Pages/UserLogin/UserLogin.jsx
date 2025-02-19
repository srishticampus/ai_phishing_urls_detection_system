import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./UserLogin.css";
import Login_Background from "../../assets/Images/Login_Background.png";
import { login, userProfile } from "../../Services/apiService"; // ✅ Import userProfile
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ Import eye icons

function UserLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Handle input changes
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  // ✅ Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  // ✅ Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form before sending request
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setApiError("");

    // Send login request
    const formData = { username, password };
    const response = await login(formData); 

    if (response.success) {
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
      });

      // ✅ Check if user has a profile
      const profileResponse = await userProfile();
      if (profileResponse.success && profileResponse.data.user.first_name) {
        navigate("/user-homepage"); // ✅ Redirect if profile exists
      } else {
        navigate("/user-profile"); // ✅ Redirect if profile is empty
      }
    } else {
      setApiError(
        response.errors?.non_field_errors?.[0] || "Invalid login credentials."
      );
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
      });
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
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
        <p className="Login_RightSide_head">User Login!</p>
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
              type={isPasswordVisible ? "text" : "password"}
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
            <Link to="/forgetpassword" className="login-forgetpass">
              Forget Password?
            </Link>
          </div>

          {apiError && <div className="error">{apiError}</div>}

          <button type="submit" className="btn Login_Button mb-5">
            Login
          </button>
        </form>
        <p>
          Don&apos;t have an account?{" "}
          <Link className="signup-decoration" to="/signup">
            <span className="dont-have-an-account-signup">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserLogin;

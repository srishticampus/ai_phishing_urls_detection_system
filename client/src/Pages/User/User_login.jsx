import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/Styles/Pages_Styles/UserLogin.css';
import Login_Background from '../../assets/Images/Login_Background.png';

function User_login() {
  const navigate = useNavigate(); // Initialize navigate
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State for validation errors

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
    setErrors({}); // Clear previous errors

    const formData = { username, password };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/login', {    //later use .env !important
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/'); // Navigate to home page after successful login
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'An error occurred');
      }
    } catch (error) {
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="Login-container">
      <div className="Login_LeftSide">
        <img className="Login_Page_Img" src={Login_Background} alt="Background" />
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
            {errors.username && <div className="error">{errors.username}</div>} {/* Show username error */}
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
            {errors.password && <div className="error">{errors.password}</div>} {/* Show password error */}
          </div>

          <button type="submit" className="btn Login_Button mb-5">
            Login
          </button>
        </form>
        <p>
          Don't have an account? <a href="/SignUP">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default User_login;

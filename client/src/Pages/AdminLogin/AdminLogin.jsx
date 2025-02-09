import "../../Pages/AdminLogin/AdminLogin.css";
import backgroundimg from "../../assets/Images/Login_Background.png";
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
import { login } from "../../Services/apiService";
import { useNavigate } from "react-router";

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formValid = true;
        let newErrors = { username: '', password: '' };

        // Validate Username
        if (!username.trim()) {
            newErrors.username = 'Username is required.';
            formValid = false;
        }

        // Validate Password
        if (!password.trim()) {
            newErrors.password = 'Password is required.';
            formValid = false;
        }

        setErrors(newErrors);

        if (formValid) {
            try {
                
                const response = await login({ username, password, user_type: "admin" });
                console.log('Login response:', response); 
                if (response.success) {
                    console.log('Login successful', response.data);
                    navigate('/admin-dashboard');
                    
                } else {
                    setErrors({ ...errors, password: 'Invalid username or password.' });
                }
            } catch (error) {
                console.error('Login failed', error);
                setErrors({ ...errors, password: 'An error occurred. Please try again.' });
            }
        }
    };

    return (
        <div className="d-flex admin-login-container">
            <div className="admin-login-section-left">
                <img className="admin-login-image" src={backgroundimg} alt="Login Background" />
            </div>
            <div className="admin-login-section-right">
                <p className="admin-login-right-head">Login</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control admin-login-username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <p className="error-text">{errors.username}</p>}
                    <br />
                    <div className="password-field-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="form-control admin-login-username"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                        <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        >
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                        </span>
                    </div>
                    <button className="btn btn-dark admin-login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;
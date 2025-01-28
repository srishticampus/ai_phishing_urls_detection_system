import "../../Pages/AdminLogin/AdminLogin.css"
import backgroundimg from "../../assets/Images/Login_Background.png"
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        username: '',
        password: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (event) => {
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
            // Proceed with form submission or login logic
            console.log('Form submitted');
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
    )
}

export default AdminLogin;

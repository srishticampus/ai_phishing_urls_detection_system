import "../../Pages/AdminLogin/AdminLogin.css"
import backgroundimg from "../../assets/Images/Login_Background.png"
import { useState } from "react";
import 'font-awesome/css/font-awesome.min.css'; 

function AdminLogin() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="d-flex admin-login-container">
            <div className="admin-login-section-left">
                <img className="admin-login-image" src={backgroundimg} alt="Login Background" />
            </div>
            <div className="admin-login-section-right">
                <p className="admin-login-right-head">Login</p>
                <form>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="form-control admin-login-username" 
                    /><br />
                    <div className="password-field-container">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password" 
                            className="form-control admin-login-username" 
                        />
                        <span 
                            className="password-toggle-icon" 
                            onClick={togglePasswordVisibility}
                        >
                            <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                        </span>
                    </div>
                </form>
                <button className="btn btn-dark admin-login-button">Login</button>
            </div>
        </div>
    )
}

export default AdminLogin;

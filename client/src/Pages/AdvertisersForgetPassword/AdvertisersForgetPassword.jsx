import  { useState } from "react";
import "../../Pages/AdvertisersForgetPassword/AdvertisersForgetPassword.css";
import forgetPbackgroundimg from "../../assets/Images/forgetP_backgroundimg.png";
import { Link } from "react-router-dom";

function AdvertisersForgetPassword() {
  const [email, setEmail] = useState(""); // State to track the email input
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track if email is valid
  
  // Function to handle email input changes
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // Check if email is non-empty and matches basic email format (optional regex for more validation)
    setIsEmailValid(emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
  };

  return (
    <div className="advertisers-forget-password-container">
      <div className="advertisers-forget-password-left">
        <img className="advertisers-forget-password-image" src={forgetPbackgroundimg} alt="Background" />
      </div>
      <div className="advertisers-forget-password-right">
        <p className="advertisers-forget-password-head">Forget Password?</p>
        <p className="advertisers-forget-password-para">
          Enter your E-mail below to receive your password reset <br /> instruction
        </p>
        <input
          type="email"
          className="form-control advertisers-forget-password-email"
          placeholder="E-Mail"
          value={email}
          onChange={handleEmailChange}
        />
        <div className="d-flex justify-content-center mt-4">
          <button
            className="btn btn-dark advertisers-forget-password-btn"
            disabled={!isEmailValid} 
          >
            <Link className="adv-forget-pass-next" to="/advertisers-reset-password">Next</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersForgetPassword;

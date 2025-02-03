import { useState } from "react";
import forgetP_backgroundimg from '../../assets/Images/forgetP_backgroundimg.png';
import '../../Pages/UserForgetPassword/UserForgotPassword.css';
import { Link } from "react-router-dom";

function UserForgotPassword() {
    const [email, setEmail] = useState(""); // State to track email input
    const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validation

    // Function to handle email input changes
    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        
        // Basic email validation
        setIsEmailValid(emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
    };

    return (
        <div className='userfp-main'>
            <div className="userfp-left">
                <img className='userfp-img' src={forgetP_backgroundimg} alt='Forget Password Background' />
            </div>
            <div className="userfp-right">
                <p className="userfp-forgetpassword-head mb-5">Forget Password?</p>
                <p className='userfp-forgetpassword-para mb-5'>
                    Enter your E-mail below to receive your password reset <br /> instruction
                </p>
                <form>
                    <input
                        type='email'
                        placeholder='E-Mail'
                        className='form-control userfp-email mb-5'
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className="d-flex justify-content-center mt-4">
                        {/* Move Link outside of the button and conditionally disable it */}
                        <Link 
                            className={`adv-forget-pass-next ${!isEmailValid ? 'disabled' : ''}`} 
                            to="/user-reset-password"
                        >
                            <button
                                className='userfp-next-button'
                                disabled={!isEmailValid} 
                            >
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserForgotPassword;

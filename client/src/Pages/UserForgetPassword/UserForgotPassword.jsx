import { useState } from "react";
import forgetP_backgroundimg from "../../assets/Images/forgetP_backgroundimg.png";
import "../../Pages/UserForgetPassword/UserForgotPassword.css";
import { toast } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS
import { forgotPassword } from "../../Services/apiService"; // ✅ Import API function

function UserForgotPassword() {
    const [email, setEmail] = useState(""); // ✅ State to track email input
    const [isEmailValid, setIsEmailValid] = useState(false); // ✅ State to track email validation
    const [loading, setLoading] = useState(false); // ✅ State to track API request

    // ✅ Function to handle email input changes
    const handleEmailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);

        // Basic email validation
        setIsEmailValid(emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue));
    };

    // ✅ Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isEmailValid) return; // Prevent invalid submission

        setLoading(true);
        try {
            const response = await forgotPassword(email);
            
            if (response.success) {
                toast.success("Password reset link sent successfully! 📩");
            } else {
                const errorMessage = response.errors?.message || "Failed to send reset link.";
                toast.error(errorMessage);
            }
        } catch (error) {
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="userfp-main">
            <div className="userfp-left">
                <img className="userfp-img" src={forgetP_backgroundimg} alt="Forget Password Background" />
            </div>
            <div className="userfp-right">
                <p className="userfp-forgetpassword-head mb-5">Forget Password?</p>
                <p className="userfp-forgetpassword-para mb-5">
                    Enter your E-mail below to receive your password reset <br /> instruction
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="E-Mail"
                        className="form-control userfp-email mb-5"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <div className="d-flex justify-content-center mt-4">
                        <button
                            className="userfp-next-button"
                            type="submit"
                            disabled={!isEmailValid || loading}
                        >
                            {loading ? "Sending..." : "Next"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserForgotPassword;

import { useState } from "react";
import "../../Pages/AdvertisersForgetPassword/AdvertisersForgetPassword.css";
import forgetPbackgroundimg from "../../assets/Images/forgetP_backgroundimg.png";
import { toast } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS
import { forgotPassword } from "../../Services/apiService"; // ✅ Import API function

function AdvertisersForgetPassword() {
  const [email, setEmail] = useState(""); // ✅ State to track email input
  const [isEmailValid, setIsEmailValid] = useState(false); // ✅ State to track email validation
  const [loading, setLoading] = useState(false); // ✅ Track API request status

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
    if (!isEmailValid) return;

    setLoading(true);
    try {
      const response = await forgotPassword(email); // 🔗 Call API function
      if (response.success) {
        toast.success("Password reset link sent successfully! 📩");
      } else {
        toast.error(response.errors?.email || "Failed to send reset link.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control advertisers-forget-password-email"
            placeholder="E-Mail"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-dark advertisers-forget-password-btn"
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

export default AdvertisersForgetPassword;

import "../../Pages/PrivacyPolicy/Privacy.css"
import Footer from "../../Components/Footer/Footer"

function PrivacyandPolicy() {
  return (
    <div>
     <div className="privacy-and-policy-div">
            <p className="privacy-and-policy-head">Privacy and Policy</p>
            <p className="privacy-and-policy-para">At BlogSphere, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you access or use our website or mobile application. We may collect information such as your name, email address, and usage data to enhance your experience on the platform, including personalized content recommendations powered by our AI algorithms. We also use AI to identify and prevent phishing or malicious activities to ensure a secure environment for all users. Your information is securely stored and will never be shared with third parties without your consent, except when required by law. By using BlogSphere, you agree to the collection and use of your information as described in this Privacy Policy. For any questions or concerns regarding your data, please contact us directly.</p>
            
        </div>
        <div className="privacy-and-policy-footer">
        < Footer/>
        </div>
    </div>
  )
}

export default PrivacyandPolicy

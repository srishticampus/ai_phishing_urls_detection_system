import "./Footer.css";
import fb from "../../assets/Images/fb.png";
import insta from "../../assets/Images/insta.png";
import pinterest from "../../assets/Images/pinterest.png";
import twitter from "../../assets/Images/twitter.png";
import ytb from "../../assets/Images/ytb.png";
import { Link } from "react-router-dom";
import { checkLoginStatus } from "../../Services/apiService";
import { useEffect, useState } from "react";


function Footer() {
    const [isLoggedIn, setIsLoggedIn] = useState(checkLoginStatus()); // Track login status
  
    // Listen for login status changes
    useEffect(() => {
      const handleLoginStatusChange = () => {
        setIsLoggedIn(checkLoginStatus()); 
      };
  
      // Add event listener for login status changes
      window.addEventListener("loginStatusChanged", handleLoginStatusChange);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener("loginStatusChanged", handleLoginStatusChange);
      };
    }, []);
  
  return (
    <>
      <div className="footerBG">
        <div className="footerComponents">
          <div className="footer_sec_one">
            <p>
              <span className="footer_blog_color">BLOG</span>{" "}
              <span className="footer_sphere_color">SPHERE</span>
            </p>
            <div className="footerIcons">
              <img className="IconSpacing" src={fb} />
              <img className="IconSpacing" src={twitter} />
              <img className="IconSpacing" src={insta} />
              <img className="IconSpacing" src={pinterest} />
              <img className="IconSpacing" src={ytb} />
            </div>
          </div>

          <div className="footer_sec_two">
            <p className="footer_QuickLinks">Quick Links</p>
            <ul>
              <li><Link className="footerList" to="/">Home</Link></li>
              <li><Link className="footerList" to="/about" >About</Link></li>
              <li><Link className="footerList" to="/contact">Contact</Link></li>

              {
                isLoggedIn?(
                  <li></li>
                ):(
                  <li><Link className="footerList" to="/login">Login</Link></li>
                )
              }
              {/* <li><Link className="footerList" to="/login">Login</Link></li> */}
            </ul>
          </div>

          <div className="footer_sec_three">
            <p className="footer_terms_and_polices">Terms & Policies</p>
            <ul>
              <li ><Link className="footerList" to="/terms-of-conditions">Terms of Conditions</Link></li>
              <li ><Link className="footerList" to="/f&q">F&Q</Link></li>
              <li ><Link className="footerList" to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer_sec_four">
            <p className="footer_get_in_touch">Get In Touch</p>
            <ul>
              <li className="footerList">0471-2525444</li>
              <li className="footerList">blogsphere@gmail.com</li>
            </ul>
          </div>
        </div>

        <hr className="footer_bottom_line"></hr>
        <p className="Footer_copyright">
          Copy right &copy; 2024.All rights received
        </p>
      </div>
    </>
  );
}

export default Footer;

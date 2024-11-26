import "./Footer.css";
import fb from "../../assets/Images/fb.png";
import insta from "../../assets/Images/insta.png";
import pinterest from "../../assets/Images/pinterest.png";
import twitter from "../../assets/Images/twitter.png";
import ytb from "../../assets/Images/ytb.png";

function Footer() {
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
              <li className="footerList">Home</li>
              <li className="footerList">About</li>
              <li className="footerList">Contact</li>
              <li className="footerList">Login</li>
            </ul>
          </div>

          <div className="footer_sec_three">
            <p className="footer_terms_and_polices">Terms & Polices</p>
            <ul>
              <li className="footerList">Terms of conditions</li>
              <li className="footerList">F&Q</li>
              <li className="footerList">Privacy Policy</li>
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

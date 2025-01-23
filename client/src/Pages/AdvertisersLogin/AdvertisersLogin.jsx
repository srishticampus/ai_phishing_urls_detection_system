import "../../Pages/AdvertisersLogin/AdvertisersLogin.css"
import LoginBackground from "../../assets/Images/Login_Background.png"
import { Link } from "react-router"

function AdvertisersLogin() {

  return (
    <div className="advertiser-login-container d-flex">
      <div className="advertiser-login-left">
        <img className="advertiser-login-image" src={LoginBackground} alt="Login Background" />
      </div>
      <div className="advertiser-login-right">
        <p className="advertiser-login-head">Login</p>
        <input type="text" className="form-control  advertiser-login-username" placeholder="Username"></input>
        <input type="password" className="form-control advertiser-login-password mt-3" placeholder="Password"></input>
        <Link className="advertiser-login-forgotpassword" to="/">Forget Password ?</Link>
<div className="d-flex justify-content-center mt-4">
<button className="btn advertiser-login-button">Login</button>
</div>
        <p className="advertiser-login-dont-have-account mt-4">Don&apos;t have an Account ? <a className="advertiser-login-dont-have-account-atag" href="/advertiser-signup">Sign up</a>  </p>
      </div>
    </div>
  )
}

export default AdvertisersLogin

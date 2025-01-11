import "../../Pages/AdvertisersForgetPassword/AdvertisersForgetPassword.css"
import forgetPbackgroundimg from "../../assets/Images/forgetP_backgroundimg.png"


function AdvertisersForgetPassword() {
  return (
    <div className="advertisers-forget-password-container">
      <div className="advertisers-forget-password-left">
          <img className="advertisers-forget-password-image" src={forgetPbackgroundimg}/>
      </div>
      <div className="advertisers-forget-password-right" >
           <p className="advertisers-forget-password-head">Forget Password?</p>
           <p className="advertisers-forget-password-para" >Enter your E-mail below to receive your password reset <br></br> instruction</p>
           <input type="email" className="form-control advertisers-forget-password-email" placeholder="E-Mail"></input>
           <div className="d-flex justify-content-center mt-4">
           <button className="btn btn-dark advertisers-forget-password-btn">Next</button>
           </div>
      </div>
    </div>
  )
}

export default AdvertisersForgetPassword

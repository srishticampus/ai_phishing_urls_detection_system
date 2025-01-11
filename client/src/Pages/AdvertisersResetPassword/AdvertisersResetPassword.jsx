import "../../Pages/AdvertisersResetPassword/AdvertisersResetPassword.css"
import resetbackground from "../../assets/Images/reset-background.png"


function AdvertisersResetPassword() {
  return (
    <div className="advertisers-reset-password-container">
        <div className="advertisers-reset-password-left">
            <img className="advertisers-reset-password-image" src={resetbackground} alt="reset background" />
        </div>
        <div className="advertisers-reset-password-right">
            <h1 className="advertisers-reset-password-head">Reset Password!</h1>
            <p className="advertisers-reset-password-para">Your new password must be different<br></br>
            from previous password.</p>
            <input type="password" placeholder="New Password" className="form-control advertisers-reset-password-newpass"></input>
            <input type="password" placeholder="Confirm Password" className="form-control advertisers-reset-password-confirmpass"></input>
            <div>
                <buton className="btn btn-dark advertisers-reset-password-btn">Confirm</buton>
            </div>
        </div>
      
    </div>
  )
}

export default AdvertisersResetPassword

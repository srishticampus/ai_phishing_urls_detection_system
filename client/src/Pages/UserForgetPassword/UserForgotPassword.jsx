import forgetP_backgroundimg from '../../assets/Images/forgetP_backgroundimg.png';
import '../../Pages/UserForgetPassword/UserForgotPassword.css'



function UserForgotPassword() {
    return (
        <div className='d-flex userfp-main'>
            <div className="userfp-left">
                <img className='userfp-img' src={forgetP_backgroundimg} alt='forgetP_backgroundimg' />
            </div>
            <div className="userfp-right">
                <p className="userfp-forgetpassword-head mb-5"> Foget Password?</p>
                <p className='userfp-forgetpassword-para mb-5'>Enter your E-mail below to receive your password reset <br/> instruction</p>
                <form>
                    <input type='email' placeholder='E-Mail' className='form-control userfp-email mb-5'></input>
                    <button className='userfp-next-button'>Next</button>
                </form>
            </div>
        </div>
    )
}

export default UserForgotPassword

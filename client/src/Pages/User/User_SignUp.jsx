import React from 'react'
import '../../assets/Styles/Pages_Styles/UserSignUp.css'
function User_SignUp() {
    return (
        <div>
            <div className="row">

                <div className='Signup_LeftSide col-sm-6'>

                </div>


                <div className='Signup_RightSide col-sm-6'>
                    <p className='Signup_RightSide_head'>Sign Up!</p>
                    <form action="/Login">
                        <div className="mb-3 mt-3">

                            <input type="text" className="form-control" id="email" placeholder="Username" name="username" />
                        </div>
                        <div class="mb-3 mt-3">

                            <input type="email" class="form-control" id="email" placeholder="E-mail" name="email" />
                        </div>
                        <div class="mb-3">

                            <input type="password" class="form-control" id="password" placeholder="Password" name="pswd" />
                        </div>
                        <div class="mb-3">

                            <input type="password" class="form-control" id="pwd" placeholder="Confirm Password" name="pswd" />
                        </div>

                        <button type="submit" class="btn btn-secondary">Sign Up</button>
                    </form>
                    <p>Already have an account ? <a href='/Login'>Login</a></p>
                </div>

            </div>

        </div>
    )
}

export default User_SignUp

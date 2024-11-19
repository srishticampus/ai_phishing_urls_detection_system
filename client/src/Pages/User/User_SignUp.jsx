import React from 'react'
import '../../assets/Styles/Pages_Styles/UserSignUp.css'
function User_SignUp() {
    return (
        <div className='d-flex'>
            <div className='Signup_LeftSide'>

            </div>
            <div className='Signup_RightSide'>
                <p className='Signup_RightSide_head'>Sign Up!</p>
                <form action="/">
                    <div class="mb-3 mt-3">

                        <input type="text" class="form-control" id="email" placeholder="Username" name="username" />
                    </div>
                    <div class="mb-3 mt-3">

                        <input type="email" class="form-control" id="email" placeholder="E-mail" name="email" />
                    </div>
                    <div class="mb-3">

                        <input type="password" class="form-control" id="pwd" placeholder="Password" name="pswd" />
                    </div>
                    <div class="mb-3">

                        <input type="password" class="form-control" id="pwd" placeholder="Confirm Password" name="pswd" />
                    </div>

                    <button type="submit" class="btn btn-secondary">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default User_SignUp

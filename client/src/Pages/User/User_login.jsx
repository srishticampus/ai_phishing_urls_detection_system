import React from 'react'
import '../../assets/Styles/Pages_Styles/UserLogin.css'
function User_login() {
  return (
    <div>
      <div className="row">
        <div className="Login_Left col-sm-6">

        </div>
        <div className="Login_Right col-sm-6">
          <p className='Login_Page_Head' >Login!</p>
          <form action='/'>
            <input type='text'placeholder='Username' className='form-control' />
            <input type='password' placeholder='Password' className='form-control'></input>
            <button type="submit" class="btn btn-secondary">login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User_login

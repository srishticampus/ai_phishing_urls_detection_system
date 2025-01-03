import "../../Pages/UserEditProfile/UserEditProfile.css"
import user_empty_profile from "../../assets/Images/user_empty_profile.png"
function UserEditProfile() {
  return (
    <div>
      <div className="user-edit-profile-section-one">
        <p className="user-edit-profile-head">Profile</p>
        <img className="user-view-empty-profile mt-3" src={user_empty_profile} />
        <p className="user-edit-profile-name">Name</p>
      </div>
      <div className="user-edit-profile-section-two">
        <div>
          <div className="row">
            <div className="col-sm-5 user-edit-profile-section-name">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="col-sm-5 user-profile-section-phonenumber">
              <input type="text" className="form-control" placeholder="Phone number" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 user-profile-section-email">
              <input type="email" className="form-control" placeholder="E-Mail" />
            </div>
            <div className="col-sm-5 user-profile-section-gender">
              <div className="mt-3">
                <label className="me-5 user-profile-gender">Gender</label>
                <label className="me-1 user-profile-gender-male">Male</label>
                <input className="me-5" type="radio" name="gender" />
                <label className="me-1 user-profile-gender-female">Female</label>
                <input type="radio" name="gender" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-dark mt-5 user-edit-profile-cancel-button">Cancel</button>
        <button className="btn ms-3 btn-dark mt-5 user-profile-done-button">Done</button>
      </div>
    </div>
  )
}

export default UserEditProfile

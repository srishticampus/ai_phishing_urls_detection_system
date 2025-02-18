import "../../Pages/UserViewProfile/UserViewProfile.css"
import user_empty_profile from "../../assets/Images/user_empty_profile.png"
import { Link } from "react-router-dom";


function UserViewProfile() {
    return (
        <div>
            <div className="user-view-profile-section-one">
                <p className="user-view-profile-head">Profile</p>
                <img className="user-view-empty-profile mt-3" src={user_empty_profile} />
                <p className="user-view-profile-name">Name</p>
            </div>
            <div className="user-view-profile-section-two">
                <div className="card user-profile-section-two-card">
                    <div className="card-body user-profile-section-two-card-body">
                        <p> <span className="user-view-profile-data">Phone number :</span> 12345678 </p>
                        <p><span className="user-view-profile-data">Email :</span> user@gmail.com </p>
                        <p><span className="user-view-profile-data">Gendr :</span> Male</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
                <div className="user-view-profile-editbutton">
                    <button className="btn user-view-profile-btn-color"><Link className="user-edit-profile-button-text" to="/user-edit-profile">Edit Profile</Link></button>
                </div>
            </div>
        </div>
    )
}

export default UserViewProfile

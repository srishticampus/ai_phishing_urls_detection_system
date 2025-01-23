import "../../Pages/AdvertiserViewProfile/AdvertiserViewProfile.css"
import useremptyprofile from "../../assets/Images/user_empty_profile.png"


function AdvertiserViewProfile() {
    return (
        <div className="advertiser-view-profile-container">
            <div>
                <img className="advertiser-view-profile-img" src={useremptyprofile} />
                <p className="advertiser-view-profile-name">Ashok N K</p>
            </div>


            <div className="card advertiser-view-profile-card">
                <div className="card-body">
                    <p className="advertiser-view-profile-info">Business Name: <span className="advertiser-view-profile-data">AD Company</span></p>
                    <p className="advertiser-view-profile-info">Business Type: <span className="advertiser-view-profile-data" >Adventures</span></p>
                    <p className="advertiser-view-profile-info">Email : <span className="advertiser-view-profile-data" >ashok@gmail.com</span></p>
                    <p className="advertiser-view-profile-info">Contact Number : <span className="advertiser-view-profile-data" >123456789</span></p>
                    <p className="advertiser-view-profile-info">Address : <span className="advertiser-view-profile-data" >abc city</span></p>
                </div>
            </div>
            <button className="btn advertiser-view-profile-edit-profile">Edit Profile</button>
        </div>
    )
}

export default AdvertiserViewProfile

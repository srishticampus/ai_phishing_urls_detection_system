import "../../Pages/AdvertiserEditProfile/AdvertiserEditProfile.css"
import profimg from "../../assets/Images/user_empty_profile.png"


function AdvertiserEditProfile() {
    return (
        <div className="advertiser-edit-profile-wrapper">
            <div className="advertiser-edit-profile-img-div">
                <img className="advertiser-edit-profile-img" src={profimg}></img>
                <p className="advertiser-edit-profile-head">Ashok NK</p>
            </div>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Name"></input>
                </div>
                <div className="col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Address"></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Contact Number"></input>
                </div>
                <div className="col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Business Name"></input>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mt-3">
                    <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="col-sm-6 mt-3">
                    <input type="text" className="form-control" placeholder="Business Type"></input>
                </div>
            </div>
            <div className="d-flex mt-4">
                <button className="btn btn-outline-dark advertiser-edit-profile-btn-outline">Cancel</button>
                <button className="btn btn-dark advertiser-edit-profile-btn ms-3">Done</button>
            </div>
        </div>
    )
}

export default AdvertiserEditProfile

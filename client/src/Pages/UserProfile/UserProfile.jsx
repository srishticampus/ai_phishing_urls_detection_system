import "../../Pages/UserProfile/UserProfile.css";
import user_empty_profile from "../../assets/Images/user_empty_profile.png";
import { userProfile } from "../../Services/apiService";
import { useState, useEffect } from "react";

function UserProfile() {

  const [profileData,setProfileData] = useState({
    name: "", 
    email: "",
    phoneNumber: "",
    gender:"",
    image : "",
  });

  const [error , setError] = useState(null);
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      const response = await userProfile();
      console.log(response.data)
      if(response.success){
        console.log(response.data)
        setProfileData({
          ...profileData,
          name: response.data.name || "",
          email: response.data.email || "",
          phoneNumber: response.data.phoneNumber || "",
          gender: response.data.gender || "",
          image: response.data.image || user_empty_profile,
        });
      }else {
        setError(response.errors.message || "Failed to load Profile data");
      }
    };
    fetchUserProfile();
  },[]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div className="user-profile-section-one">
        <p className="user-profile-head">Profile</p>
        <img className="user_empty_profile mt-3" src={profileData.image} alt="profileImage"/>
        <button className="btn mt-3">+ Add Image</button>
      </div>
      <div className="user-profile-section-two">
        <div>
          <div className="row">
            <div className="col-sm-5 user-profile-section-name">
              <input type="text" 
              className="form-control"
               placeholder="Name" 
               name="name"
               value={profileData.name}
               onChange={handleInputChange}
               />
            </div>
            <div className="col-sm-5 user-profile-section-phonenumber">
              <input type="text"
               className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleInputChange}
                />
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
        <button className="btn btn-dark mt-5 user-profile-next-button">Next</button>
      </div>
    </div>
  );
}

export default UserProfile;

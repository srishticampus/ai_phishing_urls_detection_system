import "../../Pages/UserProfile/UserProfile.css";
import user_empty_profile from "../../assets/Images/user_empty_profile.png";
import {
  userProfile,
  addUserProfile,
  updateUserProfile,
} from "../../Services/apiService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: user_empty_profile, 
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: "",
    form: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userProfile();
        if (response.success) {
    
          setProfileData({
            firstName: response.data.user.first_name || "",
            lastName: response.data.user.last_name || "",
            phoneNumber: response.data.phone_number || "",
            gender: response.data.gender || "",
            image: response.data.photo || user_empty_profile,
          });
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            form: response.errors.message || "Failed to load profile data",
          }));
        }
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Error fetching profile data",
          error,
        }));
      }
    };
    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      setProfileData((prevState) => ({
        ...prevState,
        image: URL.createObjectURL(files[0]),
        photo: files[0], 
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("first_name", profileData.firstName);
    formData.append("last_name", profileData.lastName);
    formData.append("phone_number", profileData.phoneNumber);
    formData.append("gender", profileData.gender);

   
    if (profileData.photo instanceof File) {
      formData.append("photo", profileData.photo);
    }

    try {
      let response;
      if (
        profileData.firstName ||
        profileData.lastName ||
        profileData.phoneNumber ||
        profileData.gender
      ) {
       
        response = await updateUserProfile(formData);
      } else {
       
        response = await addUserProfile(formData);
      }

      if (response.success) {
        console.log("Profile updated successfully!");
        setLoading(false);
        navigate("/user-area-of-interest"); 
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: response.errors.message || "Failed to update profile",
        }));
        setLoading(false);
      }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "An error occurred while submitting the form.",
        error,
      }));
      setLoading(false);
    }
  };

  return (
    <div className="user-addprofile-container">
      <div className="user-profile-section-one">
        <p className="user-profile-head">Profile</p>

        <img
          className="user_empty_profile mt-3"
          src={profileData.image}
          alt="profileImage"
        />
        <button className="btn mt-3">
          <input type="file" name="image" onChange={handleImageChange} />+ Add
          Image
        </button>
      </div>

      <div className="user-profile-section-two">
        <form onSubmit={handleSubmit}>
          <div className="row mb-5">
            <div className="col-sm-5 user-profile-section-firstname">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-sm-5 user-profile-section-lastname">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-5 user-profile-section-phonenumber">
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>

            <div className="col-sm-5 user-profile-section-gender ">
              <div className="mt-3">
                <label className="me-5 user-profile-gender">Gender</label>
                <label className="me-1 user-profile-gender-male">Male</label>
                <input
                  className="me-5"
                  type="radio"
                  name="gender"
                  value="M"
                  checked={profileData.gender === "M"}
                  onChange={handleInputChange}
                />

                <label className="me-1 user-profile-gender-female">
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  checked={profileData.gender === "F"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-dark mt-5 user-profile-next-button"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : profileData.firstName ||
                  profileData.lastName ||
                  profileData.phoneNumber ||
                  profileData.gender
                ? "Update"
                : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;

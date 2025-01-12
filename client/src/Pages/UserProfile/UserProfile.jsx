import "../../Pages/UserProfile/UserProfile.css";
import user_empty_profile from "../../assets/Images/user_empty_profile.png";
import { userProfile, addUserProfile } from "../../Services/apiService";
import { userProfile, addUserProfile } from "../../Services/apiService";
import { useState, useEffect } from "react";

function UserProfile() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: "",
    gender: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: "",
    form: "", 
  });
  const [loading, setLoading] = useState(false); // For tracking loading state

  // Fetch the user profile on component mount
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userProfile(); // Fetching user profile data
        if (response.success) {
            console.log(response.data)
          setProfileData({
            firstName: response.data.user.first_name || "",
            lastName: response.data.user.last_name|| "",
            phoneNumber: response.data.phone_number || "",
            gender: response.data.gender || "",
            image: response.data.photo || user_empty_profile, // Fallback to empty profile if no image
          });

   
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            form: response.errors.message || "Failed to load profile data",errors,
          }));
        }
      } catch (errors) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Error fetching profile data",errors,
        }));
      }
    };
    fetchUserProfile();
  }, []);
  }, []);

  // Handle input change for form fields
  // Handle input change for form fields
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

  // Handle image selection
  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      setProfileData((prevState) => ({
        ...prevState,
        image: URL.createObjectURL(files[0]), // Temporarily display the selected image
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("firstName", profileData.first_name);
    formData.append("lastName", profileData.last_name);

    formData.append("phoneNumber", profileData.phone_number);
    formData.append("gender", profileData.gender);

  

    // Check if image exists and append the file to formData
    if (profileData.image && profileData.photo instanceof File) {
      formData.append("image", profileData.photo); // Send the actual file
    }

    try {
      const response = await addUserProfile(formData); // Assuming this function is used for submitting the form
      if (response.success) {
        console.log("Profile updated successfully!");
      
        setLoading(false);
      } else {
        setErrors(response.errors.message || "Failed to update profile");
        setLoading(false);
      }
    } catch (error) {
      setErrors("An error occurred while submitting the form.",error);
      setLoading(false);
    }
  };

  return (
    <div className="user-addprofile-container">
      {/* {error && <p className="error-message">{error}</p>} Display the error message here */}

    <div className="user-addprofile-container">
      {/* {error && <p className="error-message">{error}</p>} Display the error message here */}

      <div className="user-profile-section-one">
        <p className="user-profile-head">Profile</p>
        <img className="user_empty_profile mt-3" src={profileData.image} alt="profileImage" />
        <button className="btn mt-3">
          <input type="file" name="image" onChange={handleImageChange} />
          + Add Image
        </button>
        <img className="user_empty_profile mt-3" src={profileData.image} alt="profileImage" />
        <button className="btn mt-3">
          <input type="file" name="image" onChange={handleImageChange} />
          + Add Image
        </button>
      </div>
      {/* {error && <p className="error-message">{error}</p>} */}
      {/* {error && <p className="error-message">{error}</p>} */}
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
          </div>
          <div className="row">
            <div className="col-sm-5 user-profile-section-phonenumber">
              <input
                type="text"
                className="form-control"
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleInputChange}
              />
              />
            </div>
   
            <div className="col-sm-5 user-profile-section-gender ">
   
            <div className="col-sm-5 user-profile-section-gender ">
              <div className="mt-3">
                <label className="me-5 user-profile-gender">Gender</label>
                <label className="me-1 user-profile-gender-male">Male</label>
                <input
                  className="me-5"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={profileData.gender === "M"}
                  onChange={handleInputChange}
                />
                <input
                  className="me-5"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={profileData.gender === "M"}
                  onChange={handleInputChange}
                />
                <label className="me-1 user-profile-gender-female">Female</label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={profileData.gender === "F"}
                  onChange={handleInputChange}
                />
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={profileData.gender === "F"}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark mt-5 user-profile-next-button" disabled={loading}>
              {loading ? "Submitting..." : "Next"}
            </button>
          </div>
        </form>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-dark mt-5 user-profile-next-button" disabled={loading}>
              {loading ? "Submitting..." : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;

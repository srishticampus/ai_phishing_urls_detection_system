import "../../Pages/UserProfile/UserProfile.css";
import user_empty_profile from "../../assets/Images/user_empty_profile.png";
import {
  userProfile,
  addUserProfile,
  updateUserProfile,
} from "../../Services/apiService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS

function UserProfile() {
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: user_empty_profile,
  });

  const [hasProfile, setHasProfile] = useState(false); // ✅ Track if profile exists in backend
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userProfile();

        if (response.success && response.data?.user?.first_name) {
          setProfileData({
            firstName: response.data.user.first_name || "",
            lastName: response.data.user.last_name || "",
            phoneNumber: response.data.phone_number || "",
            gender: response.data.gender || "",
            image: response.data.photo || user_empty_profile,
          });
          setHasProfile(true);
        } else {
          setHasProfile(false);
        }
      } catch (error) {
        toast.error("Error fetching profile data.");
        setHasProfile(false);
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
  };

  const handleImageChange = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      setProfileData((prevState) => ({
        ...prevState,
        image: URL.createObjectURL(files[0]),
        photo: files[0], // Store actual file for submission
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
      if (hasProfile) {
        response = await updateUserProfile(formData); // ✅ Update if profile exists
      } else {
        response = await addUserProfile(formData); // ✅ Add if no profile exists
      }

      if (response.success) {
        toast.success(`Profile ${hasProfile ? "updated" : "created"} successfully! 🎉`);
        setTimeout(() => navigate("/user-area-of-interest"), 2000); // ✅ Redirect after 2 sec
      } else {
        toast.error(response.errors?.message || "Failed to save profile.");
      }
    } catch (error) {
      toast.error("An error occurred while saving the profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-addprofile-container">
      <div className="user-profile-section-one">
        <p className="user-profile-head">Profile</p>

        <img className="user_empty_profile mt-3" src={profileData.image} alt="profileImage" />
        <button className="btn mt-3">
          <input type="file" name="image" onChange={handleImageChange} />+ Add Image
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

            <div className="col-sm-5 user-profile-section-gender">
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

                <label className="me-1 user-profile-gender-female">Female</label>
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
              {loading ? "Submitting..." : hasProfile ? "Update Profile" : "Create Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserProfile;

import "../../Pages/UserViewProfile/UserViewProfile.css";
import user_empty_profile from "../../assets/Images/user_empty_profile.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userProfile } from "../../Services/apiService";
import { toast } from "react-toastify"; // ✅ Import Toastify
const baseUrl = import.meta.env.VITE_API_URL;

function UserViewProfile() {
    // console.log(baseUrl);
    
    const [profileData, setProfileData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        image: user_empty_profile,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await userProfile();
                console.log(response);
                
                if (response.success) {
                    
                    setProfileData({
                        firstName: response.data.user.first_name || "",
                        lastName: response.data.user.last_name || "",
                        phoneNumber: response.data.phone_number || "N/A",
                        email: response.data.user.email || "N/A",
                        gender: response.data.gender ? (response.data.gender === "M" ? "Male" : "Female") : "N/A",
                        image: response.data.photo || user_empty_profile,
                    });
                } else {
                    throw new Error(response.errors?.message || "Failed to fetch profile data.");
                }
            } catch (error) {
                setError(error.message);
                toast.error("Error fetching profile data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);
    console.log(baseUrl);
    
    console.log(profileData.image);
    

    if (loading) {
        return <p className="text-center mt-5">Loading profile...</p>;
    }

    if (error) {
        return <p className="text-center mt-5 text-danger">{error}</p>;
    }
    console.log(`${baseUrl}/${profileData.image}`);

    return (
        <div>
            <div className="user-view-profile-section-one">
                <p className="user-view-profile-head">Profile</p>
                <img className="user-view-empty-profile mt-3"
              
                src={profileData.image}     
                          alt="User Profile" />
                <p className="user-view-profile-name">{profileData.firstName} {profileData.lastName}</p>
            </div>
            <div className="user-view-profile-section-two">
                <div className="card user-profile-section-two-card">
                    <div className="card-body user-profile-section-two-card-body">
                        <p><span className="user-view-profile-data">Phone number :</span> {profileData.phoneNumber}</p>
                        <p><span className="user-view-profile-data">Email :</span> {profileData.email}</p>
                        <p><span className="user-view-profile-data">Gender :</span> {profileData.gender}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-3 mb-5">
                <div className="user-view-profile-editbutton">
                    <button className="btn user-view-profile-btn-color">
                        <Link className="user-edit-profile-button-text" to="/user-profile">Edit Profile</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UserViewProfile;

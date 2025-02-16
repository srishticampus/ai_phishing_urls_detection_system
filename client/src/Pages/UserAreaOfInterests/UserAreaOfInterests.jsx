import { getInterests, userAddInterest } from "../../Services/apiService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify"; // ✅ Import Toastify
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify CSS
import "../../Pages/UserAreaOfInterests/UserAreaOfInterests.css";

function UserAreaOfInterests() {
  const [interests, setInterests] = useState([]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const response = await getInterests();
        console.log("API response:", response);
        if (response.success && Array.isArray(response.data)) {
          setInterests(response.data);
        } else {
          toast.error("Failed to load interests.");
          console.error("Failed to load interests:", response.errors);
        }
      } catch (error) {
        toast.error("Error fetching interests.");
        console.error("Error fetching interests:", error);
      }
    };

    fetchInterests();
  }, []);

  const handleCardClick = (interestId) => {
    setSelectedInterests((prevSelectedInterests) =>
      prevSelectedInterests.includes(interestId)
        ? prevSelectedInterests.filter((id) => id !== interestId)
        : [...prevSelectedInterests, interestId]
    );
  };

  const handleConfirm = async () => {
    if (selectedInterests.length === 0) {
      toast.warning("Please select at least one interest.");
      return;
    }

    const formData = { interest_ids: selectedInterests };

    try {
      const response = await userAddInterest(formData);
      if (response.success) {
        toast.success("Interests added successfully! 🎉");
        setTimeout(() => navigate("/user-homepage"), 2000); // ✅ Redirect after 2 sec
      } else {
        toast.error("Failed to add interests.");
        console.error("❌ Failed to add interests:", response.errors);
      }
    } catch (error) {
      toast.error("Error adding interests.");
      console.error("🚨 Error adding interests:", error);
    }
  };

  return (
    <div>
      <p className="user-area-of-interests-head">Area of Interests</p>

      <div className="row user-area-of-interest-center-row mb-5">
        {interests.map((interest) => (
          <div key={interest.id} className="col-lg-2 col-md-4 col-sm-12 mb-3">
            <div
              className={`card user-area-of-interests-card-size ${
                selectedInterests.includes(interest.id) ? "selected" : ""
              }`}
              onClick={() => handleCardClick(interest.id)}
            >
              <div className="user-area-of-interests-content">
                <img
                  className="user-area-of-interests-img-size"
                  src={`${baseUrl}${interest.icon}`}
                  alt={interest.name}
                  width="50"
                  height="50"
                />
                <div>
                  <p className="user-area-of-interests-footer-content">
                    {interest.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <button
          className="btn btn-dark user-area-of-interests-btn"
          onClick={handleConfirm}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default UserAreaOfInterests;

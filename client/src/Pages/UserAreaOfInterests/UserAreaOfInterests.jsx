import { getInterests } from "../../Services/apiService";
import { useEffect, useState } from 'react';
import "../../Pages/UserAreaOfInterests/UserAreaOfInterests.css";

function UserAreaOfInterests() {
  const [interests, setInterests] = useState([]);
  const [selectedInterest, setSelectedInterest] = useState(null); // Track the selected interest

  const baseUrl = import.meta.env.VITE_API_URL;  // Use environment variable for base URL

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const data = await getInterests();
        console.log('API response:', data);

        if (data && Array.isArray(data.data)) {
          setInterests(data.data);
        } 
      } catch (error) {
        console.error('Error fetching interests:', error);
      }
    };

    fetchInterests();
  }, []);

  const handleCardClick = (interestId) => {
    setSelectedInterest(interestId); 
  };

  return (
    <div>
      <p className="user-area-of-interests-head">Area of Interests</p>
    
      {/* First Row: Interests Cards */}
      <div className="row user-area-of-interest-center-row mb-5">
        {interests.slice(0, 5).map((interest) => (
          <div key={interest.id} className="col-sm-2">
            <div 
              className={`card user-area-of-interests-card-size ${selectedInterest === interest.id ? 'selected' : ''}`} 
              onClick={() => handleCardClick(interest.id)} 
            >
              <div className="user-area-of-interests-content">
                {/* Using the interest.icon field for the image source */}
                <img 
                  className="user-area-of-interests-img-size" 
                  src={`${baseUrl}${interest.icon}`}  // Assuming interest.icon contains the image path
                  alt={interest.name} 
                  width="50" 
                  height="50" 
                />
                <div>
                  <p className="user-area-of-interests-footer-content">{interest.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row: Interests Cards */}
      <div className="row user-area-of-interest-center-row">
        {interests.slice(5, 10).map((interest) => (
          <div key={interest.id} className="col-sm-2">
            <div 
              className={`card user-area-of-interests-card-size ${selectedInterest === interest.id ? 'selected' : ''}`} 
              onClick={() => handleCardClick(interest.id)} // Add click event handler
            >
              <div className="user-area-of-interests-content">
                {/* Using the interest.icon field for the image source */}
                <img 
                  className="user-area-of-interests-img-size" 
                  src={`${baseUrl}${interest.icon}`}  // Assuming interest.icon contains the image path
                  alt={interest.name} 
                  width="50" 
                  height="50" 
                />
                <div>
                  <p className="user-area-of-interests-footer-content">{interest.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5 mb-5">
        <button className="btn btn-dark user-area-of-interests-btn">
          Confirm
        </button>
      </div>
    </div>
  );
}

export default UserAreaOfInterests;

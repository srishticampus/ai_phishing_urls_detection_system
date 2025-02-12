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









//old code to show all cards with interest


// import { useState } from "react";
// import "../../Pages/UserAreaOfInterests/UserAreaOfInterests.css";
// import { userAddInterest } from "../../Services/apiService";
// import in1 from "../../assets/Images/in1.png";
// import in2 from "../../assets/Images/in2.png";
// import in3 from "../../assets/Images/in3.png";
// import in4 from "../../assets/Images/in4.png";
// import in5 from "../../assets/Images/in5.png";
// import in6 from "../../assets/Images/in6.png";
// import in7 from "../../assets/Images/in7.png";
// import in8 from "../../assets/Images/in8.png";
// import in9 from "../../assets/Images/in9.png";
// import in10 from "../../assets/Images/in10.png";

// function UserAreaOfInterests() {
//   const [selectedInterest, setSelectedInterest] = useState(null);  // Track only one selected interest

//   const handleCardClick = (interest) => {
//     setSelectedInterest(prevInterest => (prevInterest === interest ? null : interest));
//   };

//   const handleConfirm = async () => {
//     if (!selectedInterest) {
//       alert("Please select an interest first.");
//       return;
//     }
    
//     const formData = {
//       interests: [selectedInterest],  
//     };
//     console.log("Sending API request with data:", formData);
//     try {
//       await userAddInterest(formData);
//       alert("Interest added successfully!");
//     } catch (error) {
//         console.error(error);
//       alert("There was an error adding your interest.");
//     }
//   };

//   return (
//     <div>
//       <p className="user-area-of-interests-head">Area of Interests</p>

//       {/* First Row: 5 Cards */}
//       <div className="row user-area-of-interest-center-row mb-5">
//         {[
//           { img: in1, label: "Personal Development" },
//           { img: in2, label: "Health & Wellness" },
//           { img: in3, label: "Technology" },
//           { img: in4, label: "Travel & Adventure" },
//           { img: in5, label: "Finance & Investing" },
//         ].map((interest, index) => (
//           <div key={index} className="col-sm-2">
//             <div
//               className={`card user-area-of-interests-card-size ${selectedInterest === interest.label ? "selected" : ""}`}
//               onClick={() => handleCardClick(interest.label)}
//             >
//               <div className="user-area-of-interests-content">
//                 <img className="user-area-of-interests-img-size" src={interest.img} alt={interest.label} />
//                 <div>
//                   <p className="user-area-of-interests-footer-content">{interest.label}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Second Row: 5 Cards */}
//       <div className="row user-area-of-interest-center-row">
//         {[
//           { img: in6, label: "Food & Cooking" },
//           { img: in7, label: "Family Life" },
//           { img: in8, label: "LifeStyle" },
//           { img: in9, label: "Fashion" },
//           { img: in10, label: "Career & Business" }
//         ].map((interest, index) => (
//           <div key={index} className="col-sm-2">
//             <div
//               className={`card user-area-of-interests-card-size ${selectedInterest === interest.label ? "selected" : ""}`}
//               onClick={() => handleCardClick(interest.label)}
//             >
//               <div className="user-area-of-interests-content">
//                 <img className="user-area-of-interests-img-size" src={interest.img} alt={interest.label} />
//                 <div>
//                   <p className="user-area-of-interests-footer-content">{interest.label}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="d-flex justify-content-center mt-5 mb-5">
//         <button className="btn btn-dark user-area-of-interests-btn" onClick={handleConfirm}>
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserAreaOfInterests;

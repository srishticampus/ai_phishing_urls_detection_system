import { useEffect, useState } from "react";
import { advertisersViewAdvertisement } from "../../Services/apiService"; 
import { useNavigate } from "react-router-dom"; // Import the hook
import "../AdvertisersViewAdvertisements/AdvertisersViewAdvertisement.css";
import advimg from "../../assets/Images/advertisement.png"; 
const baseUrl = import.meta.env.VITE_API_URL;

function AdvertisersViewAdvertisements() {
  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const formData = {};
        const response = await advertisersViewAdvertisement(formData);
        setAdvertisements(response.data); 
        console.log(response.data);
      } catch (err) {
        setError("Failed to load advertisements.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisements();
  }, []);

  if (loading) {
    return <p>Loading advertisements...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Handle card click and navigate to the details page
  const handleCardClick = (adId) => {
    navigate(`/advertisers-view-advertisement-details/${adId}`); // Navigate with the adId as a route parameter
  };

  return (
    <div className="advertisers-view-advertisements-container">
      <p className="advertisers-view-advertisements-head">View Advertisements</p>
      <div className="advertisers-view-advertisements-card-container">
        <div className="row">
          {advertisements.length > 0 ? (
            advertisements.map((ad, index) => (
              <div
                className="card col-sm-4 advertisers-view-advertisements-cards"
                key={index}
                onClick={() => handleCardClick(ad.id)} // Pass the ad's ID
              >
                <img
                  src={`${baseUrl}${ad.ad_image}` || advimg}
                  alt="Advertisement"
                  style={{ cursor: "pointer" }} // Makes the image appear clickable
                />
              </div>
            ))
          ) : (
            <p>No advertisements available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdvertisersViewAdvertisements;






// import { useEffect, useState } from "react";
// import { advertisersViewAdvertisement } from "../../Services/apiService"; 
// import "../AdvertisersViewAdvertisements/AdvertisersViewAdvertisement.css";
// import advimg from "../../assets/Images/advertisement.png"; 
// const baseUrl = import.meta.env.VITE_API_URL;


// function AdvertisersViewAdvertisements() {
//   const [advertisements, setAdvertisements] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAdvertisements = async () => {
//       try {
//         const formData = {};
//         const response = await advertisersViewAdvertisement(formData);
//         setAdvertisements(response.data); 
//         console.log(response.data);
//       } catch (err) {
//         setError("Failed to load advertisements.", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAdvertisements();
//   }, []);

//   if (loading) {
//     return <p>Loading advertisements...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   // Handle click event for each advertisement
//   const handleCardClick = (adId) => {
//     // For example, redirect to a detailed page or open a modal
//     // You can use routing like react-router-dom for navigation
//     console.log("Card clicked, Ad ID:", adId);
//     // You can navigate to another page like: navigate(`/advertisement/${adId}`);
//   };

//   return (
//     <div className="advertisers-view-advertisements-container">
//       <p className="advertisers-view-advertisements-head">View Advertisements</p>
//       <div className="advertisers-view-advertisements-card-container">
//         <div className="row">
//           {advertisements.length > 0 ? (
//             advertisements.map((ad, index) => (
//               <div
//                 className="card col-sm-4 advertisers-view-advertisements-cards"
//                 key={index}
//                 onClick={() => handleCardClick(ad.id)} // Pass the ad's ID for example
//               >
//                 {/* Use the actual image from the API or fallback to the default */}
//                 <img
//                   src={`${baseUrl}${ad.ad_image}` || advimg}
//                   alt="Advertisement"
//                   style={{ cursor: "pointer" }} // Makes the image appear clickable
//                 />
//               </div>
//             ))
//           ) : (
//             <p>No advertisements available.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdvertisersViewAdvertisements;

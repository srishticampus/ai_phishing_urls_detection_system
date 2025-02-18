import  { useEffect, useState } from "react";
import { advertisersViewAdvertisement } from "../../Services/apiService";// Adjust the path to where this function is located
import "../AdvertisersViewAdvertisements/AdvertisersViewAdvertisement.css";
import advimg from "../../assets/Images/advertisement.png"; // Default image in case the API doesn't return one
const baseUrl = import.meta.env.VITE_API_URL;



function AdvertisersViewAdvertisements() {

  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const formData = {};
        const response = await advertisersViewAdvertisement(formData);
        setAdvertisements(response.data); 
        console.log(response.data)
      } catch (err) {
        setError("Failed to load advertisements.",err);
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

  return (
    <div className="advertisers-view-advertisements-container">
      <p className="advertisers-view-advertisements-head">View Advertisements</p>
      <div className="advertisers-view-advertisements-card-container">
        <div className="row">
          {advertisements.length > 0 ? (
            advertisements.map((ad, index) => (
              <div className="card col-sm-4 advertisers-view-advertisements-cards" key={index}>
                {/* Use the actual image from the API or fallback to the default */}
                <img src={`${baseUrl}${ad.ad_image}`|| advimg} alt="Advertisement" />
                {/* You can display more information like the title if available */}
                {/* <p>{ad.title || "Advertisement"}</p> */}
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

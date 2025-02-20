import { useState, useEffect } from "react";
import { adminViewAdvertisements } from "../../Services/apiService"; // Make sure this path is correct
import "../../Pages/AdminViewAdvertisement/AdminViewAdvertisement.css";
import cardimg from "../../assets/Images/advertisement.png";

function AdminViewAdvertisement() {
  // State to hold advertisement data
  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_API_URL;

  // Fetch advertisements on component mount
  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await adminViewAdvertisements();
        console.log(response);
        setAdvertisements(response.data);
        console.log(response.data); // Assuming response.data contains the list of advertisements
        setLoading(false);
      } catch (err) {
        setError("Failed to load advertisements", err);
        setLoading(false);
      }
    };

    fetchAdvertisements();
  }, []);

  // Conditional rendering while loading or error
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="admin-view-advertisement-container">
      <div className="ms-2">
        <p className="admin-view-advertisement">Advertisements</p>
      </div>
      <div className="admin-view-advertisement-center-row">
        <div className="row">
          {/* Render each advertisement dynamically */}
          {advertisements.length > 0 ? (
            advertisements.map((ad, index) => (
              <div
                className="card col-sm-4 admin-view-advertisement-card-size"
                key={index}
              >
                {/* Assuming 'ad.image' contains the image URL, use 'cardimg' as fallback */}
                <img
                  src={`${baseUrl}${ad.ad_image}` || cardimg}
                  alt={`Advertisement ${index + 1}`}
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

export default AdminViewAdvertisement;
 
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { advertisersViewAdvertisementDetails } from "../../Services/apiService";
import advimg from "../../assets/Images/advertisement.png";
import "../AdvertisersViewAdvertisementDetails/AdvertisersViewAdvertisementDetails.css";

const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"; // Ensure baseUrl is set correctly

function AdvertisersViewAdvertisementDetails() {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvertisementDetails = async () => {
      try {
        const data = await advertisersViewAdvertisementDetails(id); // Expect data directly
        console.log("Fetched Advertisement Details:", data); // Log the fetched data
        setAdvertisement(data);
      } catch (err) {
        setError("Failed to load advertisement details.");
        console.error(err); // Log the error for troubleshooting
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisementDetails();
  }, [id]);

  if (loading) {
    return <p>Loading advertisement details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Construct the image URL correctly
  const imageUrl =
    advertisement?.ad_image
      ? `${baseUrl}${advertisement.ad_image}`
      : advimg;

  return (
    <div className="advertisers-view-advertisement-details-container">
      <p className="advertisers-view-advertisement-details-head">View Advertisements Details</p>
      <div className="advertisers-view-advertisement-details-card">
        <div className="row">
          <div className="card col-sm-4 advertisers-view-advertisement-details-cards">
            <img src={imageUrl} alt="Advertisement" />
          </div>
          <div className="col-sm-8">
            <p className="advertisers-view-advertisement-details-parahead">
              {advertisement?.title}
            </p>
            {/* <p className="advertisers-view-advertisement-details-para">
              {advertisement?.description || "No description available"}
            </p> */}
            <p className="advertisers-view-advertisement-details-para">
              {advertisement?.start_date} -- {advertisement?.end_date}
            </p>
            <a href={advertisement?.link}>{advertisement?.link}</a>
            <div className="mt-5">
              <button className="btn btn-outline-dark w-25 me-4">Delete</button>

              <Link to={`/advertisers-edit-advertisement/${advertisement.id}`}>
                <button className="btn btn-dark w-25">Edit</button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersViewAdvertisementDetails;

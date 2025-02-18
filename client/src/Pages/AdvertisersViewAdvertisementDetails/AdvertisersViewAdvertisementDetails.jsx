import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { advertisersViewAdvertisementDetails, advertisersDeleteAdvertisement } from "../../Services/apiService";
import advimg from "../../assets/Images/advertisement.png";
import "../AdvertisersViewAdvertisementDetails/AdvertisersViewAdvertisementDetails.css";

const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function AdvertisersViewAdvertisementDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [advertisement, setAdvertisement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal visibility state

  useEffect(() => {
    const fetchAdvertisementDetails = async () => {
      try {
        const data = await advertisersViewAdvertisementDetails(id);
        setAdvertisement(data);
      } catch (err) {
        setError("Failed to load advertisement details.",err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisementDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      await advertisersDeleteAdvertisement(id);
      setShowModal(false); // Close the modal on success
      navigate("/advertisers-dashboard"); // Navigate to the dashboard after successful deletion
    } catch (err) {
      console.error(err);
      setError("Failed to delete advertisement.");
    }
  };

  const handleModalClose = () => {
    setShowModal(false); // Close the modal if user cancels
  };

  if (loading) {
    return <p>Loading advertisement details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const imageUrl = advertisement?.ad_image
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
            <p className="advertisers-view-advertisement-details-para">
              {advertisement?.start_date} -- {advertisement?.end_date}
            </p>
            <a href={advertisement?.link}>{advertisement?.link}</a>
            <div className="mt-5">
              <button onClick={() => setShowModal(true)} className="btn btn-outline-dark w-25 me-4">
                Delete
              </button>
              <Link to={`/advertisers-edit-advertisement/${advertisement.id}`}>
                <button className="btn btn-dark w-25">Edit</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal for Delete Confirmation */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        tabIndex="-1"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none" }} // Use inline style for visibility
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Confirm Deletion</h5>
              <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete this advertisement?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleModalClose}>
                No
              </button>
              <button type="button" className="btn btn-danger" onClick={handleDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Adding backdrop for modal */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

export default AdvertisersViewAdvertisementDetails;

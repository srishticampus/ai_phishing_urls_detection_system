import { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";
import { advertisersViewAdvertisementDetails, advertisersEditAdvertisement } from "../../Services/apiService";
import "../../Pages/AdvertisersEditAdvertisements/AdvertisersEditAdvertisements.css";
import { format } from 'date-fns';

const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function AdvertisersEditAdvertisements() {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    start_date: "",
    end_date: "",
    ad_image: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdvertisementDetails = async () => {
      try {
        const data = await advertisersViewAdvertisementDetails(id);
        setAdvertisement(data);
        setFormData({
          title: data.title,
          link: data.link,
          start_date: data.start_date,
          end_date: data.end_date,
          ad_image: data.ad_image,
        });
      } catch (err) {
        setError("Failed to load advertisement details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdvertisementDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        ad_image: file,
      }));
    }
  };

  const handleUpdateClick = async () => {
    const formattedStartDate = format(new Date(formData.start_date), 'dd-MM-yyyy');
    const formattedEndDate = format(new Date(formData.end_date), 'dd-MM-yyyy');
  
    const form = new FormData();
    form.append("title", formData.title);
    form.append("link", formData.link);
    form.append("start_date", formattedStartDate);
    form.append("end_date", formattedEndDate);
  
    if (formData.ad_image) {
      form.append("ad_image", formData.ad_image);
    }
  
    try {
      const updatedData = await advertisersEditAdvertisement(id, form);
      console.log("Updated advertisement:", updatedData);
    } catch (err) {
      setError("Failed to update advertisement details.");
      console.error(err);
    }
  };
  
  // const handleUpdateClick = async () => {
  //   // Format the dates
  //   const formattedStartDate = format(new Date(formData.start_date), 'dd-MM-yyyy');
  //   const formattedEndDate = format(new Date(formData.end_date), 'dd-MM-yyyy');
  
  //   // Prepare data to send as JSON
  //   const data = {
  //     title: formData.title,
  //     link: formData.link,
  //     start_date: formattedStartDate,
  //     end_date: formattedEndDate,
  //   };
  
  //   if (formData.ad_image) {
  //     // If an image is present, convert it into FormData to upload the image
  //     const form = new FormData();
  //     form.append("title", formData.title);
  //     form.append("link", formData.link);
  //     form.append("start_date", formattedStartDate);
  //     form.append("end_date", formattedEndDate);
  //     form.append("ad_image", formData.ad_image);
  
  //     try {
  //       const updatedData = await advertisersEditAdvertisement(id, form);
  //       console.log("Updated advertisement:", updatedData);
  //     } catch (err) {
  //       setError("Failed to update advertisement details.");
  //       console.error(err);
  //     }
  //   } else {
  //     // If there's no image, send data as JSON
  //     try {
  //       const updatedData = await advertisersEditAdvertisement(id, data);
  //       console.log("Updated advertisement:", updatedData);
  //     } catch (err) {
  //       setError("Failed to update advertisement details.");
  //       console.error(err);
  //     }
  //   }
  // };
  

  if (loading) {
    return <p>Loading advertisement details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const imageUrl = advertisement?.ad_image
    ? `${baseUrl}${advertisement.ad_image}`
    : null;

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="advertisers-edit-advertisements-container">
      <div className="advertisers-edit-advertisements-card-container">
        <div className="card">
          <div className="card-header">
            <p className="advertisers-edit-advertisements-head">Edit Advertisements</p>
          </div>
          <div className="card-body">
            <div className="advertisers-edit-advertisement-center-button d-flex justify-content-center">
              <button
                className="btn btn-light adv-edit-up-img-button"
                onClick={handleButtonClick}
              >
                Upload Image
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </button>
            </div>

            {/* Displaying the advertisement details */}
            {imageUrl && (
              <div className="advertisers-edit-advertisement-image">
                <img src={imageUrl} alt="Advertisement" width="100" />
              </div>
            )}

            <div className="card advertisers-edit-advertisement-sec-card">
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <hr />
              <div>
                <label>Link:</label>
                <input
                  type="text"
                  className="form-control"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                />
              </div>
              <hr />
              <div>
                <label>Start Date:</label>
                <input
                  className="me-5 form-control"
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                />
                <label>End Date:</label>
                <input
                  className="form-control"
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                />
              </div>
              <hr />
            </div>
          </div>

          <div>
            <div className="card-footer d-flex justify-content-center">
            <Link to="/advertisers-view-advertisements">  <button className="btn btn-outline-dark me-5 advertisers-edit-advertisement-btn">
                Cancel
              </button></Link>
              <button
                className="btn btn-dark advertisers-edit-advertisement-btn"
                onClick={handleUpdateClick}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersEditAdvertisements;

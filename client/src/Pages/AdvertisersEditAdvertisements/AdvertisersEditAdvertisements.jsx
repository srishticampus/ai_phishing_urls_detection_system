import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { advertisersViewAdvertisementDetails, advertisersEditAdvertisement } from "../../Services/apiService";
import "../../Pages/AdvertisersEditAdvertisements/AdvertisersEditAdvertisements.css";
import { format } from "date-fns";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function AdvertisersEditAdvertisements() {
  const { id } = useParams();
  const [advertisement, setAdvertisement] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    start_date: "",
    end_date: "",
    ad_image: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageName, setImageName] = useState("");
const navigate = useNavigate();
  useEffect(() => {
    const fetchAdvertisementDetails = async () => {
      try {
        const data = await advertisersViewAdvertisementDetails(id);
        setAdvertisement(data);
        console.log("Fetched advertisement:", data);

        setFormData({
          title: data.title,
          link: data.link,
          start_date: data.start_date,
          end_date: data.end_date,
          ad_image: data.ad_image ? `${baseUrl}${data.ad_image}` : null,
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
      setImageName(file.name);
    }
  };

  const handleUpdateClick = async () => {
    // Change the format to "DD-MM-YYYY"
    const formattedStartDate = format(new Date(formData.start_date), "dd-MM-yyyy");
    const formattedEndDate = format(new Date(formData.end_date), "dd-MM-yyyy");
  
    const form = new FormData();
    form.append("title", formData.title);
    form.append("link", formData.link);
    form.append("start_date", formattedStartDate);
    form.append("end_date", formattedEndDate);
  
    // ✅ Append image only if a new file is selected
    if (formData.ad_image instanceof File) {
      form.append("ad_image", formData.ad_image);
    }
  
    try {
      const response = await advertisersEditAdvertisement(id, form);
      console.log("✅ Advertisement updated:", response);
      toast.success("Advertisement updated successfully! 🎉", { position: "top-right", autoClose: 3000 });
      navigate("/advertisers-view-advertisements")
    } catch (err) {
      setError("❌ Failed to update advertisement.");
      console.error(err.response || err);
      toast.error("Failed to update advertisement. ❌", { position: "top-right", autoClose: 3000 });
    }
  };
  
  if (loading) return <p>Loading advertisement details...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="advertisers-edit-advertisements-container">
      <div className="advertisers-edit-advertisements-card-container">
        <div className="card">
          <div className="card-header">
            <p className="advertisers-edit-advertisements-head">Edit Advertisements</p>
          </div>
          <div className="card-body">
            {/* Image Upload Section */}
            <div className="advertisers-edit-advertisement-center-button d-flex justify-content-center">
            <label className="btn btn-light adv-edit-up-img-button">
                Upload Image
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                {/* Display Image Name inside the label if an image is selected */}
                {imageName && (
                  <span className="ms-2">({imageName})</span>
                )}
              </label>
              {/* <button className="btn btn-light adv-edit-up-img-button" onClick={() => document.getElementById("fileInput").click()}>
                Upload Image
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                
              </button> */}
              
            </div>

            {/* Display Existing Image */}
            {formData.ad_image && (
              <div className="advertisers-edit-advertisement-image">
                <img src={formData.ad_image} alt="Advertisement" width="150" />
              </div>
            )}
         

            {/* Form Fields */}
            <div className="card advertisers-edit-advertisement-sec-card">
              <div>
                <label>Title:</label>
                <input type="text" className="form-control" name="title" value={formData.title} onChange={handleInputChange} />
              </div>
              <hr />
              <div>
                <label>Link:</label>
                <input type="text" className="form-control" name="link" value={formData.link} onChange={handleInputChange} />
              </div>
              <hr />
              <div>
                <label>Start Date:</label>
                <input type="date" className="form-control" name="start_date" value={formData.start_date} onChange={handleInputChange} />
              </div>
              <hr />
              <div>
                <label>End Date:</label>
                <input type="date" className="form-control" name="end_date" value={formData.end_date} onChange={handleInputChange} />
              </div>
              <hr />
            </div>
          </div>

          {/* Buttons */}
          <div className="card-footer d-flex justify-content-center">
            <Link to="/advertisers-view-advertisements">
              <button className="btn btn-outline-dark me-5 advertisers-edit-advertisement-btn">Cancel</button>
            </Link>
            <button className="btn btn-dark advertisers-edit-advertisement-btn" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersEditAdvertisements;

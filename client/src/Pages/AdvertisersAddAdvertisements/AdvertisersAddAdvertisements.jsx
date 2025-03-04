import { useState, useEffect } from "react";
import { advertisersAddAdvertisement } from "../../Services/apiService";
import "../../Pages/AdvertisersAddAdvertisements/AdvertisersAddAdvertisement.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toastify styles
import {useNavigate}from "react-router-dom"

function AdvertisersAddAdvertisements() {
  const [formData, setFormData] = useState({
    ad_image: null,
    title: "",
    link: "",
    start_date: "",
    end_date: "",
  });


  const navigate = useNavigate();

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, ad_image: e.target.files[0] });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Format date to DD-MM-YYYY
    const formatDate = (date) => {
      const d = new Date(date);
      return `${("0" + d.getDate()).slice(-2)}-${("0" + (d.getMonth() + 1)).slice(-2)}-${d.getFullYear()}`;
    };

    // ✅ Validate that start_date is earlier than end_date
    if (new Date(formData.start_date) > new Date(formData.end_date)) {
      toast.warn("End date cannot be earlier than start date.");
      return;
    }

    // ✅ Prepare FormData
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("ad_image", formData.ad_image);
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("link", formData.link);
    formDataToSubmit.append("start_date", formatDate(formData.start_date));
    formDataToSubmit.append("end_date", formatDate(formData.end_date));

    try {
      console.log("Submitting Data:", formDataToSubmit);
      const response = await advertisersAddAdvertisement(formDataToSubmit);
      
      if (response.success) {
        toast.success("Advertisement created successfully! 🎉");
        navigate("/advertisers-view-advertisements")
        // ✅ Reset form after success
        setFormData({
          ad_image: null,
          title: "",
          link: "",
          start_date: "",
          end_date: "",
        });
      } else {
        toast.error(response.errors?.message || "Failed to create advertisement.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setFormData((prevState) => ({
      ...prevState,
      start_date: today,
    }));
  }, []);

  return (
    <div className="advertisers-add-advertisement-container">
      <div className="advertisers-add-advertisement-card-container">
        <div className="card advertisers-add-advertisement-card">
          <div className="card-header">
            <p className="advertisers-add-advertisement-head">Add Advertisements</p>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="advertisers-add-advertisement-center-button d-flex justify-content-center">
                <button
                  className="btn btn-light adv-add-up-img-button"
                  onClick={handleButtonClick}
                  type="button"
                >
                  Upload Image
                </button>
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>

              <div className="mt-3">
                <p>Title:</p>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="mt-3">
                <p>Link:</p>
                <input
                  type="url"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  required
                  className="form-control"
                />
              </div>

              <div className="d-flex justify-content-center mt-3">
                <label>Start Date: </label>
                <input
                  type="date"
                  name="start_date"
                  value={formData.start_date}
                  onChange={handleInputChange}
                  required
                  className="me-5"
                />
                <label>End Date: </label>
                <input
                  type="date"
                  name="end_date"
                  value={formData.end_date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="card-footer d-flex justify-content-center mt-4">
                <button className="btn btn-dark w-25" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersAddAdvertisements;

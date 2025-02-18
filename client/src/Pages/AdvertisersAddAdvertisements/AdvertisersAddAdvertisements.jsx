import { useState, useEffect } from "react";
import { advertisersAddAdvertisement } from "../../Services/apiService";
import "../../Pages/AdvertisersAddAdvertisements/AdvertisersAddAdvertisement.css";

function AdvertisersAddAdvertisements() {
  const [formData, setFormData] = useState({
    ad_image: null,
    title: "",
    link: "",
    start_date: "",
    end_date: "",
  });

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
  
    // Function to format date to DD-MM-YYYY
    const formatDate = (date) => {
      const d = new Date(date);
      const day = ("0" + d.getDate()).slice(-2);  // Ensure two digits
      const month = ("0" + (d.getMonth() + 1)).slice(-2);  // Ensure two digits
      const year = d.getFullYear();
      return `${day}-${month}-${year}`;
    };
  
    // Format the start_date and end_date to "DD-MM-YYYY"
    const formattedStartDate = formatDate(formData.start_date);
    const formattedEndDate = formatDate(formData.end_date);
  
    // Log the formatted dates to check
    console.log("Formatted start_date:", formattedStartDate);
    console.log("Formatted end_date:", formattedEndDate);
  
    // Validate that start_date is earlier than end_date
    if (new Date(formattedStartDate) > new Date(formattedEndDate)) {
      alert("End date cannot be earlier than start date.");
      return;
    }
  
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("ad_image", formData.ad_image);
    formDataToSubmit.append("title", formData.title);
    formDataToSubmit.append("link", formData.link);
    formDataToSubmit.append("start_date", formattedStartDate);  
    formDataToSubmit.append("end_date", formattedEndDate);      
  
    try {
      console.log(formDataToSubmit);
      const response = await advertisersAddAdvertisement(formDataToSubmit);
      
      console.log("Response:", response);
  
      if (response && response.id) {
        alert("Advertisement created successfully!");
        setFormData({
          ad_image: null,
          title: "",
          link: "",
          start_date: "",
          end_date: "",
        });
      }
    } catch (error) {
      console.error("Error creating advertisement", error);
      // Log the error response to check what the backend says
      console.error("Error response:", error.response);
      alert("Failed to create advertisement.");
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
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </button>

                {/* <button
                  className="btn btn-light dropdown-toggle adv-add-dropdown-button"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Actions
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Action 3
                    </a>
                  </li>
                </ul> */}
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
                <hr />
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
                <hr />
              </div>

              <div className="d-flex justify-content-center mt-3">
                <label>Start Date: </label>
                <input
                  id="startDate"
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

              {/* <div className="mt-3">
                <p>Description:</p>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div> */}

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

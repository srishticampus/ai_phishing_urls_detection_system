import "../../Pages/AdminViewDetails/AdminViewDetails.css";
import { Switch, Button, message } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  adminViewAdvertisers,
  checkMaliciousLinks,
} from "../../Services/apiService";

function AdminViewDetails() {
  const [advertisers, setAdvertisers] = useState([]); // State to store advertiser data
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("userActiveState");
    return storedState ? JSON.parse(storedState) : true;
  });

  const [dropdownValue, setDropdownValue] = useState("");

  // Fetch advertiser details on component mount
  useEffect(() => {
    fetchAdvertisers();
  }, []);

  // Function to fetch advertiser details
  const fetchAdvertisers = async () => {
    setLoading(true);
    try {
      const response = await adminViewAdvertisers();
      if (response.success) {
        setAdvertisers(response.data); // Set the fetched data to state
      } else {
        message.error("Failed to fetch advertiser details.");
      }
    } catch (error) {
      console.error("Error fetching advertisers:", error);
      message.error("An error occurred while fetching advertiser details.");
    } finally {
      setLoading(false);
    }
  };

  // Function to check for malicious links
  const handleCheckMaliciousLinks = async (advertiserId) => {
    try {
      const response = await checkMaliciousLinks(advertiserId);
      if (response.success) {
        if (response.data.is_malicious) {
          message.warning(
            `Malicious links found for advertiser : ${response.data.advertiser_username}`
          );
          console.log("Malicious links:", response.data.malicious_links);
        } else {
          message.success(
            `No malicious links found for advertiser : ${response.data.advertiser_username}`
          );
        }
      } else {
        message.error(
          response.errors.message || "Failed to check for malicious links."
        );
      }
    } catch (error) {
      console.error("Error checking malicious links:", error);
      message.error("An error occurred while checking for malicious links.");
    }
  };

  const handleSwitchChange = (checked) => {
    setIsActive(checked);
    localStorage.setItem("userActiveState", JSON.stringify(checked));
  };

  const handleDropdownClick = (value) => {
    setDropdownValue(value);
  };

  return (
    <div className="admin-view-details-container">
      <div className="d-flex justify-content-center admin-view-details-button-container">
        <button className="btn admin-view-details-view-request-button">
          <Link className="admin-view-details-req" to="/admin-view-advertisers">
            View Request
          </Link>
        </button>
        <button className="btn admin-view-details-view-details-button">
          <Link className="admin-view-details-details" to="/admin-view-details">
            View Details
          </Link>
        </button>
      </div>
      <div>
        <p className="admin-view-details-head">View Details</p>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Business Category</th>
              <th>Advertiser</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {advertisers.map((advertiser, index) => (
              <tr key={advertiser.id}>
                <td>{index + 1}</td>
                <td>{advertiser.username}</td>
                <td>{advertiser.contact_number || "N/A"}</td>
                <td>{advertiser.email}</td>
                <td>{advertiser.business_name || "N/A"}</td>
                <td>{advertiser.business_type?.name || "N/A"}</td>
                <td>{advertiser.is_active ? "Active" : "Inactive"}</td>
                <td>
                  <Switch
                    defaultChecked={advertiser.is_active}
                    checkedChildren="Active"
                    unCheckedChildren="Inactive"
                    onChange={handleSwitchChange}
                    style={{
                      backgroundColor: advertiser.is_active
                        ? "#80BA28"
                        : "#BFBFBF",
                    }}
                  />
                  <Button
                    className="btn btn-warning"
                    onClick={() => handleCheckMaliciousLinks(advertiser.id)}
                    style={{ margin: "10px" }}
                  >
                    Check Links
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-between">
        <div className="admin-view-details dropdown-container">
          <span className="admin-view-details">Show</span>
          <div className="admin-view-details dropdown">
            <button
              className="admin-view-details btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {dropdownValue || "1"}
            </button>
            <ul
              className="admin-view-details dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              {[...Array(10)].map((_, index) => (
                <li key={index}>
                  <a
                    className="admin-view-details dropdown-item"
                    href="#"
                    onClick={() => handleDropdownClick((index + 1).toString())}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <p className="admin-view-user">Per Page</p>
        </div>

        <div>
          <nav aria-label="Page navigation example">
            <ul className="admin-view-user pagination justify-content-center">
              <li className="admin-view-user page-item">
                <a
                  className="admin-view-user page-link"
                  href="#"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
                <li key={pageNumber} className="admin-view-user page-item">
                  <a className="admin-view-user page-link" href="#">
                    {pageNumber}
                  </a>
                </li>
              ))}
              <li className="admin-view-user page-item">
                <a
                  className="admin-view-user page-link"
                  href="#"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AdminViewDetails;

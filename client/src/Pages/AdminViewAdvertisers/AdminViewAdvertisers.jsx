import { useState, useEffect } from "react";
import { adminViewNewAdvertisers, toggleUserStatus } from "../../Services/apiService";
import "../../Pages/AdminViewAdvertisers/AdminViewAdvertisers.css";
import { Switch } from "antd"; // Import Switch component
import { Link } from "react-router-dom";

function AdminViewAdvertisers() {
  const [advertisers, setAdvertisers] = useState([]);
  const [dropdownValue, setDropdownValue] = useState('');  

  // Fetch advertisers on component mount
  useEffect(() => {
    const fetchAdvertisers = async () => {
      try {
        const response = await adminViewNewAdvertisers();
        console.log("Advertisers Data", response);

        const validatedData = response.data.map(advertiser => {
          return {
            ...advertiser,
            username: advertiser.username || 'N/A',
            contact_number: advertiser.contact_number || 'N/A',
            email: advertiser.email || 'N/A',
            business_name: advertiser.business_name || 'N/A',
            business_type: advertiser.business_type?.name || 'N/A',
            is_active: advertiser.is_active || false, // Assuming this field indicates active/inactive
          };
        });

        setAdvertisers(validatedData); // Set advertisers data in state
      } catch (error) {
        console.error("Error fetching advertisers data", error);
      }
    };

    fetchAdvertisers(); // Trigger fetch on component mount
  }, []);

  const handleSwitchChange = async (checked, id) => {
    try {
      // Call the API to toggle user activation
      const response = await toggleUserStatus(id);

      // Find the advertiser that was toggled
      const updatedAdvertisers = advertisers.map(advertiser =>
        advertiser.id === id
          ? { ...advertiser, is_active: checked }
          : advertiser
      );

      setAdvertisers(updatedAdvertisers);

      if (checked) {
        console.log(`Advertiser with id ${id} is activated`);
      } else {
        console.log(`Advertiser with id ${id} is deactivated`);
      }

      // Optionally, show a success message or log the response
      console.log(response.message);
    } catch (error) {
      console.error("Error toggling user activation", error);
    }
  };

  const handleDropdownClick = (value) => {
    setDropdownValue(value); // Set selected dropdown value
  };

  return (
    <div className="admin-view-advertisers-container">
      <div className="d-flex justify-content-center admin-view-advertisers-button-container">
        <button className="btn admin-view-advertisers-view-request-button">
          <Link className="admin-view-adv-req" to="/admin-view-advertisers">View Request</Link>
        </button>
        <button className="btn btn-outline-warning admin-view-advertisers-view-details-button ms-5">
          <Link className="admin-view-adv-details-button-color" to="/admin-view-details">View Details</Link>
        </button>
      </div>

      <div>
        <p className="admin-view-advertisers-head">View Requests</p>
      </div>

      <div className="container">
        <table className="table table-bordered admin-view-adv-table-border">
          <thead className="admin-view-adv-table-head table-secondary text-center">
            <tr>
              <th>S No</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Company Name</th>
              <th>Business Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {advertisers&&advertisers?.map((advertiser, index) => (
              <tr key={advertiser.id}>
                <td>{index + 1}</td>
                <td>{advertiser.username}</td>
                <td>{advertiser.contact_number}</td>
                <td>{advertiser.email}</td>
                <td>{advertiser.business_name}</td>
                <td>{advertiser.business_type}</td>
                <td>
                  <div>
                    <Switch
                      checked={advertiser.is_active}
                      checkedChildren="Active"
                      unCheckedChildren="Inactive"
                      onChange={(checked) => handleSwitchChange(checked, advertiser.id)} // Handle switch toggle
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination and Dropdown */}
        <div className="d-flex justify-content-between">
          <div className="admin-view-advertiser dropdown-container">
            <span className="admin-view-advertiser">Show</span>
            <div className="admin-view-advertiser dropdown">
              <button
                className="admin-view-advertiser btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {dropdownValue || "1"}
              </button>
              <ul className="admin-view-advertiser dropdown-menu" aria-labelledby="dropdownMenuButton">
                {[...Array(10)].map((_, index) => (
                  <li key={index}>
                    <a
                      className="admin-view-advertiser dropdown-item"
                      href="#"
                      onClick={() => handleDropdownClick((index + 1).toString())}
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <p className="admin-view-advertiser">Per Page</p>
          </div>

          {/* Pagination buttons */}
          <div>
            <nav aria-label="Page navigation example">
              <ul className="admin-view-advertiser pagination justify-content-center">
                <li className="admin-view-advertiser page-item">
                  <a className="admin-view-advertiser page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
                  <li key={pageNumber} className="admin-view-advertiser page-item">
                    <a className="admin-view-advertiser page-link" href="#">
                      {pageNumber}
                    </a>
                  </li>
                ))}
                <li className="admin-view-advertiser page-item">
                  <a className="admin-view-advertiser page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewAdvertisers;

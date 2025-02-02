import "../../Pages/AdminViewUsers/AdminViewUsers.css";
import profileface from "../../assets/Images/profile-face.png";
import { Switch } from "antd";
import { useState,useEffect } from "react";
import { viewUsers } from "../../Services/apiService";

function AdminViewUsers() {
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("userActiveState");
    return storedState ? JSON.parse(storedState) : true;
  });

  const [dropdownValue, setDropdownValue] = useState("1"); // Default value for rows per page
  const [currentPage, setCurrentPage] = useState(1); // Default starting page
  const [users, setUsers] = useState([]); // Store fetched users
  const [loading, setLoading] = useState(true); // Track loading state

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await viewUsers();
        console.log("Fetched users response:", response); // Log the entire response

        // Extract users from the response.data
        if (response.success && Array.isArray(response.data)) {
          setUsers(response.data);  // Update the state with the fetched users
        } else {
          console.error("API response doesn't contain valid user data:", response);
          setUsers([]); // Set to an empty array if data is not valid
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]); // Set to an empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array to run this effect once when the component mounts

  const rowsPerPage = parseInt(dropdownValue, 10);

  const handleSwitchChange = (checked) => {
    setIsActive(checked); // Update isActive state when the Switch is toggled
    localStorage.setItem("userActiveState", JSON.stringify(checked));
  };

  const handleDropdownClick = (value) => {
    setDropdownValue(value);
    setCurrentPage(1);  // Reset to the first page when the number of rows per page changes
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  const paginatedUsers = Array.isArray(users) ? users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage) : [];

  const totalPages = Math.ceil(users.length / rowsPerPage);

  if (loading) {
    return <div>Loading...</div>; // Loading message until data is fetched
  }

  return (
    <div>
      <div className="admin-view-user-container">
        <p className="admin-view-user-user-details-head">User Details</p>
        <div className="container-fluid">
          <table className="table table-responsive table-bordered">
            <thead className="admin-view-user-table-head">
              <tr>
                <th>S No</th>
                <th>Profile</th>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Area of Interest</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.map((user, index) => (
                <tr key={index}>
                  <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                  <td><img src={profileface} alt="profile" /></td>
                  <td>{user.user.first_name} {user.user.last_name}</td> {/* Accessing first_name and last_name from the 'user' object */}
                  <td>{user.phone_number}</td>
                  <td>{user.user.email}</td> {/* Accessing email from the 'user' object */}
                  <td>{user.gender}</td>
                  <td>{user.interest || "N/A"}</td> {/* Assuming 'interest' might not be available */}
                  <td>
                    <Switch
                      checked={user.is_active}  // Bind the is_active state directly here
                      checkedChildren="Active"
                      unCheckedChildren="Inactive"
                      onChange={(checked) => handleSwitchChange(checked)}  // Update isActive state on toggle
                      style={{ backgroundColor: user.is_active ? "#F18C00" : "#BFBFBF" }}
                   
                    
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between">
            <div className="admin-view-user dropdown-container">
              <span className="admin-view-user">Show</span>
              <div className="admin-view-user dropdown">
                <button
                  className="admin-view-user btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {dropdownValue || "1"}
                </button>
                <ul className="admin-view-user dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {[...Array(10)].map((_, index) => (
                    <li key={index}>
                      <a
                        className="admin-view-user dropdown-item"
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
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePaginationClick(currentPage - 1);
                      }}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, pageIndex) => (
                    <li key={pageIndex + 1} className="admin-view-user page-item">
                      <a
                        className="admin-view-user page-link"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePaginationClick(pageIndex + 1);
                        }}
                      >
                        {pageIndex + 1}
                      </a>
                    </li>
                  ))}
                  <li className="admin-view-user page-item">
                    <a
                      className="admin-view-user page-link"
                      href="#"
                      aria-label="Next"
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage < totalPages) handlePaginationClick(currentPage + 1);
                      }}
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminViewUsers;
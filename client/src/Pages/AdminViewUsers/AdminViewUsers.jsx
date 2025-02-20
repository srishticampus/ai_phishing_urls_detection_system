import { useState, useEffect } from "react";
import { viewUsers, toggleUserStatus } from "../../Services/apiService";
import profileface from "../../assets/Images/profile-face.png";
import { Switch } from "antd";
import "../../Pages/AdminViewUsers/AdminViewUsers.css";

function AdminViewUsers() {
  const [dropdownValue, setDropdownValue] = useState("5");
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await viewUsers();
        console.log("API Response:", response);
        if (response.success && Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error("Invalid data format:", response);
          setUsers([]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const rowsPerPage = parseInt(dropdownValue, 10) || 1;
  const paginatedUsers = Array.isArray(users)
    ? users.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
    : [];
  const totalPages = Math.ceil(users.length / (rowsPerPage || 1));

  // Modify the handleSwitchChange to toggle user activation
  const handleSwitchChange = async (checked, user) => {
    const userId = user.user ? user.user.id : user.id; // Extract user ID

    if (!userId) {
      console.error("User ID is missing");
      return;
    }

    console.log("Toggling user with ID:", userId);
    try {
      const response = await toggleUserStatus(userId); // Toggle user activation

      const updatedUsers = users.map((u) =>
        (u.user ? u.user.id : u.id) === userId ? { ...u, is_active: checked } : u
      );
      setUsers(updatedUsers);

      console.log(response.message); // Optionally log the response message from API

    } catch (error) {
      console.error("Error toggling user activation", error);
    }
  };

  const handleDropdownClick = (value) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue > 0) {
      setDropdownValue(parsedValue.toString());
      setCurrentPage(1);
    }
  };

  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(paginatedUsers);
  

  return (
    <div>
      <div className="admin-view-user-container">
        <p className="admin-view-user-user-details-head">User Details</p>
        <div className="container-fluid">
          <table className="table table-responsive table-bordered">
            <thead className="admin-view-user-table-head table-secondary">
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
              {paginatedUsers.map((user, index) => {
                const userId = user.user ? user.user.id : user.id; 
                return (
                  <tr key={index}>
                    <td>{(currentPage - 1) * rowsPerPage + index + 1}</td>
                    <td>
                      <img src={`${baseUrl}${user.photo}`} alt="profile" style={{height:'100px', width:'100px',objectFit:'cover'}} />
                    </td>
                    <td>
                      {user.user ? `${user.user.first_name} ${user.user.last_name}` : "N/A"}
                    </td>
                    <td>{user.phone_number}</td>
                    <td>{user.user?.email}</td>
                    <td>{user.gender}</td>
                    <td>
  {user.interests?.map((interest) => interest.interest.name).join(", ") || "N/A"}
</td>

                    {/* <td>{user.interests?.join(", ") || "N/A"}</td> */}
                    <td>
                      <Switch
                        checked={user.is_active}
                        checkedChildren="Active"
                        unCheckedChildren="Inactive"
                        onChange={(checked) => handleSwitchChange(checked, user)} // Use the correct user ID
                        style={{
                          backgroundColor: user.is_active ? "#F18C00" : "#BFBFBF",
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Pagination and dropdown */}
          <div className="d-flex justify-content-end">
            {/* <div className="admin-view-user dropdown-container">
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
                <ul
                  className="admin-view-user dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {[...Array(10)].map((_, index) => (
                    <li key={index}>
                      <a
                        className="admin-view-user dropdown-item"
                        href="#"
                        onClick={() =>
                          handleDropdownClick((index + 1).toString())
                        }
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="admin-view-user">Per Page</p>
            </div> */}

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
                        if (currentPage > 1)
                          handlePaginationClick(currentPage - 1);
                      }}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, pageIndex) => (
                    <li
                      key={pageIndex + 1}
                      className="admin-view-user page-item"
                    >
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
                        if (currentPage < totalPages)
                          handlePaginationClick(currentPage + 1);
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

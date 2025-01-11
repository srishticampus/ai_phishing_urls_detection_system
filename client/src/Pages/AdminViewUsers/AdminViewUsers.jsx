import "../../Pages/AdminViewUsers/AdminViewUsers.css"
import profileface from "../../assets/Images/profile-face.png"
import { Switch } from "antd";
import { useState } from "react";

function AdminViewUsers() {
  const [isActive, setIsActive] = useState(() => {
    const storedState = localStorage.getItem("userActiveState");
    return storedState ? JSON.parse(storedState) : true;
  });

  const [dropdownValue, setDropdownValue] = useState('');  // State for dropdown selection

  const handleSwitchChange = (checked) => {
    setIsActive(checked);
    // Store the new state in localStorage
    localStorage.setItem("userActiveState", JSON.stringify(checked));
  };

  const handleDropdownClick = (value) => {
    setDropdownValue(value); 
  };

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
              <tr>
                <td>1</td>
                <td><img src={profileface} alt="profile" /></td>
                <td>Saravanan</td>
                <td>123123</td>
                <td>saravanan@gmail.com</td>
                <td>Male</td>
                <td>Health,Technology,Travel,Fitness</td>
                <td>
                  <Switch
                    defaultChecked={true}
                    checkedChildren="Active"
                    unCheckedChildren="Inactive"
                    onChange={handleSwitchChange}
                    style={{

                      backgroundColor: isActive ? '#F18C00' : '#BFBFBF',
                    }}
                  />
                </td>
              </tr>
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
                    <a className="admin-view-user page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {[1, 2, 3, 4, 5,6].map((pageNumber) => (
                    <li key={pageNumber} className="admin-view-user page-item">
                      <a className="admin-view-user page-link" href="#">
                        {pageNumber}
                      </a>
                    </li>
                  ))}
                  <li className="admin-view-user page-item">
                    <a className="admin-view-user page-link" href="#" aria-label="Next">
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

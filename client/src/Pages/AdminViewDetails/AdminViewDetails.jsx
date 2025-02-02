import "../../Pages/AdminViewDetails/AdminViewDetails.css"
import { Switch } from "antd";
import { useState } from "react";
import { Link } from "react-router";


function AdminViewDetails() {
    const [isActive, setIsActive] = useState(() => {
        const storedState = localStorage.getItem("userActiveState");
        return storedState ? JSON.parse(storedState) : true;
    });

    const [dropdownValue, setDropdownValue] = useState(''); 

    const handleSwitchChange = (checked) => {
        setIsActive(checked);
        // Store the new state in localStorage
        localStorage.setItem("userActiveState", JSON.stringify(checked));
    };

    const handleDropdownClick = (value) => {
        setDropdownValue(value); 
      };

    return (
        <div className="admin-view-details-container">
            <div className="d-flex justify-content-center admin-view-details-button-container">
                <button className="btn admin-view-details-view-request-button"><Link className="admin-view-details-req" to="/admin-view-advertisers">View Request</Link></button>
                <button className="btn admin-view-details-view-details-button"><Link className="admin-view-details-details" to="/admin-view-details">View Details</Link></button>
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
                        <tr>
                            <td>1</td>
                            <td>Saravanan</td>
                            <td>123344556</td>
                            <td>Saravanan@gmail.com</td>
                            <td>Wide AD</td>
                            <td>Business Category</td>
                            <td>Valid Advertiser</td>
                            <td>
                                <Switch
                                    defaultChecked={true}
                                    checkedChildren="Active"
                                    unCheckedChildren="Inactive"
                                    onChange={handleSwitchChange}
                                    style={{

                                        backgroundColor: isActive ? '#80BA28' : '#BFBFBF',
                                    }}
                                />
                            </td>
                        </tr>
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
                <ul className="admin-view-details dropdown-menu" aria-labelledby="dropdownMenuButton">
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
    )
}

export default AdminViewDetails

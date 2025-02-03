import "../../Pages/AdminViewAdvertisers/AdminViewAdvertisers.css"
import cancel from "../../assets/Images/cancel.png"
import accept from "../../assets/Images/accept.png"
import { useState } from "react";
import {Link } from "react-router";

function AdminViewAdvertisers() {
  
    const [dropdownValue, setDropdownValue] = useState('');  // State for dropdown selection
  
    const handleDropdownClick = (value) => {
      setDropdownValue(value); 
    };


  
  return (
    <div className="admin-view-advertisers-container">
      <div className="d-flex justify-content-center admin-view-advertisers-button-container">
        <button className="btn admin-view-advertisers-view-request-button"><Link className="admin-view-adv-req" to="/admin-view-advertisers">View Request</Link></button>
        <button className="btn btn-outline-warning admin-view-advertisers-view-details-button ms-5">
          <Link className="admin-view-adv-details-button-color" to="/admin-view-details">View Details</Link>
        </button>
      </div>
     <div>
        <p className="admin-view-advertisers-head">View Requests</p>
     </div>
     <div className="container">
        <table className="table table-bordered admin-view-adv-table-border">
            <thead className="admin-view-adv-table-head table-secondary text-center" >
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
                <tr>
                    <td>1</td>
                    <td>Saravanan</td>
                    <td>1234556</td>
                    <td>saravanan@gmail.com</td>
                    <td>Wide AD</td>
                    <td>Health</td>
                    <td>
                        <button className="btn btn-dark admin-view-advertisers-button-rounded"><img src={cancel}/></button>
                        <button className="btn btn-success admin-view-advertisers-button-rounded ms-2"><img src={accept}/></button>
                    </td>
                </tr>
            </tbody>
        </table>
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

            <div>
              <nav aria-label="Page navigation example">
                <ul className="admin-view-advertiser pagination justify-content-center">
                  <li className="admin-view-advertiser page-item">
                    <a className="admin-view-advertiser page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {[1, 2, 3, 4, 5,6].map((pageNumber) => (
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
  )
}

export default AdminViewAdvertisers

import "../../Pages/AdvertisersDashboard/AdvertisersDashboard.css"
import advertisement from "../../assets/Images/advertisement.png"
import profileface from "../../assets/Images/profile-face.png" 

function AdvertisersDashboard() {
  return (
    <div className="advertisers-dashboard-container">
      <p className="advertisers-dashboard-head">View Recents Advertisements</p>
      <div className="row advertisers-dashboard-row-container">
        <div className="card advertisers-dashboard-row-card">
          <img src={advertisement} alt="advertisement" />
        </div>
        <div className="card advertisers-dashboard-row-card">
          <img src={advertisement} alt="advertisement" />
        </div>
        <div className="card advertisers-dashboard-row-card">
          <img src={advertisement} alt="advertisement" />
        </div>
  
      </div>
      <div className="d-flex justify-content-end  advertiser-dashboard-view-all-card">
          <p>View All &gt;</p>
        </div>
      <div>
        <p className="advertisers-dashboard-head">View Recent Users</p>
        <table className="table table-bordered" >
          <thead>
            <tr>
              <th>S No</th>
              <th>Profile</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Area of Interests</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src={profileface}></img></td>
              <td>Saravanan</td>
              <td>12345678</td>
              <td>saravanan@gmail.com</td>
              <td>Male</td>
              <td>Health,Technology,Travel,Fitness</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex justify-content-end  advertiser-dashboard-view-all-table">
          <p>View All &gt;</p>
        </div>
      </div>

    </div>
  )
}

export default AdvertisersDashboard

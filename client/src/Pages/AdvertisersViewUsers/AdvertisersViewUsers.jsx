import "../../Pages/AdvertisersViewUsers/AdvertisersViewUsers.css"
import profileface from "../../assets/Images/profile-face.png"

function AdvertisersViewUsers() {
  return (
    <div className="advertisers-view-user-container">
      <p className="advertisers-view-user-head">View Users</p>
      <div className="container">
        <table className="table table-bordered">
            <thead className="advertisers-view-user-table-head">
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
                    <td><img src={profileface}/></td>
                    <td>Saravanan</td>
                    <td>123</td>
                    <td>xyz@gmail.com</td>
                    <td>Male</td>
                    <td>Health,Technology,Travell,Fitness</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdvertisersViewUsers

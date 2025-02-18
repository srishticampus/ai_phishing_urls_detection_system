import "../../Pages/AdvertisersDashboard/AdvertisersDashboard.css"
import profileface from "../../assets/Images/profile-face.png" 
import { useState, useEffect } from 'react';
import { advertisersViewAdvertisement, viewUsers } from "../../Services/apiService"; 
const baseUrl = import.meta.env.VITE_API_URL;

function AdvertisersDashboard() {
  const [advertisements, setAdvertisements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]); 

  // Fetch advertisements on component mount
  useEffect(() => {
    const fetchAdvertisements = async () => {
      try {
        const response = await advertisersViewAdvertisement();
        console.log("fetchadvertisement response", response.data); // Log the full response

        // Check if the response contains valid advertisement data
        if (response.success && Array.isArray(response.data) && response.data.length > 0) {
          setAdvertisements(response.data); // Set advertisements if valid array with content
        } else {
          setAdvertisements([]); // Set empty array if no data or no valid content
          console.log("No advertisements available.");
        }

        setLoading(false);
      } catch (err) {
        setError('Failed to load advertisements');
        console.error("Error fetching advertisements:", err); // Log the error
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await viewUsers();
        console.log("fetchUser response", response); // Log user data for debugging
        if (response.success && Array.isArray(response.data)) {
          setUsers(response.data);  // Store users in state
        } else {
          setUsers([]); // If users data is not in the expected format
        }
      } catch (err) {
        setError('Failed to load users');
        console.error("Error fetching users:", err); // Log the error
        setLoading(false);
      }
    };

    fetchAdvertisements();
    fetchUsers();  
  }, []);

  // Loading or error handling
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="advertisers-dashboard-container">
      <p className="advertisers-dashboard-head">View Recent Advertisements</p>

      <div className="row advertisers-dashboard-row-container">
        {advertisements.length > 0 ? (
          advertisements.map((advertisement) => (
            <div className="card advertisers-dashboard-row-card" key={advertisement.id}>
              <img 
                src={`${baseUrl}${advertisement.ad_image}`} 
                alt={advertisement.title} 
              />
            </div>
          ))
        ) : (
          <p>No advertisements available.</p> // Fallback message if no ads
        )}
      </div>
      
      <div className="d-flex justify-content-end advertiser-dashboard-view-all-card">
        <p>View All &gt;</p>
      </div>

      <div>
        <p className="advertisers-dashboard-head">View Recent Users</p>
        <table className="table table-bordered">
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
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td><img src={profileface} alt="Profile" /></td>
                  {/* <td>{user.first_name} {user.last_name}</td> */}
                  <td>{user.username}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.email}</td>
                  <td>{user.gender === 'M' ? 'Male' : 'Female'}</td>
                  <td>
                    {
                      // Check if interests is valid, then join, otherwise show 'N/A'
                      Array.isArray(user.interests) && user.interests.length > 0 
                        ? user.interests.join(', ') 
                        : 'N/A'
                    }
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="7">No users available.</td></tr>
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-end advertiser-dashboard-view-all-table">
          <p>View All &gt;</p>
        </div>
      </div>
    </div>
  );
}

export default AdvertisersDashboard;

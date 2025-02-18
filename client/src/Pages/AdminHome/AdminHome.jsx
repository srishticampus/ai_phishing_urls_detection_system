import { useState, useEffect } from "react";
import { adminViewNewAdvertisers } from "../../Services/apiService";
import "../../Pages/AdminHome/AdminHome.css";
import { Switch } from "antd";
import LandingP_card_one from '../../assets/Images/LandingP_card_one.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';
import { toggleUserActivation } from "../../Services/apiService";

function AdminHome() {
  const [advertisers, setAdvertisers] = useState([]);

  useEffect(() => {

    const fetchAdvertisers = async () => {
      try {
        const response = await adminViewNewAdvertisers();
        console.log("fullresponse", response.fullResponse);

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

        setAdvertisers(validatedData);
      } catch (error) {
        console.error("Error fetching advertisers data", error);
      }
    };

    fetchAdvertisers();
  }, []);

  const handleSwitchChange = async (checked, id) => {
    try {
      // Call the API to toggle user activation
      const response = await toggleUserActivation(id);

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

  return (
    <div className="admin-home-container">
      <p className="admin-home-container-head ms-3">View Advertisers Requests</p>
      <div className="container">
        <table className="admin-home-table-container">
          <thead>
            <tr className="admin-home-table-color">
              <th className="admin-home-table-th">S No</th>
              <th className="admin-home-table-th">Name</th>
              <th className="admin-home-table-th">Phone Number</th>
              <th className="admin-home-table-th">Email</th>
              <th className="admin-home-table-th">Company Name</th>
              <th className="admin-home-table-th">Business Category</th>
              <th className="admin-home-table-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {advertisers.map((advertiser, index) => (
              <tr className="admin-home-table-tr" key={advertiser.id}>
                <td className="admin-home-table-td">{index + 1}</td>
                <td className="admin-home-table-td">{advertiser.username}</td>
                <td className="admin-home-table-td">{advertiser.contact_number}</td>
                <td className="admin-home-table-td">{advertiser.email}</td>
                <td className="admin-home-table-td">{advertiser.business_name}</td>
                <td className="admin-home-table-td">{advertiser.business_type}</td>
                <td className="admin-home-table-td">
                  <div>
                    <Switch
                      checked={advertiser.is_active}
                      checkedChildren="Active"
                      unCheckedChildren="Inactive"
                      onChange={(checked) => handleSwitchChange(checked, advertiser.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-end">
          <button className="btn admin-home-container-viewall">View All &nbsp; &gt;</button>
        </div>
      </div>

      {/* Recent Blogs Section */}
      <div>
        <p className="admin-home-container-head ms-3">View Recent Blogs</p>
        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="card col-sm-3 admin-home-cardsize">
              <img className="admin-home-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span>
                  <p className="badge p-2 admin-home-cardone-header">Food & Cooking</p>
                </span>
                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <p className="profile-textcolor">June 28, 2018</p>
                  </div>
                </div>
              </div>
              <p className="admin-view-blog-cardone-para">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className="btn admin-home-readmore-button">
                Read More <span className="greaterthan-symbol">&gt;</span>
              </button>
            </div>
            <div className="card col-sm-3 admin-home-cardsize">
              <img className="admin-home-cardone-imgone" src={LandingPage_Bg} />
              <div>
                <span>
                  <p className="badge p-2 admin-home-cardone-header">Food & Cooking</p>
                </span>
                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <p className="profile-textcolor">June 28, 2018</p>
                  </div>
                </div>
              </div>
              <p className="admin-view-blog-cardone-para">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className="btn admin-home-readmore-button">
                Read More <span className="greaterthan-symbol">&gt;</span>
              </button>
            </div>
            <div className="card col-sm-3 admin-home-cardsize">
              <img className="admin-home-cardone-imgone" src={LandingPage_Bg} />
              <div>
                <span>
                  <p className="badge p-2 admin-home-cardone-header">Food & Cooking</p>
                </span>
                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <p className="profile-textcolor">June 28, 2018</p>
                  </div>
                </div>
              </div>
              <p className="admin-view-blog-cardone-para">
                Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className="btn admin-home-readmore-button">
                Read More <span className="greaterthan-symbol">&gt;</span>
              </button>
            </div>
            {/* More blog cards... */}
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button className="btn admin-home-container-viewall">View All &nbsp; &gt;</button>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;

import { useState, useEffect } from "react";
import { viewNewAdvertisers } from "../../Services/apiService";
import { viewBlogs } from "../../Services/apiService"; // Import viewBlogs function
import "../../Pages/AdminHome/AdminHome.css";
import { Switch } from "antd";
import LandingP_card_one from '../../assets/Images/LandingP_card_one.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';
import { toggleUserStatus } from "../../Services/apiService";
import { useNavigate } from "react-router";

function AdminHome() {
  const [advertisers, setAdvertisers] = useState([]);
  const [blogs, setBlogs] = useState([]); // State to store blogs
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAdvertisers = async () => {
      try {
        const response = await viewNewAdvertisers();
        console.log("fullresponse", response.fullResponse);

        const validatedData = response.data.map(advertiser => {
          return {
            ...advertiser,
            username: advertiser.username || 'N/A',
            contact_number: advertiser.contact_number || 'N/A',
            email: advertiser.email || 'N/A',
            business_name: advertiser.business_name || 'N/A',
            business_type: advertiser.business_type?.name || 'N/A',
            is_active: advertiser.is_active || false,
          };
        });
        setAdvertisers(prevAdvertisers => {
          // Combine previous and new advertisers, then slice to get the latest 5
          const combinedAdvertisers = [...validatedData, ...prevAdvertisers];
          return combinedAdvertisers.slice(0, 5); // Slice to ensure only the latest 5
        });


      } catch (error) {
        console.error("Error fetching advertisers data", error);
      }
    };

    const fetchBlogs = async () => { // Fetch blogs
      try {
        const response = await viewBlogs();
        console.log("Blogs data:", response);
        setBlogs(response.data); // Set blogs data to state
      } catch (error) {
        console.error("Error fetching blogs data", error);
      }
    };

    fetchAdvertisers();
    fetchBlogs(); // Fetch blogs on component mount
  }, []);

  function handleViewALL(){
    navigate('/admin-view-advertisers')
  }
  function handleViewALLBlogs(){
    navigate('/admin-view-blog')
  }

  const handleSwitchChange = async (checked, id) => {
    try {
      // Call the API to toggle user activation
      const response = await toggleUserStatus(id);

      // Ensure that the correct advertiser is updated based on the unique id
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

      console.log(response.message);
    } catch (error) {
      console.error("Error toggling user activation", error);
    }
  };

  return (
    <div className="admin-home-container">
    <p className="admin-home-container-head ms-3">View Advertisers Requests</p>
    <div className="container">
      {advertisers.length === 0 ? (
        <p>No advertisers available.</p>
      ) : (
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
      )}

      <div className="d-flex justify-content-end">
        <button className="btn admin-home-container-viewall" onClick={handleViewALL}>View All &nbsp; &gt;</button>
      </div>
    </div>

    {/* Recent Blogs Section */}
    <div>
      <p className="admin-home-container-head ms-3">View Recent Blogs</p>
      <div className="d-flex justify-content-center">
        <div className="row">
          {blogs.length === 0 ? (
            <p>No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <div className="card col-sm-3 admin-home-cardsize" key={blog.id}>
                <img className="admin-home-cardone-imgone" src={`${baseUrl}${blog.image}` || LandingPage_Bg} />
                <div>
                  <span>
                    <p className="badge p-2 admin-home-cardone-header">{blog.category}</p>
                  </span>
                  <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
                </div>
                <div className="card-body">
                  <p className="admin-home-cardone-body">{blog.title}</p>
                  <div className="d-flex">
                    <div className="d-flex landingpage-card-profile-info">
                      <p className="profile-textcolor">{blog.date}</p>
                    </div>
                  </div>
                </div>
                <p className="admin-view-blog-cardone-para">
                  {blog.content} 
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <button className="btn admin-home-container-viewall" onClick={handleViewALLBlogs}>View All &nbsp; &gt;</button>
      </div>
    </div>
  </div>
    // <div className="admin-home-container">
    //   <p className="admin-home-container-head ms-3">View Advertisers Requests</p>
    //   <div className="container">
    //     <table className="admin-home-table-container">
    //       <thead>
    //         <tr className="admin-home-table-color">
    //           <th className="admin-home-table-th">S No</th>
    //           <th className="admin-home-table-th">Name</th>
    //           <th className="admin-home-table-th">Phone Number</th>
    //           <th className="admin-home-table-th">Email</th>
    //           <th className="admin-home-table-th">Company Name</th>
    //           <th className="admin-home-table-th">Business Category</th>
    //           <th className="admin-home-table-th">Action</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {advertisers.map((advertiser, index) => (
    //           <tr className="admin-home-table-tr" key={advertiser.id}>
    //             <td className="admin-home-table-td">{index + 1}</td>
    //             <td className="admin-home-table-td">{advertiser.username}</td>
    //             <td className="admin-home-table-td">{advertiser.contact_number}</td>
    //             <td className="admin-home-table-td">{advertiser.email}</td>
    //             <td className="admin-home-table-td">{advertiser.business_name}</td>
    //             <td className="admin-home-table-td">{advertiser.business_type}</td>
    //             <td className="admin-home-table-td">
    //               <div>
    //                 <Switch
    //                   checked={advertiser.is_active}
    //                   checkedChildren="Active"
    //                   unCheckedChildren="Inactive"
    //                   onChange={(checked) => handleSwitchChange(checked, advertiser.id)}
    //                 />
    //               </div>
    //             </td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>

    //     <div className="d-flex justify-content-end">
    //       <button className="btn admin-home-container-viewall" onClick={handleViewALL}>View All &nbsp; &gt;</button>
    //     </div>
    //   </div>

    //   {/* Recent Blogs Section */}
    //   <div>
    //     <p className="admin-home-container-head ms-3">View Recent Blogs</p>
    //     <div className="d-flex justify-content-center">
    //       <div className="row">
    //         {blogs.map((blog) => (
    //           <div className="card col-sm-3 admin-home-cardsize" key={blog.id}>
    //             <img className="admin-home-cardone-imgone" src={`${baseUrl}${blog.image}` || LandingPage_Bg} />
    //             <div>
    //               <span>
    //                 <p className="badge p-2 admin-home-cardone-header">{blog.category}</p>
    //               </span>
    //               <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
    //             </div>
    //             <div className="card-body">
    //               <p className="admin-home-cardone-body">{blog.title}</p>

    //               <div className="d-flex">
    //                 <div className="d-flex landingpage-card-profile-info">
    //                   <p className="profile-textcolor">{blog.date}</p>
    //                 </div>
    //               </div>
    //             </div>
    //             <p className="admin-view-blog-cardone-para">
    //               {blog.content} 
    //             </p>
    //             {/* <button className="btn admin-home-readmore-button">
    //               Read More <span className="greaterthan-symbol">&gt;</span>
    //             </button> */}
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     <div className="d-flex justify-content-end">
    //       <button className="btn admin-home-container-viewall" onClick={handleViewALLBlogs}>View All &nbsp; &gt;</button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default AdminHome;

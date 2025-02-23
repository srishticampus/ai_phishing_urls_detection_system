import "../../Pages/AdminEditBlog/AdminEditBlog.css"
import img from "../../assets/Images/LandingPage_Bg.png"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { viewBlogs } from "../../Services/apiService";
const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";


function AdminEditBlog() {
  const { id } = useParams(); 
  const [blog, setBlog] = useState(null);


  useEffect(() => {
    const fetchBlogDetails = async () => {
        try {
            const response = await viewBlogs(id); // Fetch the blog details by ID
            setBlog(response.data);
            console.log(response.data)
        } catch (error) {
            console.error("Error fetching blog details for editing:", error);
        }
    };

    fetchBlogDetails();
}, [id]);

if (!blog) {
    return <div>Loading...</div>;
}







  return (
    <div className="admin-edit-blog-container">
    <div className="d-flex justify-content-center">
      <div className="card admin-edit-blog-card">
        <div className="card-header admin-edit-blog-card-header">
          <p className="admin-edit-blog-head">Edit Blog</p>
        </div>
        <div className="card-body">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-4">
              <label className="btn btn-outline-dark admin-edit-blog-dropdown-button form-control">
                Upload Images
                <input type="file" style={{ display: 'none' }} />
                <i className="bi bi-upload ms-5"></i>
              </label>
            </div>

            <div className="col-sm-4">
              <div className="dropdown">
                <button type="button" className="btn btn-outline-dark dropdown-toggle admin-edit-blog-dropdown-button form-control" data-bs-toggle="dropdown">
                  {blog.category || 'Select Category'} 
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Fitness</a></li>
                  <li><a className="dropdown-item" href="#">Health</a></li>
                  <li><a className="dropdown-item" href="#">Nutrition</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
      
        <div className="inside-card-container">
          <hr />
          <div className="d-flex justify-content-center">
            <img className="admin-edit-blog-card-body-img" src={`${baseUrl}${blog.image}`} alt="Blog Image" />
          </div>
          <hr />
          <div className="admin-edit-blog-text-inside-img">

            <p className="admin-edit-blog-text-inside-img-para">{blog.description || 'No description available'}</p> {/* Blog Description */}
          </div>
        </div>

        <div className="container">
        Title: <input type="text" className="form-control" id="blogTitle" value={blog.title}></input>
          <hr />
          Content: <textarea rows={5} cols={50} value={blog.content || 'No content available'} />
          <hr></hr>
          Created At : <input type="date"></input>
          <hr></hr>
          Updated at : <input type="date"></input>
          <hr></hr>


          {/* <p className="admin-edit-blog-card-text-para">{blog.content || 'No content available'}</p>  
          <p className="admin-edit-blog-card-text-para">{blog.created_at || 'No date available'}</p>   */}
        </div>
       
      </div>
    </div>

    {/* Cancel and Update buttons */}
    <div className="d-flex justify-content-center mt-5 mb-5">
      <button className="btn btn-outline-dark admin-edit-blog-button">Cancel</button>
      <button className="btn btn-dark admin-edit-blog-button ms-3">Update</button>
    </div>
  </div>
    
  )
}

export default AdminEditBlog

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { viewBlogs, updateBlog, getInterests } from "../../Services/apiService";
import "../../Pages/AdminEditBlog/AdminEditBlog.css";
import img from "../../assets/Images/LandingPage_Bg.png";
import { useParams , useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

function AdminEditBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({
    title: "",
    content: "",
    category: "",
    image: null,
    created_at: "",
    updated_at: "",
  });
  const [categories, setCategories] = useState([]);
 let navigate = useNavigate();
  // Fetch the blog details and categories
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const blogResponse = await viewBlogs(id);
        setBlog(blogResponse.data);
        setUpdatedBlog(blogResponse.data);

        // Fetch categories after the blog details are loaded
        const categoriesResponse = await getInterests();
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error("Error fetching blog details or categories:", error);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (!blog || !categories.length) {
    return <div>Loading...</div>;
  }

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlog((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleCancel(){
    navigate("/admin-view-blog")
  }

  // Handle file input change for image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUpdatedBlog((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  // Handle category selection
  const handleCategoryChange = (categoryId) => {
    const selectedCategory = categories.find(
      (category) => category.id === categoryId
    );
    setUpdatedBlog((prevState) => ({
      ...prevState,
      category: selectedCategory.id,
    }));
  };

  // Handle update action
  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("title", updatedBlog.title);
      formData.append("content", updatedBlog.content);
      formData.append("category", updatedBlog.category);

      // Only append the image if there's an image selected
      if (updatedBlog.image) {
        formData.append("image", updatedBlog.image);
      }

      await updateBlog(id, formData);
      toast.success("Blog updated successfully!");
    } catch (error) {
      console.error("Error updating the blog:", error);
      toast.error("Failed to update the blog.");
    }
  };

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
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <i className="bi bi-upload ms-5"></i>
                </label>
              </div>

              <div className="col-sm-4">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-dark dropdown-toggle admin-edit-blog-dropdown-button form-control"
                    data-bs-toggle="dropdown"
                  >
                    {updatedBlog.category
                      ? categories.find(
                          (category) => category.id === updatedBlog.category
                        )?.name
                      : "Select Category"}
                  </button>
                  <ul className="dropdown-menu">
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <li key={category.id}>
                          <a
                            className="dropdown-item"
                            href="#"
                            onClick={() => handleCategoryChange(category.id)}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li>No categories available</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="inside-card-container">
            <hr />
            <div className="d-flex justify-content-center">
              <img
                className="admin-edit-blog-card-body-img"
                src={`${baseUrl}${updatedBlog.image ? updatedBlog.image : img}`}
                alt="Blog Image"
              />
            </div>
            <hr />
            <div className="admin-edit-blog-text-inside-img">
              <p className="admin-edit-blog-text-inside-img-para">
                {updatedBlog.description || "No description available"}
              </p>
            </div>
          </div>

          <div className="container">
            Title:{" "}
            <input
              type="text"
              className="form-control"
              id="blogTitle"
              name="title"
              value={updatedBlog.title}
              onChange={handleInputChange}
            />
            <hr />
            Content:{" "}
            <textarea
              rows={5}
              cols={50}
              name="content"
              value={updatedBlog.content || "No content available"}
              onChange={handleInputChange}
            />
            <hr />
            Created At:
            <input
              type="date"
              name="created_at"
              value={updatedBlog.created_at}
              onChange={handleInputChange}
            />
            <hr />
            Updated At:
            <input
              type="date"
              name="updated_at"
              value={updatedBlog.updated_at}
              onChange={handleInputChange}
            />
            <hr />
          </div>
        </div>
      </div>

      {/* Cancel and Update buttons */}
      <div className="d-flex justify-content-center mt-5 mb-5">
        <button className="btn btn-outline-dark admin-edit-blog-button" onClick={handleCancel}>
          Cancel
        </button>
        <button
          className="btn btn-dark admin-edit-blog-button ms-3"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default AdminEditBlog;

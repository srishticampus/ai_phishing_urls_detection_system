import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addBlog, getInterests } from "../../Services/apiService";
import "../../Pages/AdminAddBlog/AdminAddBlog.css";
import { useNavigate } from "react-router";

function AdminAddBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [interests, setInterests] = useState([]);
  const [imageName, setImageName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterests = async () => {
      try {
        const response = await getInterests();
        console.log("API: Response", response);
        setInterests(response.data);
      } catch (error) {
        console.error("Error fetching interests:", error);
        toast.error("Failed to load categories!");
      }
    };

    fetchInterests();
  }, []);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const fileSize = file.size / (1024 * 1024); // Convert size to 2MB - Radhul
      if (fileSize > 2) {
        toast.error("File size must be below 2MB!");
        return;
      }
      setImage(file);
      setImageName(file.name);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if image and category are provided
    if (!image) {
      toast.error("Please upload an image!");
      return;
    }
  
    if (!category) {
      toast.error("Please select a category!");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("interest_id", category);
    formData.append("image", image);
  
    try {
      await addBlog(formData);
      toast.success("Blog added successfully!");
      if(toast.success){
        navigate("/admin-view-blog")
      }
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
      setImageName("");
    } catch (error) {
      toast.error("Error adding blog!");
      console.error(error);
    }
  };
  

  return (
    <div>
      <div className="admin-add-blog-container">
        <div className="d-flex justify-content-center">
          <div className="card admin-add-blog-card">
            <div className="card-header admin-add-blog-card-header">
              <p className="admin-add-blog-head">Add Blogs</p>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row d-flex justify-content-center">
                  <div className="col-sm-4">
                    <label className="btn btn-outline-dark admin-add-blog-dropdown-button form-control">
                      Upload Images
                      <input
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleImageChange}
                      />
                      <i className="bi bi-upload ms-5"></i>
                      {imageName && ( 
                      <div className="mt-2">{imageName}</div>
                    )}
                    </label>
                  </div>

                  <div className="col-sm-4">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn btn-outline-dark dropdown-toggle admin-add-blog-dropdown-button form-control"
                        data-bs-toggle="dropdown"
                      >
                        {categoryName ? categoryName : "Select Category"}
                      </button>
                      <ul className="dropdown-menu">
                        {interests.length > 0 ? (
                          interests.map((interest) => (
                            <li key={interest.id}>
                              <a
                                className="dropdown-item"
                                href="#"
                                // onClick={() => setCategory(interest.id)}
                                 onClick={()=>{setCategory(interest.id);setCategoryName(interest.name)}}
                              >
                                {interest.name}
                              </a>
                            </li>
                          ))
                        ) : (
                          <li>No interests available</li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header admin-add-blog-card-header">
                        <label className="mt-3">Title:</label>
                        <div>
                          <input
                            type="text"
                            className="form-control admin-add-blog-card-title-field"
                            value={title}
                            onChange={handleTitleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header admin-add-blog-card-header">
                        <label className="mt-2">Content:</label>
                        <div>
                          <textarea
                            className="form-control admin-add-blog-card-content-field"
                            rows="5"
                            value={content}
                            onChange={handleContentChange}
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer admin-add-blog-card-footer">
                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-dark admin-add-blog-edit-button"
                    >
                      Add Blog
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAddBlog;

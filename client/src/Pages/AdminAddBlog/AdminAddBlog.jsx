import { useState, useEffect } from "react";
import { addBlog, getInterests } from "../../Services/apiService"; 
import "../../Pages/AdminAddBlog/AdminAddBlog.css";

function AdminAddBlog() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("LifeStyle");
    const [image, setImage] = useState(null);
    const [interests, setInterests] = useState([]); // State to store interests

    // Fetch the interests when the component mounts
    useEffect(() => {
        const fetchInterests = async () => {
            try {
                const response = await getInterests();
                console.log("API: Response",response)
                setInterests(response.data);
            } catch (error) {
                console.error("Error fetching interests:", error);
            }
        };

        fetchInterests();
    }, []);

    const handleTitleChange = (event) => setTitle(event.target.value);
    const handleContentChange = (event) => setContent(event.target.value);
    const handleImageChange = (event) => setImage(event.target.files[0]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);
        if (image) formData.append("image", image);

        try {
            await addBlog(formData);
            alert("Blog added successfully!");
            setTitle("");
            setContent("");
            setCategory("LifeStyle");
            setImage(null);
        } catch (error) {
            alert("Error adding blog!");
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
                                        </label>
                                    </div>

                                    <div className="col-sm-4">
                                        <div className="dropdown">
                                            <button
                                                type="button"
                                                className="btn btn-outline-dark dropdown-toggle admin-add-blog-dropdown-button form-control"
                                                data-bs-toggle="dropdown"
                                            >
                                                {category}
                                            </button>
                                            <ul className="dropdown-menu">
                                                {/* Map over interests to populate dropdown */}
                                                {interests.length > 0 ? (
                                                    interests.map((interest) => (
                                                        <li key={interest.id}>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                                onClick={() => setCategory(interest.name)}
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
                                        <button type="submit" className="btn btn-dark admin-add-blog-edit-button">
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

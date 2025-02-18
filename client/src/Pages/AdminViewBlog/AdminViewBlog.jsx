import "../../Pages/AdminViewBlog/AdminViewBlog.css";
import tabler_photo from '../../assets/Images/tabler_photo.png';
import { viewBlogs } from "../../Services/apiService";
import { useState, useEffect } from 'react';
const baseUrl = import.meta.env.VITE_API_URL;

function AdminViewBlog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await viewBlogs();
                console.log('Full API response:', response);
                setBlogs(Array.isArray(response.data) ? response.data : []);
                console.log(response.data);
                console.log("blogs",blogs)
            } catch (error) {
                console.error("Error fetching blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="admin-view-blog-container">
                <p className="admin-home-container-head ms-3">View Blogs</p>
                <div className="d-flex justify-content-center">
                    <div className="row">
   
                        {blogs.length === 0 ? (
                            <div className="col-12">
                                <p>No Blogs Added OR Check Authorization</p>
                            </div>
                        ) : (
                          
                            blogs.map((blog) => (
                                <div key={blog.id} className="card col-sm-3 admin-view-cardsize">
                                    {/* <img className="admin-view-blog-cardone-imgone" src={blog.image} alt="Blog cover" /> */}
                                    <img className="admin-view-blog-cardone-imgone" src={`${baseUrl}${blog.image}`} alt="Blog cover" />


                                    <div>
                                        <span>
                                            <p className="badge p-2 admin-view-blog-cardone-header">
                                                {blog.category || 'Category'}
                                            </p>
                                        </span>
                                        <img className="admin-view-blog-cardone-headerone" src={tabler_photo} alt="tabler" />
                                    </div>
                                    <div className="card-body">
                                        <p className="admin-view-blog-cardone-body">{blog.title || 'Title'}</p>
                                        <div className="d-flex">
                                            <div className="d-flex landingpage-card-profile-info">
                                                <p className="profile-textcolor">{"june 28,2018"}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="admin-view-blog-cardone-para">{blog.content || 'Blog description goes here.'}</p>
                                    <button className="btn admin-view-blog-readmore-button">
                                        Read More <span className="greaterthan-symbol">&gt;</span>
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminViewBlog;

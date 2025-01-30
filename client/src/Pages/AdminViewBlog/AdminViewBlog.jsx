import "../../Pages/AdminViewBlog/AdminViewBlog.css"
// import LandingP_card_one from '../../assets/Images/LandingP_card_one.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';
import { viewBlogs } from "../../Services/apiService";
import { useState, useEffect } from 'react';

function AdminViewBlog() {


 const [blogs, setBlogs] = useState([]); 
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await viewBlogs(); 
                setBlogs(response.data); 
                console.log(response.data)
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
                        {blogs.map((blog) => (
                            <div key={blog.id} className="card col-sm-3 admin-view-cardsize">
                                <img className="admin-view-blog-cardone-imgone" src={LandingPage_Bg} alt="Blog cover" />
                                <div>
                                    <span>
                                        <p className="badge p-2 admin-view-blog-cardone-header">
                                            {blog.category || 'Category'} 
                                        </p>
                                    </span>
                                    <img className="admin-view-blog-cardone-headerone" src={tabler_photo} alt="tabler" />
                                </div>
                                <div className="card-body">
                                    <p className="admin-view-blog-cardone-body">{blog.title}</p> {/* Assuming the blog has a title */}
                                    <div className="d-flex">
                                        <div className="d-flex landingpage-card-profile-info">
                                            <p className="profile-textcolor">{blog.date || 'Date'}</p> {/* Assuming the blog has a date */}
                                        </div>
                                    </div>
                                </div>
                                <p className="admin-view-blog-cardone-para">{blog.description || 'Blog description goes here.'}</p>
                                <button className="btn admin-view-blog-readmore-button">
                                    Read More <span className="greaterthan-symbol">&gt;</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div className="admin-view-blog-container">
                <p className="admin-home-container-head ms-3">View Blogs</p>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="card col-sm-3 admin-view-cardsize">
                            <img className="admin-view-blog-cardone-imgone" src={LandingPage_Bg} />
                            <div>
                                <span><p className="badge  p-2 admin-view-blog-cardone-header">Food & Cooking</p></span>
                                <img className="admin-view-blog-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-view-blog-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">
                                        <p className="profile-textcolor">June 28, 2018</p>
                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn admin-view-blog-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>
                        <div className="card col-sm-3 admin-view-cardsize">
                            <img src={LandingP_card_one} />
                            <div>
                                <span><p className="badge  p-2 admin-view-blog-cardone-header">Travel & Adventure</p></span>
                                <img className="admin-view-blog-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-view-blog-cardone-body">Integer Maecenas Eget Viverra
                                </p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">

                                        <p className="profile-textcolor">June 28, 2018</p>

                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                            </p>
                            <button className=" btn admin-view-blog-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>
                        <div className="card col-sm-3 admin-view-cardsize">
                            <img src={LandingP_card_one} />
                            <div>
                                <span><p className="badge  p-2 admin-view-blog-cardone-header">Travel & Adventure</p></span>
                                <img className="admin-view-blog-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-view-blog-cardone-body">Integer Maecenas Eget Viverra
                                </p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">

                                        <p className="profile-textcolor">June 28, 2018</p>

                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
                            </p>
                            <button className=" btn admin-view-blog-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>
               

                    </div>

                </div>

            </div> */}

        </div>
    )
}

export default AdminViewBlog

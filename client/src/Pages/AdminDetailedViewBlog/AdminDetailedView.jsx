import "../../Pages/AdminDetailedViewBlog/AdminDetailedView.css"
import img from "../../assets/Images/LandingPage_Bg.png"
import { viewBlogs, deleteBlog } from "../../Services/apiService";
import { useParams ,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
const baseUrl = import.meta.env.VITE_API_URL;


function AdminDetailedView() {
    const { id } = useParams(); // Get the blog ID from the URL
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await viewBlogs(id); // Fetch the blog details by ID
                setBlog(response.data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
            }
        };

        fetchBlogDetails();
    }, [id]);

    const handleDelete = async () => {
        console.log("Deleting blog with ID:", id); // Log ID to check if it's correct
        const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
        if (confirmDelete) {
            try {
                const response = await deleteBlog(id); // Ensure ID is passed here
                console.log("Delete Blog Response:", response);
                if (response.success) {
                    alert('Blog deleted successfully!');
                    navigate('/admin-view-blog');
                } else {
                    alert('Error deleting the blog');
                }
            } catch (error) {
                console.error("Error deleting the blog:", error);
                alert('Error deleting the blog');
            }
        }
    };
    

    if (!blog) {
        return <div>Loading...</div>;
    }

    return (
        <>
         <div className="admin-detailed-view-container">
            <p className="admin-detailed-view-head">View Blog Details</p>
            <div className="admin-detailed-img-container">
                <div className="d-flex justify-content-center">
                    <img className="admin-detailed-view-image" src={`${baseUrl}${blog.image}`} alt="image" />
                </div>
            </div>

            <div className="d-flex justify-content-start admin-detailed-view-paragraph-head-container">
                <p className="admin-detailed-view-paragraph-head mt-5">{blog.title}</p>
            </div>
            <div className="admin-detailed-view-para-container">
                <p className="admin-detailed-view-para">{blog.content}</p>
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button className="btn btn-outline-dark admin-detailed-view-edit-delete-button" onClick={handleDelete}>Delete</button>
                <button className="btn btn-dark admin-detailed-view-edit-delete-button ms-3">Edit</button>
            </div>
        </div>
        </>
        // <div className="admin-detailed-view-container">
        //     <p className="admin-detailed-view-head">View Blog Details</p>
        //     <div className="admin-detailed-img-container">
        //         <div className="d-flex justify-content-center">
        //             <img className="admin-detailed-view-image" src={img} alt="image" />
        //         </div>
        //         <div className="admin-detailed-blog-text-inside-img">
        //             <p className="admin-detailed-blog-text-inside-img-head">Cook with Passion, Eat with Joy</p>
        //             <p className="admin-detailed-blog-text-inside-img-para">
        //                 Explore a diverse range of content that enlightens, entertains, and inspires with every read.
        //                 Uncover fresh ideas, new perspectives, and engaging content with every visit.
        //             </p>
        //         </div>
        //     </div>

        //     <div className="d-flex justify-content-start admin-detailed-view-paragraph-head-container">
        //         <p className="admin-detailed-view-paragraph-head mt-5">Achieving Optimal Health and Fitness: Your <br></br> Ultimate Guide</p>
        //     </div>
        //     <div className="admin-detailed-view-para-container">
        //         <p className="admin-detailed-view-para"> In this extensive guide, we delve into the key principles of health and fitness to help you achieve your wellness goals. From understanding nutrition essentials to designing effective workout routines, this blog covers everything you need to know to embark on a journey towards a healthier lifestyle.</p>
        //     </div>
        //     <div className="admin-detailed-view-para-container">
        //         <p className="admin-detailed-view-nutrition-essential">Nutrition Essentials</p>
        //         <p className="admin-detailed-view-balanced-diet">1. Balanced Diet Basics</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para"> A balanced diet includes essential nutrients such as proteins, carbohydrates, fats, vitamins, and minerals. Each plays a crucial role in maintaining overall health and supporting bodily functions.</p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">2.Importance of Hydration</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para">Water is vital for cellular function, temperature regulation, and digestion. Tips for staying hydrated and recognizing signs of dehydration are discussed.</p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">3. Nutritional Supplements</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para"> Supplements can complement a diet but should not replace whole foods. Discuss common supplements like multivitamins, omega-3 fatty acids, and their benefits when used appropriately.</p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">4. Meal Planning Strategies</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para">Effective meal planning helps in achieving nutritional goals, managing weight, and saving time. Includes tips for preparing balanced meals and healthy snacks.</p>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="admin-detailed-view-para-container">
        //         <p className="admin-detailed-view-nutrition-essential mt-5">Fitness and Exercise</p>
        //         <p className="admin-detailed-view-balanced-diet">1. Creating a Fitness Plan</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para">Designing a personalized fitness plan involves setting realistic goals, choosing suitable exercises, and scheduling workouts. Emphasis on incorporating cardiovascular, strength training, and flexibility exercises. </p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">2. Importance of Regular Exercise</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para">Benefits of exercise extend beyond weight management to include improved cardiovascular health, mental well-being, and enhanced overall quality of life.</p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">3. Workout Techniques and Safety</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para"> Proper form and technique reduce the risk of injury during exercise. Includes demonstrations of basic exercises and tips for beginners.</p>
        //             </li>
        //         </ul>
        //         <p className="admin-detailed-view-balanced-diet">4. Mind-Body Connection</p>
        //         <ul className="admin-detailed-view-ul">
        //             <li>
        //                 <p className="admin-detailed-view-balanced-diet-para">The link between mental health and physical fitness is explored, highlighting how activities like yoga and meditation promote holistic well-being.</p>
        //             </li>
        //         </ul>
        //     </div>
        //     <div className="d-flex justify-content-center mb-5">
        //         <button className="btn btn-outline-dark admin-detailed-view-edit-delete-button">Delete</button>
        //         <button className="btn btn-dark admin-detailed-view-edit-delete-button ms-3 ">Edit</button>
        //     </div>
        // </div>
    )
}

export default AdminDetailedView

import "../UserHomepageCardDetails/UserHomepageCardDetails.css"
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewBlogs } from "../../Services/apiService";

const UserHomepageCardDetails = () => {
  const { id } = useParams();  // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await viewBlogs(id); // Fetch data using the ID
        setBlog(response.data);  // Assuming the API returns the full blog object
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blog details',error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);  // Refetch if the ID changes (in case of navigating to a new blog)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!blog) return <div>No blog found</div>;

  return (

    <div className="card user-homepage-details-card w-100">
      <img 
        className="user-homepage-cardone-imgone" 
        src={`${baseUrl}${blog.image}`} 
        alt={blog.title} 
      />
      <div className="card-body">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>Interest: {blog.interests.name}</p>
        <p>Created at: {new Date(blog.created_at).toLocaleDateString()}</p>
        {/* Add more fields from your blog data as needed */}
      </div>
    </div>
  );
};

export default UserHomepageCardDetails;

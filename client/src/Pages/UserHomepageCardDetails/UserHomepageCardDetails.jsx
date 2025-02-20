import "../UserHomepageCardDetails/UserHomepageCardDetails.css"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewBlogs } from "../../Services/apiService";

const UserHomepageCardDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await viewBlogs(id);
        setBlog(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch blog details', error);
        setLoading(false);
      }
    };

    fetchBlogDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!blog) return <div>No blog found</div>;

  return (

   <div className="user-homepage-details-body">
     <div className="card user-homepage-details-card w-100">
      <img
        className="user-homepage-cardone-imgone"
        src={`${baseUrl}${blog.image}`}
        alt={blog.title}
      />
      <div className="card-body">
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
       <p>Created at: {new Date(blog.created_at).toLocaleDateString()}</p>

      </div>
    </div>
   </div>

  );
};

export default UserHomepageCardDetails;

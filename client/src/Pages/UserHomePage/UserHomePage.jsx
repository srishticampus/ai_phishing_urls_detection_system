import "../../Pages/UserHomePage/UserHomePage.css";
import { useEffect, useState } from "react";
import { advertisementSafetyCheck, advertisementMatchingInterest, viewBlogsMatchingInterests } from "../../Services/apiService";
import { useNavigate } from "react-router-dom";
import left from "../../assets/Images/left.png";
import right from "../../assets/Images/right.png";
import homepage from "../../assets/Images/homapageimg.png";
import tabler_photo from "../../assets/Images/tabler_photo.png";
import LandingPage_Bg from "../../assets/Images/LandingPage_Bg.png";

function UserHomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [matchingAds, setMatchingAds] = useState([]);
  const [displayedAds, setDisplayedAds] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isAdSafe, setIsAdSafe] = useState(null);
  const [adLink, setAdLink] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [safeMode, setSafeMode] = useState(localStorage.getItem("safeMode") === "true");
  const [prediction, setPrediction] = useState("");
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_API_URL;

  // ✅ Listen for Safe Mode changes
  useEffect(() => {
    const updateSafeMode = () => {
      setSafeMode(localStorage.getItem("safeMode") === "true");
    };
    window.addEventListener("safeModeChanged", updateSafeMode);
    return () => window.removeEventListener("safeModeChanged", updateSafeMode);
  }, []);

  // ✅ Fetch blogs matching user's interests
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await viewBlogsMatchingInterests();
        console.log("Full Response Data:", response); // Log the full response to inspect it
        console.log("Response Data:", response.data); // Log only the data part
        setBlogs(response.data);
      } catch (err) {
        setError("Failed to fetch blogs", err);
        console.log("Failed to fetch blogs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  
  

  // ✅ Fetch and sort ads (newest first) & set up auto-cycling
  useEffect(() => {
    const fetchMatchingAds = async () => {
      try {
        const response = await advertisementMatchingInterest();
        const sortedAds = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setMatchingAds(sortedAds);
        setDisplayedAds(sortedAds.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch matching ads:", err);
      }
    };
    fetchMatchingAds();
  }, []);

  // ✅ Auto-cycle ads every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (matchingAds.length > 4) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % matchingAds.length);
        setDisplayedAds(matchingAds.slice(currentIndex, currentIndex + 4));
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [matchingAds, currentIndex]);

  const handleBlogClick = (id) => {
    navigate(`/user-homepage-card-details/${id}`);
  };

  // ✅ Handle advertisement click
  const handleCardClick = async (adId, adLink) => {
    setAdLink(adLink);

    if (!safeMode) {
      window.open(adLink, "_blank", "noopener,noreferrer");
      return;
    }

    try {
      const response = await advertisementSafetyCheck(adId);
      const predicted = response.data.prediction?.toLowerCase();
      setPrediction(predicted);
      setIsAdSafe(predicted === "benign");
      setShowModal(true);
    } catch (error) {
      console.error("Error checking advertisement safety:", error);
      setIsAdSafe(false);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container user-homepage-container">
      <div className="row">
        {/* Left Side */}
        <div className="col-sm-9">
          {/* Carousel */}
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="user-homepage-div1">
                  <div className="d-flex justify-content-between">
                    <img src={left} alt="Left" />
                    <img src={right} alt="Right" />
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <img src={homepage} alt="Homepage" />
                    </div>
                    <div className="col-sm-6">
                      <p className="user-homepage-div1-head">Explore. Express. <br /> Elevate.</p>
                      <p className="user-homepage-div1-para">
                        Explore a diverse range of content that enlightens, entertains, and inspires with every read.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blogs */}
         
          <div className="row mt-5">
          <p className="user-homepage-our-recent-blogs">Our Recent Blogs</p>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <div key={blog.id} className="card col-sm-2 user-homepage-cardsize" onClick={() => handleBlogClick(blog.id)} >
                  <img className="user-homepage-cardone-imgone" src={`${baseUrl}${blog.image}` || LandingPage_Bg} alt={blog.title} />
                  <div>
                    <p className="badge p-2 user-homepage-cardone-header">{blog.interests.name || "Unknown Interest"}</p>
                    <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="Tabler" />
                  </div>
                  <div className="card-body">
                    <p className="user-homepage-cardone-body">{blog.title || "No Title"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No blogs available</p>
            )}
          </div>
        </div>

        {/* Right Side (Advertisements) */}
        <div className="col-sm-3">
          <div className="cards-container">
            {displayedAds.length > 0 ? (
              displayedAds.map((ad) => (
                <div key={ad.id} className="card user-homepage-card-size" onClick={() => handleCardClick(ad.id, ad.link)}>
                  <img className="homepage-card-img-size mb-5" src={`${baseUrl}${ad.ad_image}`} alt="Advertisement" />
                </div>
              ))
            ) : (
              <p>No ads available</p>
            )}
          </div>
        </div>
      </div>

      {/* Safety Check Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block", opacity: 1 }} tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{isAdSafe ? "Safe Mode is ON" : "⚠️ Warning: Unsafe Link"}</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p>{isAdSafe ? "✅ This link is Safe (Benign)." : `⚠️ This link is Unsafe (${prediction}). Proceed with caution!`}</p>
                <p><strong>Ad Link:</strong><br /><a href={adLink} target="_blank" rel="noopener noreferrer">{adLink}</a></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                <a href={adLink} target="_blank" rel="noopener noreferrer" className={`btn ${isAdSafe ? "btn-success" : "btn-danger"}`}>
                  {isAdSafe ? "Proceed" : "Proceed at Your Own Risk"}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserHomePage;

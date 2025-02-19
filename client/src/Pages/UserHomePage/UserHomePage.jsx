import "../../Pages/UserHomePage/UserHomePage.css";
import adv from "../../assets/Images/advertisement.png";
import card_profile from "../../assets/Images/card_profile.png";
import tabler_photo from "../../assets/Images/tabler_photo.png";
import Group from "../../assets/Images/Group.png";
import left from "../../assets/Images/left.png";
import right from "../../assets/Images/right.png";
import homepage from "../../assets/Images/homapageimg.png";
import personlap from "../../assets/Images/personlap.png";
import LandingPage_Bg from "../../assets/Images/LandingPage_Bg.png";
import LandingPage_Bg_4 from "../../assets/Images/LandingPage_Bg_4.png";
import LandingPageBg_6 from "../../assets/Images/LandingPageBg_6.png";
import LandingPageBg_3 from "../../assets/Images/LandingPageBg_3.png";
import LandingPageBg_2 from "../../assets/Images/LandingPageBg_2.png";
import LandingPageBg_5 from "../../assets/Images/LandingPageBg_5.png";
import ads1 from "../../assets/Images/ads1.png";
import div3img from "../../assets/Images/div3img.png";
import sideimg1 from "../../assets/Images/sideimg1.png";
import sideimg2 from "../../assets/Images/sideimg2.png";
import sideimg3 from "../../assets/Images/sideimg3.png";
import { useEffect, useState } from "react";
import { viewBlogs } from "../../Services/apiService";
import { useNavigate } from "react-router-dom";
import { advertisementSafetyCheck } from "../../Services/apiService";

function UserHomePage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [isAdSafe, setIsAdSafe] = useState(null); // Store the safety status
  const [adLink, setAdLink] = useState(""); // Store the ad link

  const [safeMode, setSafeMode] = useState(true);
  const [showModal, setShowModal] = useState(false); // Modal state

  useEffect(() => {
    const storedSafeMode = localStorage.getItem("safeMode");
    if (storedSafeMode === "false") {
      setSafeMode(false);
    }
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await viewBlogs(); // or viewBlogs(id) if you have a specific ID
        console.log(response.data); // Logs the data array
        setBlogs(response.data); // Correctly set the response data (the blogs array)
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch blogs", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once when the component mounts

  const handleReadMoreClick = (id) => {

    navigate(`/user-homepage-card-details/${id}`);
  };
  const handleCardClick = async (adId, adLink) => {
    setAdLink(adLink);

    if (safeMode) {

      try {
        const response = await advertisementSafetyCheck(adId);
        console.log("safety",response)
        if (response.is_safe) {
          setIsAdSafe(true);
        } else {
          setIsAdSafe(false);
        }
        setShowModal(true);
      } catch (error) {
        console.error("Error checking advertisement safety:", error);
        setIsAdSafe(false);
        setShowModal(true);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container user-homepage-container">
      <div className="row">
        <div className="col-sm-9">

          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="user-homepage-div1">
                  <div className="d-flex justify-content-between">
                    <div>
                      <img src={left} alt="Left" />
                    </div>
                    <div>
                      <img src={right} alt="Right" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <img src={homepage} alt="Homepage" />
                    </div>
                    <div className="col-sm-6">
                      <p className="user-homepage-div1-head">
                        Explore. Express. <br /> Elevate.
                      </p>
                      <p className="user-homepage-div1-para">
                        Explore a diverse range of content that enlightens,
                        entertains, and inspires with every read. Uncover fresh
                        ideas, new perspectives, and engaging content with every
                        visit.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-5">
                    <div className="user-homepage-div1-bar">
                      <p>
                        “The Ultimate Destination for Readers Who Crave
                        Inspiration.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="user-homepage-div1-carousel">
                  <div>
                    <img src={left} />
                  </div>
                  <div className="row mt-5">
                    <div className="col-sm-6">
                      <p className="user-homepage-div1-carousel-para">
                        Your Daily Dose of Insight and Inspirations
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <img
                        className="user-homepage-div1-carousel-personlap"
                        src={personlap}
                        alt="Person"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-item">
                <div className="user-homoepage-div1-carousel3">
                  <div className="overlay-text">
                    <p className="user-homepage-overlay-text-head">
                      From Thoughts to Trends
                    </p>
                    <p className="user-homepage-overlay-text-para">
                      Explore a diverse range of content that enlightens,
                      entertains, and inspires with every read. Uncover fresh
                      ideas, new perspectives, and engaging content with every
                      visit.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-top-left"
                        src={LandingPageBg_3}
                        alt="LandingPageBg_3"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size"
                        src={LandingPage_Bg_4}
                        alt="LandingPage_Bg_4"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-top-right"
                        src={LandingPageBg_5}
                        alt="LandingPageBg_5"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-bottom-left"
                        src={LandingPageBg_2}
                        alt="LandingPageBg_2"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size"
                        src={LandingPage_Bg}
                        alt="LandingPage_Bg"
                      />
                    </div>
                    <div className="col-sm-4">
                      <img
                        className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-bottom-right"
                        src={LandingPageBg_6}
                        alt="LandingPageBg_6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="row">
            <div className="row">
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="card col-sm-2 user-homepage-cardsize"
                  >
                    <img
                      className="user-homepage-cardone-imgone"
                      src={`${baseUrl}${blog.image}` || LandingPage_Bg}
                      alt={blog.title}
                    />
                    <div>
                      <span>
                        <p className="badge p-2 user-homepage-cardone-header">
                          {blog.interests.name || "Unknown Interest"}
                        </p>
                      </span>
                      <img
                        className="user-homepage-cardone-headerone"
                        src={tabler_photo}
                        alt="Tabler"
                      />
                    </div>
                    <div className="card-body">
                      <p className="user-homepage-cardone-body">
                        {blog.title || "No Title"}
                      </p>
                      <div className="d-flex">
                        <div className="d-flex user-homepage-card-profile-info">
                          <img
                            className="user-homepage-card-profile-img"
                            src={card_profile}
                            alt="Profile"
                          />
                          <p className="user-homepage-card-profilename">
                            {blog.author || "Author Name"}
                          </p>
                          <span>
                            <div className="user-homepage-profile-rectangle"></div>
                          </span>
                          <p className="user-homepage-profile-textcolor">
                            {new Date(blog.created_at).toLocaleDateString() ||
                              "Unknown Date"}
                          </p>
                          <span>
                            <div className="user-homepage-profile-textcolortwo"></div>
                          </span>
                          <span>
                            <img src={Group} alt="Group" />
                          </span>
                          <p className="user-homepage-share-color">
                            {blog.shares || "0"} shares
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="user-homepage-cardone-para">
                      {blog.content || "No content available"}
                    </p>
                    <button
                      className="btn user-homepage-readmore-button"
                      onClick={() => handleReadMoreClick(blog.id)} // Call the function with the blog ID
                    >
                      Read More <span className="greaterthan-symbol">&gt;</span>
                    </button>
                  </div>
                ))
              ) : (
                <p>No blogs available</p>
              )}
            </div>

            <div className="row">
              <div className="card col-sm-12 p-3 user-homepage-above-footer-card">
                <p className="user-homepage-div3-head">You may also like</p>
                <div className="row">
                  <div className="col-sm-8">
                    <img src={div3img} />
                  </div>
                  <div className="col-sm-4">
                    <div className="row d-flex">
                      <div className="col-sm-6">
                        <div>
                          <img
                            className="user-homepage-div3-right-img"
                            src={sideimg1}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <p className="user-homepage-div3-right-img-sub">
                            Love juice Season Priemere
                          </p>
                          <p className="user-homepage-div3-right-img-sub-two">
                            21 March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex mt-4">
                      <div className="col-sm-6">
                        <div>
                          <img
                            className="user-homepage-div3-right-img"
                            src={sideimg2}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <p className="user-homepage-div3-right-img-sub">
                            Akame Ga Kill: Season finale
                          </p>
                          <p className="user-homepage-div3-right-img-sub-two">
                            21 March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex mt-4">
                      <div className="col-sm-6">
                        <div>
                          <img
                            className="user-homepage-div3-right-img"
                            src={sideimg3}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <p className="user-homepage-div3-right-img-sub">
                            Naruto Uzumaki: Hidden Village
                          </p>
                          <p className="user-homepage-div3-right-img-sub-two">
                            21 March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row d-flex mt-4">
                      <div className="col-sm-6">
                        <div>
                          <img
                            className="user-homepage-div3-right-img"
                            src={sideimg2}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div>
                          <p className="user-homepage-div3-right-img-sub">
                            Love juice Season Priemere
                          </p>
                          <p className="user-homepage-div3-right-img-sub-two">
                            21 March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-home-page-div-3-sub-container">
                  <p className="user-homepage-div3-sub-1">1 Month Ago </p>
                  <p className="user-homepage-div3-sub-2">
                    Tick one more destination off of your bucket list with one
                    of our <br></br>most popular vacations in 2022
                  </p>
                  <p className="user-homepage-div3-sub-3">
                    lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                    eleifend sed ex.<br></br> Donec quis magna sed felis
                    elementum blandit nec quis sem. Maecen.
                  </p>
                </div>
              </div>
            </div>

            {/* Modal */}
            {showModal && (
              <div
                className="modal fade show"
                style={{ display: "block", opacity: 1 }}
                tabIndex="-1"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">
                        {isAdSafe ? "Safe Mode is ON" : "Warning: Unsafe Link"}
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {isAdSafe ? (
                        <p>
                          The advertisement link ({adLink}) is safe to visit.
                        </p>
                      ) : (
                        <p>
                          The advertisement link ({adLink}) is unsafe. Please proceed with caution.
                        </p>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-sm-3">
          <div className="cards-container">
            {/* First card */}
            <div
              className="card user-homepage-card-size"
              onClick={() => handleCardClick(1, "https://example.com/advertisement1")} // Pass the correct ad ID and link
            >
              <img
                className="homepage-card-img-size mb-5"
                src={adv}
                alt="Advertisement"
              />
            </div>

            {/* Second card */}
            <div
              className="card user-homepage-card-size"
              onClick={() => handleCardClick(5, "https://example.com/advertisement2")} // Pass the correct ad ID and link
            >
              <img
                className="homepage-card-img-size"
                src={ads1}
                alt="Advertisement"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserHomePage;

import { useEffect, useState } from 'react';
import './Landpage.css';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';
import LandingP_card_one from '../../assets/Images/LandingP_card_one.png';
import LandingP_Bg_two from '../../assets/Images/LandingPageBg_2.png';
import card_profile from '../../assets/Images/card_profile.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import Group from '../../assets/Images/Group.png';
import LandingP_Bg_three from '../../assets/Images/LandingPageBg_3.png';
import LandingP_Bg_four from '../../assets/Images/LandingPage_Bg_4.png';
import LandingPage_Bg_five from '../../assets/Images/LandingPageBg_5.png';
import LandingPage_Bg_six from '../../assets/Images/LandingPageBg_6.png';
import { viewBlogs } from "../../Services/apiService"; 
const baseUrl = import.meta.env.VITE_API_URL;

function LandingPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await viewBlogs(); // Fetch the blogs
      if (response.success) {
        setBlogs(response.data); // Set the blogs data if successful
        console.log(response.data);
      } else {
        setBlogs([]); // Set empty array if no data is returned
      }
    };

    fetchBlogs(); // Call the function to fetch the blogs
  }, []);

  return (
    <>
      <div className="landingpage-section-one">
        <div id="landingPageCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Carousel Item 1 */}
            <div className="carousel-item active">
              <img className="d-block w-100 landingpage-bgimg" src={LandingPage_Bg} alt="Landing Page Background" />
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>

            {/* Carousel Item 2 */}
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_two} alt="Landing Page Background" />
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>

            {/* Carousel Item 3*/}
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_three} alt="Landing Page Background" />
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>
            
            {/* Additional Carousel Items */}
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_four} alt="Landing Page Background" />
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>
            {/* Other Carousel Items */}
          </div>
        </div>
      </div>

      <div className="landingpage-section-two">
        <p className="landingpage-sectwo-head mb-5">Our Recent Blogs...</p>
        <div className="container">
          <div className="row">
            {/* Displaying Blogs */}
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <div className="card col-sm-3 landingpage-cardsize" key={index}>
                  <img className="landingpage-cardone-imgone" src={`${baseUrl}${blog.image}` || LandingP_card_one} alt="Blog" />
                  <div>
                    <span><p className="badge p-2 cardone-header">{blog.category}</p></span>
                    <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
                  </div>
                  <div className="card-body">
                    <p className="landingpage-cardone-body">{blog.title}</p>
                    <p className="landingpage-cardone-body">{blog.content}</p>
                    <div className="d-flex">
                      <div className="d-flex landingpage-card-profile-info">
                        <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                        <p className="landingpage-card-profilename">{blog.author}</p>
                        <span><div className="profile-rectangle"></div></span>
                        <p className="profile-textcolor">{blog.date}</p>
                        <span><div className="profile-textcolortwo"></div></span>
                        <span><img src={Group} alt="Group" /></span>
                        <p className="share-color">{blog.shares} shares</p>
                      </div>
                    </div>
                  </div>
                  <p className="landingpage-cardone-para">{blog.excerpt}</p>
                  <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                </div>
              ))
            ) : (
              <p>No blogs available at the moment.</p>
            )}
          </div>

          {/* Dummy Cards with Static Images */}
          <div className="row mt-5">
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Lifestyle</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Create a Cozy and Stylish Space</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">John Doe</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 20, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">500 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Tips on decorating your home with cozy vibes.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>

            {/* More dummy cards */}
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Quick and Easy Recipes</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Jane Smith</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 15, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">300 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Try these simple recipes for your next meal.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Quick and Easy Recipes</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Jane Smith</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 15, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">300 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Try these simple recipes for your next meal.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Quick and Easy Recipes</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Jane Smith</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 15, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">300 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Try these simple recipes for your next meal.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Quick and Easy Recipes</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Jane Smith</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 15, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">300 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Try these simple recipes for your next meal.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingP_card_one} />
              <div>
                <span><p className="badge p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Quick and Easy Recipes</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Jane Smith</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">February 15, 2025</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">300 shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Try these simple recipes for your next meal.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            



            {/* You can continue adding dummy cards similarly */}
          </div>

          <button className="btn landingpage-sectiontwo-button">Load More</button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

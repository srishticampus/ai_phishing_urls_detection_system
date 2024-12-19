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

function LandingPage() {
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

            {/* Carousel Item 2 (optional) */}
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_two} alt="Landing Page Background" />
              {/* Add your second background content here if needed */}
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>

            {/* Carousel Item 3 (optional) */}
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_three} alt="Landing Page Background" />
              {/* Add your third background content here if needed */}
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>

            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingP_Bg_four} alt="Landing Page Background" />
              {/* Add your third background content here if needed */}
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingPage_Bg_five} alt="Landing Page Background" />
              {/* Add your third background content here if needed */}
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 landingpage-bgimg" src={LandingPage_Bg_six} alt="Landing Page Background" />
              {/* Add your third background content here if needed */}
              <div className="landingpage-bgimg-container">
                <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
                <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
                <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
                <button className="landingpage-bgimg-button">Explore Now</button>
              </div>
            </div>
          </div>
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#landingPageCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#landingPageCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>

      <div className="landingpage-section-two">
        <p className="landingpage-sectwo-head mb-5">Our Recent Blogs...</p>
        <div className="container">
          <div className="row">
            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingPage_Bg} />
              <div>
                <span><p className="badge  p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Budget Sacrificing Experience</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
              <button className="btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            {/* Add more blog cards here */}
            <div className="card col-sm-3 landingpage-cardsize">
              <img src={LandingP_card_one} />
              <div>
                <span><p className="badge  p-2 cardone-header">Travel & Adventure</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Integer Maecenas Eget Viverra
                </p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className=" btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img src={LandingP_card_one} />
              <div>
                <span><p className="badge  p-2 cardone-header">Lifestyle</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Create a Cozy and Stylish Space
                </p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className=" btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>

          </div>
          <div className="row mt-5">

            <div className="card col-sm-3 landingpage-cardsize">
              <img src={LandingP_card_one} />
              <div>
                <span><p className="badge  p-2 cardone-header">Lifestyle</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Integer Maecenas Eget Viverra</p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className=" btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>

            <div className="card col-sm-3 landingpage-cardsize">
              <img className="landingpage-cardone-imgone" src={LandingPage_Bg} />
              <div>
                <span><p className="badge  p-2 cardone-header">Food & Cooking</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Budget Sacrificing Experience
                </p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className=" btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>
            <div className="card col-sm-3 landingpage-cardsize">
              <img src={LandingP_card_one} />
              <div>
                <span><p className="badge  p-2 cardone-header">Travel & Adventure</p></span>
                <img className="cardone-headerone" src={tabler_photo} alt="tabler" />
              </div>
              <div className="card-body">
                <p className="landingpage-cardone-body">Create a Cozy and Stylish Space
                </p>
                <div className="d-flex">
                  <div className="d-flex landingpage-card-profile-info">
                    <img className="landingpage-card-profile-img" src={card_profile} alt="Profile" />
                    <p className="landingpage-card-profilename">Joanna Wellick</p>
                    <span><div className="profile-rectangle"></div></span>
                    <p className="profile-textcolor">June 28, 2018</p>
                    <span><div className="profile-textcolortwo"></div></span>
                    <span><img src={Group} alt="Group" /></span>
                    <p className="share-color">1K shares</p>
                  </div>
                </div>
              </div>
              <p className="landingpage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.
              </p>
              <button className=" btn landingpage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
            </div>

          </div>
          <button className="btn landingpage-sectiontwo-button">Load More</button>
        </div>

      </div>

    </>
  );
}

export default LandingPage;

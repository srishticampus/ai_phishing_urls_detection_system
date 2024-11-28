import "./Landpage.css";
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png'
import LandingP_card_one from '../../assets/Images/LandingP_card_one.png'
import card_profile from '../../assets/Images/card_profile.png'
import tabler_photo from '../../assets/Images/tabler_photo.png'
import Group from '../../assets/Images/Group.png'
function LandingPage() {
  return (
    <>
      <div className="landingpage-section-one">
        <img className="landingpage-bgimg" src={LandingPage_Bg} />
        <div className="landingpage-bgimg-container">
          <p className="landingpage-bgimg-headone">Welcome to BLOG<span className="landingpage-headone-span">SPHERE !</span></p>
          <p className="landingpage-bgimg-headtwo">From Thoughts to Trends – Your Blogging Hub</p>
          <p className="landingpage-bgimg-para">Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging <br />content with every visit.</p>
          <button className="landingpage-bgimg-button">Explore Now</button>
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

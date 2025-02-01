
import "../../Pages/UserHomePage/UserHomePage.css";
import adv from "../../assets/Images/advertisement.png";
import card_profile from '../../assets/Images/card_profile.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import Group from '../../assets/Images/Group.png';
import left from "../../assets/Images/left.png";
import right from "../../assets/Images/right.png";
import homepage from "../../assets/Images/homapageimg.png";
import personlap from '../../assets/Images/personlap.png';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';
import LandingPage_Bg_4 from '../../assets/Images/LandingPage_Bg_4.png';
import LandingPageBg_6 from '../../assets/Images/LandingPageBg_6.png';
import LandingPageBg_3 from '../../assets/Images/LandingPageBg_3.png';
import LandingPageBg_2 from '../../assets/Images/LandingPageBg_2.png';
import LandingPageBg_5 from '../../assets/Images/LandingPageBg_5.png';
import ads1 from '../../assets/Images/ads1.png';
import div3img from '../../assets/Images/div3img.png';
import sideimg1 from "../../assets/Images/sideimg1.png"
import sideimg2 from "../../assets/Images/sideimg2.png"
import sideimg3 from "../../assets/Images/sideimg3.png"


function UserHomePage() {
    return (
        <div className="container user-homepage-container">

            <div className="row">
                <div className="col-sm-9">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
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
                                            <p className="user-homepage-div1-head">Explore. Express. <br /> Elevate.</p>
                                            <p className="user-homepage-div1-para">
                                                Explore a diverse range of content that enlightens, entertains, and inspires with every read.
                                                Uncover fresh ideas, new perspectives, and engaging content with every visit.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="user-homepage-div1-bar">
                                            <p>“The Ultimate Destination for Readers Who Crave Inspiration.”</p>
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
                                            <p className="user-homepage-div1-carousel-para">Your Daily Dose of Insight and Inspirations</p>
                                        </div>
                                        <div className="col-sm-6">
                                            <img className="user-homepage-div1-carousel-personlap" src={personlap} alt="Person" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="carousel-item">
                                <div className="user-homoepage-div1-carousel3">
                                    <div className="overlay-text">
                                        <p className="user-homepage-overlay-text-head">From Thoughts to Trends</p>
                                        <p className="user-homepage-overlay-text-para">
                                            Explore a diverse range of content that enlightens, entertains, and inspires with every read.
                                            Uncover fresh ideas, new perspectives, and engaging content with every visit.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-top-left" src={LandingPageBg_3} alt="LandingPageBg_3" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size" src={LandingPage_Bg_4} alt="LandingPage_Bg_4" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-top-right" src={LandingPageBg_5} alt="LandingPageBg_5" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-bottom-left" src={LandingPageBg_2} alt="LandingPageBg_2" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size" src={LandingPage_Bg} alt="LandingPage_Bg" />
                                        </div>
                                        <div className="col-sm-4">
                                            <img className="user-homepage-carousel3-img-img-size user-homepage-img-border-radius-bottom-right" src={LandingPageBg_6} alt="LandingPageBg_6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <p className="user-homepage-div2-head">Our Recent Blogs</p>

                    <div className="row">
                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>


                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-2 user-homepage-cardsize">
                            <img className="user-homepage-cardone-imgone" src={LandingPage_Bg} alt="Blog 1" />
                            <div>
                                <span><p className="badge  p-2 user-homepage-cardone-header">Food & Cooking</p></span>
                                <img className="user-homepage-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-homepage-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-homepage-card-profile-info">
                                        <img className="user-homepage-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-homepage-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-homepage-profile-rectangle"></div></span>
                                        <p className="user-homepage-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-homepage-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-homepage-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-homepage-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn user-homepage-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>
                        <div className="d-flex justify-content-center mt-5 mb-5">
                            <button className="btn btn-outline-dark">Load More</button>
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
                                                    <img className="user-homepage-div3-right-img" src={sideimg1} />
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <p className="user-homepage-div3-right-img-sub">Love juice Season Priemere</p>
                                                    <p className="user-homepage-div3-right-img-sub-two">21 March 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mt-4">
                                            <div className="col-sm-6">
                                                <div>
                                                    <img className="user-homepage-div3-right-img" src={sideimg2} />
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <p className="user-homepage-div3-right-img-sub">Akame Ga Kill: Season finale</p>
                                                    <p className="user-homepage-div3-right-img-sub-two">21 March 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mt-4">
                                            <div className="col-sm-6">
                                                <div>
                                                    <img className="user-homepage-div3-right-img" src={sideimg3} />
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <p className="user-homepage-div3-right-img-sub">Naruto Uzumaki: Hidden Village</p>
                                                    <p className="user-homepage-div3-right-img-sub-two">21 March 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex mt-4">
                                            <div className="col-sm-6">
                                                <div>
                                                    <img className="user-homepage-div3-right-img" src={sideimg2} />
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <p className="user-homepage-div3-right-img-sub">Love juice Season Priemere</p>
                                                    <p className="user-homepage-div3-right-img-sub-two">21 March 2021</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="user-home-page-div-3-sub-container">
                                    <p className="user-homepage-div3-sub-1">1 Month Ago </p>
                                    <p className="user-homepage-div3-sub-2">Tick one more destination off of your bucket list with one of our <br></br>most popular vacations in 2022</p>
                                    <p className="user-homepage-div3-sub-3">lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas  eleifend sed ex.<br></br> Donec quis magna sed felis elementum blandit nec quis sem. Maecen.</p>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                <div className="col-sm-3">
                    <div className="card user-homepage-card-size">
                        <img className="homepage-card-img-size" src={adv} alt="Advertisement" />
                    </div>
                    <div className="card user-homepage-card-size">
                        <img className="homepage-card-img-size" src={ads1} alt="Advertisement" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserHomePage;

import "../../Pages/UserViewDetails/UserViewDetails.css"
import LandingPage_Bg from "../../assets/Images/LandingPage_Bg.png"
import advertisement from "../../assets/Images/advertisement.png"
import Group from '../../assets/Images/Group.png';
import card_profile from '../../assets/Images/card_profile.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
function UserViewDetails() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <div>
                        <img className="user-view-details-div1-img" src={LandingPage_Bg} />
                    </div>
                    <div>
                        <p className="user-view-details-head">Achieving Optimal Health and Fitness: Your Ultimate Guide</p>
                        <p className="user-view-details-para" >In this extensive guide, we delve into the key principles of health and fitness to help you achieve your wellness goals. From understanding nutrition essentials to designing effective workout routines, this blog covers everything you need to know to embark on a journey towards a healthier lifestyle.</p>
                    </div>
                    <div>
                        <p className="user-view-details-subhead">Nutrition Essential</p>
                        <p className="user-view-details-subhead-sub">1.Balanced Diet Basics</p>
                        <p className="user-veiw-details-para">A balanced diet includes essential nutrients such as proteins, carbohydrates, fats, vitamins, and minerals. Each plays a crucial role in maintaining overall health and supporting bodily functions.</p>
                        <p className="user-view-details-subhead-sub">2.Importance of Hydration</p>
                        <p className="user-veiw-details-para">Water is vital for cellular function, temperature regulation, and digestion. Tips for staying hydrated and recognizing signs of dehydration are discussed.</p>
                        <p className="user-view-details-subhead-sub">3.Nutritional Supplements</p>
                        <p className="user-veiw-details-para">Supplements can complement a diet but should not replace whole foods. Discuss common supplements like multivitamins, omega-3 fatty acids, and their benefits when used appropriately.</p>
                        <p className="user-view-details-subhead-sub">4.Meal Planning Strategies</p>
                        <p className="user-veiw-details-para">Effective meal planning helps in achieving nutritional goals, managing weight, and saving time. Includes tips for preparing balanced meals and healthy snacks.</p>
                    </div>
                    <div>
                        <p className="user-view-details-subhead">Fitness and Exercise</p>
                        <p className="user-view-details-subhead-sub">1.Creating a Fitness Plan</p>
                        <p className="user-veiw-details-para">Designing a personalized fitness plan involves setting realistic goals, choosing suitable exercises, and scheduling workouts. Emphasis on incorporating cardiovascular, strength training, and flexibility exercises.</p>
                        <p className="user-view-details-subhead-sub">2. Importance of Regular Exercise</p>
                        <p className="user-veiw-details-para">Benefits of exercise extend beyond weight management to include improved cardiovascular health, mental well-being, and enhanced overall quality of life.</p>
                        <p className="user-view-details-subhead-sub">3.Workout Techniques and Safety</p>
                        <p className="user-veiw-details-para">Proper form and technique reduce the risk of injury during exercise. Includes demonstrations of basic exercises and tips for beginners.</p>
                        <p className="user-view-details-subhead-sub">4.Mind-Body Connection</p>
                        <p className="user-veiw-details-para">The link between mental health and physical fitness is explored, highlighting how activities like yoga and meditation promote holistic well-being.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-dark">View Comments</button>
                    </div>

                    <p className="user-view-details-sec-head">You May also Like</p>
                    <div className="row">
                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>

                        </div>

                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>

                        </div>
                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>

                        </div>
                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>

                        </div>
                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>
                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                        </div>

                        <div className="card col-sm-2 user-view-details-cardsize">
                            <img className="user-view-details-cardone-imgone" src={LandingPage_Bg} alt="Blog 3" />
                            <div>
                                <span><p className="badge  p-2 user-view-details-cardone-header">Food & Cooking</p></span>
                                <img className="user-view-details-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>

                            <div className="card-body">
                                <p className="user-view-details-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex user-view-details-card-profile-info">
                                        <img className="user-view-details-card-profile-img" src={card_profile} alt="Profile" />
                                        <p className="user-view-details-card-profilename">Joanna Wellick</p>
                                        <span><div className="user-view-details-profile-rectangle"></div></span>
                                        <p className="user-view-details-profile-textcolor">June 28, 2018</p>
                                        <span><div className="user-view-details-profile-textcolortwo"></div></span>
                                        <span><img src={Group} alt="Group" /></span>
                                        <p className="user-view-details-share-color">1K shares</p>
                                    </div>
                                </div>
                            </div>

                            <p className="user-view-details-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>

                        </div>

                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card user-view-details-card-ads">
                        <img className="user-view-details-card-ads-size" src={advertisement} />
                    </div>
                    <div className="card user-view-details-card-ads">
                        <img className="user-view-details-card-ads-size" src={advertisement} />
                    </div>
                    <div className="card user-view-details-card-ads">
                        <img className="user-view-details-card-ads-size" src={advertisement} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserViewDetails

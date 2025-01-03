import "../../Pages/AdminHome/AdminHome.css"
import accept from "../../assets/Images/accept.png"
import cancel from "../../assets/Images/cancel.png"
import LandingP_card_one from '../../assets/Images/LandingP_card_one.png';
import tabler_photo from '../../assets/Images/tabler_photo.png';
import LandingPage_Bg from '../../assets/Images/LandingPage_Bg.png';


function AdminHome() {
    return (
        <div className="admin-home-container">
            <p className="admin-home-container-head ms-3">View Advertisers Requests</p>
            <div className="container">
                <table className="admin-home-table-container ">
                    <thead>
                        <tr className="admin-home-table-color">
                            <th className="admin-home-table-th">S No</th>
                            <th className="admin-home-table-th">Name</th>
                            <th className="admin-home-table-th">Phone Number</th>
                            <th className="admin-home-table-th">Email</th>
                            <th className="admin-home-table-th">Company Name</th>
                            <th className="admin-home-table-th">Business Category</th>
                            <th className="admin-home-table-th">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="admin-home-table-tr">
                            <td className="admin-home-table-td">1</td>
                            <td className="admin-home-table-td">Saravanan</td>
                            <td className="admin-home-table-td">9876543210</td>
                            <td className="admin-home-table-td">saravanan@gmail.com</td>
                            <td className="admin-home-table-td">Wild AD</td>
                            <td className="admin-home-table-td">Health, Travel, Fitness</td>
                            <td className="admin-home-table-td">
                                <div>
                                    <button className="admin-home-table-button btn btn-secondary">
                                        <img src={cancel} alt="Reject" />
                                    </button>
                                    <button className="admin-home-table-button btn btn-success ms-3">
                                        <img src={accept} alt="Accept" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="d-flex justify-content-end">
                    <button className="btn admin-home-container-viewall">View All &nbsp; &gt;</button>
                </div>
            </div>


            <div>
                <p className="admin-home-container-head ms-3">View Recent Blogs</p>
                <div className="d-flex justify-content-center">
                    <div className="row">
                        <div className="card col-sm-3 admin-home-cardsize">
                            <img className="admin-home-cardone-imgone" src={LandingPage_Bg} />
                            <div>
                                <span><p className="badge  p-2 admin-home-cardone-header">Food & Cooking</p></span>
                                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">

                                        <p className="profile-textcolor">June 28, 2018</p>

                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn admin-home-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-3 admin-home-cardsize">
                            <img className="admin-home-cardone-imgone" src={LandingP_card_one} />
                            <div>
                                <span><p className="badge  p-2 admin-home-cardone-header">Food & Cooking</p></span>
                                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">

                                        <p className="profile-textcolor">June 28, 2018</p>

                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn admin-home-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>

                        <div className="card col-sm-3 admin-home-cardsize">
                            <img className="admin-home-cardone-imgone" src={LandingP_card_one} />
                            <div>
                                <span><p className="badge  p-2 admin-home-cardone-header">Food & Cooking</p></span>
                                <img className="admin-home-cardone-headerone" src={tabler_photo} alt="tabler" />
                            </div>
                            <div className="card-body">
                                <p className="admin-home-cardone-body">Budget Sacrificing Experience</p>
                                <div className="d-flex">
                                    <div className="d-flex landingpage-card-profile-info">

                                        <p className="profile-textcolor">June 28, 2018</p>

                                    </div>
                                </div>
                            </div>
                            <p className="admin-view-blog-cardone-para">Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
                            <button className="btn admin-home-readmore-button">Read More <span className="greaterthan-symbol">&gt;</span></button>
                        </div>
                        
                    </div>

                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn admin-home-container-viewall">View All &nbsp; &gt;</button>
                </div>
            </div>

        </div>
    )
}

export default AdminHome;

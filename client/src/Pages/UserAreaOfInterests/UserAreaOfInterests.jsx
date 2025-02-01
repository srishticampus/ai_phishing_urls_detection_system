import "../../Pages/UserAreaOfInterests/UserAreaOfInterests.css"
import in1 from "../../assets/Images/in1.png"
import in2 from "../../assets/Images/in2.png"
import in3 from "../../assets/Images/in3.png"
import in4 from "../../assets/Images/in4.png"
import in5 from "../../assets/Images/in5.png"
import in6 from "../../assets/Images/in6.png"
import in7 from "../../assets/Images/in7.png"
import in8 from "../../assets/Images/in8.png"
import in9 from "../../assets/Images/in9.png"
import in10 from "../../assets/Images/in10.png"


function UserAreaOfInterests() {
    return (
        <div>
            <p className="user-area-of-interests-head">Area of Interests</p>
            <div className="row user-area-of-interest-center-row">
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in1} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Personal <br></br>Development</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in2} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Health & Wellness</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in3} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Technology</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in4} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Travel & Adventure</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in5} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Finance <br></br>Investing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row user-area-of-interest-center-row mt-5">
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in6} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Food & Cooking</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in7} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Family Life</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in8} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">LifeStyle</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in9} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Fashion</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="card user-area-of-interests-card-size">
                        <div className="user-area-of-interests-content">
                            <img className="user-area-of-interests-img-size" src={in10} alt="Personal Development" />
                            <div>
                                <p className="user-area-of-interests-footer-content">Career & Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-5">
                 <button className="btn btn-dark user-area-of-interests-btn">Confirm</button>
            </div>
        </div>
    );
}


export default UserAreaOfInterests

import { useRef } from 'react';
import "../../Pages/AdvertisersSignup/AdvertisersSignup.css"
import useemptyprofile from "../../assets/Images/user_empty_profile.png"
import { Link } from 'react-router';

function AdvertisersSignup() {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click(); // Trigger the file input dialog
    };
    return (
        <div className='d-flex justify-content-center flex-column'>
            <p className="advertisers-signup-head" >SignUp!</p>
            <div>
            <div className="advertisers-signup-img-div">
                <img src={useemptyprofile} alt="profileImg" />
                <button type="button" className='btn mt-3' onClick={handleButtonClick}>+ Add Image</button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />
            </div>
            <div className="row advertisers-signup-name-row">
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="col-sm-4 ">
                    <input type="text" className="form-control" placeholder="Business Name" />
                </div>
            </div>
            <div className="row advertisers-signup-sec-row">
                <div className="col-sm-4">
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="col-sm-4 ">
                    <input type="text" className="form-control" placeholder="Business Type" />
                </div>
            </div>
            <div className='row advertisers-signup-third-row'>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Contact Number" />
                </div>
                <div className="col-sm-4 ">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
            </div>
            <div className='row advertisers-signup-fourth-row'>
                <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Address" />
                </div>
                <div className="col-sm-4 ">
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
            </div>
            </div>
            <div className="advertisers-signup-button-div mt-4 ">
                <button type="button" className="btn btn-dark advertisers-signup-button mb-3">SignUp</button>
                <p className='advertisers-signup-already-have-account'>Already have an account? <Link className='advertisers-signup-login' to="/#">Login</Link> </p>
            </div>
        </div>
    )
}

export default AdvertisersSignup

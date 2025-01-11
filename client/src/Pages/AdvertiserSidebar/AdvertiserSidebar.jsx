import advimg from "../../assets/Images/Admin_dashboard_img.png"
import "../../Pages/AdvertiserSidebar/AdvertiserSidebar.css"
import { Link } from 'react-router-dom';


function AdvertiserSidebar() {
    return (
        <div className="advertiser-dashboard">
            <div className="advertiser-dashboard-img">
                <img className="mb-2" src={advimg} />
                <p className="advertiser-dashboard-head" >Advertisers</p>
            </div>
            <div className="d-flex justify-content-center flex-column mt-5">
                <Link to="/">
                    <button className="btn text-light mb-3 " >Dashboard</button>
                </Link>
                <Link to="/">
                    <button className="btn text-light mb-3 " >Add Advertisements</button>
                </Link>
                <Link to="/">
                    <button className="btn text-light mb-3 " >view Users</button>
                </Link>
                <Link to="/">
                    <button className="btn text-light mb-3 " >Reset Password</button>
                </Link>
                <Link to="/">
                    <button className="btn text-light mb-3 " >Logout</button>
                </Link>
            </div>
            <div className="adv-navbar-component">
                    <p className="adv-dashboard-navbar-head-color">BLOG <span className="adv-dashboard-navbar-span-color">SPHERE</span></p>
            </div>
        </div>
    )
}

export default AdvertiserSidebar

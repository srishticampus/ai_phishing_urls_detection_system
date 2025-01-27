import "../../Pages/AdminSidebar/AdminSidebar.css"
import adminimg from "../../assets/Images/Admin_dashboard_img.png"
import { Link } from "react-router"




function AdminSidebar() {
    return (
        <div>
            <div className="admin-dashboard">
                <div className="admin-dashboard-img">
                    <img src={adminimg}></img>
                    <p className="admin-dashboard-text-color">Admin</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn admin-dashboard-btn"> <Link to="/admin-dashboard" className="btn">Add Blogs</Link></button>
                </div>

                <div className="d-flex justify-content-center">
                    <ul>
                        <li className="mb-4 mt-5">
                            <Link to="/admin-add-blog" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Add Blogs</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-blog" className="btn admin-dashboard-btn-color  admin-dashboard-listdecor">View Blogs</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-users" className="btn admin-dashboard-btn-color admin-dashboard-listdecor" >View Users</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-advertisers" className="btn admin-dashboard-btn-color admin-dashboard-listdecor" >Advertisers</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/admin-view-advertisement" className="btn admin-dashboard-btn-color admin-dashboard-listdecor">Advertisement</Link>
                        </li>
                        <li >
                            <Link to="/" className="btn admin-dashboard-btn-color admin-dashboard-listdecor" >Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-component">
                <p className="admin-dashboard-navbar-head-color">BLOG <span className="admin-dashboard-navbar-span-color">SPHERE</span></p>
            </div>

        </div>
    )
}

export default AdminSidebar

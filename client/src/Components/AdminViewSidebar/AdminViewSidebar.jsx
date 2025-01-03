import AdminSidebar from "../../Pages/AdminSidebar/AdminSidebar"
import PropTypes from "prop-types";

function AdminViewSidebar({children}) {
  return (
    <div  className="admin-container">
      <AdminSidebar/>
      <div>
        <div className="admin-content">
            {children}
        </div>
      </div>
    </div>
  )
}

AdminViewSidebar.propTypes = {
    children: PropTypes.node.isRequired, 
  };

export default AdminViewSidebar

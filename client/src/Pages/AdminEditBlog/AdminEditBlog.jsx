import "../../Pages/AdminEditBlog/AdminEditBlog.css"
import img from "../../assets/Images/LandingPage_Bg.png"


function AdminEditBlog() {
  return (
    <div className="admin-edit-blog-container">
      <div className="d-flex justify-content-center">
        <div className="card admin-edit-blog-card">
          <div className="card-header admin-edit-blog-card-heaader">
            <p className="admin-edit-blog-head">Edit Blogs</p>

          </div>
          <div className="card-body">
            <div className="row d-flex justify-content-center">

              <div className="col-sm-4">
                <label className="btn btn-outline-dark admin-edit-blog-dropdown-button form-control ">
                  Upload Images
                  <input type="file" style={{ display: 'none' }} />
                  <i className="bi bi-upload ms-5"></i>
                </label>
              </div>

              <div className="col-sm-4">
                <div className="dropdown">
                  <button type="button " className="btn btn-outline-dark dropdown-toggle admin-edit-blog-dropdown-button form-control" data-bs-toggle="dropdown">
                    LifeStyle
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Link 1</a></li>
                    <li><a className="dropdown-item" href="#">Link 2</a></li>
                    <li><a className="dropdown-item" href="#">Link 3</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
          <div className="card-body  ">
            <div className="d-flex justify-content-center">
              <img className="admin-edit-blog-card-body-img" src={img} />

            </div>
            <div className="admin-edit-blog-text-inside-img">
              <p className="admin-edit-blog-text-inside-img-head" >Cook with Passion, Eat with Joy</p>
              <p className="admin-edit-blog-text-inside-img-para" >Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging content with every visit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminEditBlog

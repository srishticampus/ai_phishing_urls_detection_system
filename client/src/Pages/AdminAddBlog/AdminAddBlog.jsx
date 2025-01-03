import "../../Pages/AdminAddBlog/AdminAddBlog.css"

function AdminAddBlog() {
    return (
        <div>
            <div className="admin-add-blog-container">
                <div className="d-flex justify-content-center">
                    <div className="card admin-add-blog-card">
                        <div className="card-header admin-add-blog-card-header">
                            <p className="admin-add-blog-head">Add Blogs</p>
                        </div>
                        <div className="card-body">
                            <div className="row d-flex justify-content-center">
                                <div className="col-sm-4">
                                    <label className="btn btn-outline-dark admin-add-blog-dropdown-button form-control ">
                                        Upload Images
                                        <input type="file" style={{ display: 'none' }} />
                                        <i className="bi bi-upload ms-5"></i>
                                    </label>
                                </div>

                                <div className="col-sm-4">
                                    <div className="dropdown">
                                        <button type="button " className="btn btn-outline-dark dropdown-toggle admin-add-blog-dropdown-button form-control" data-bs-toggle="dropdown">
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
                            <div className="row">
                                <div className="card mt-4">
                                    <div className="card-header  admin-add-blog-card-header">
                                        <p>Title:</p>
                                    </div>
                                    <div className="card-body admin-add-blog-cardtwo-content">
                                        <p>Content</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer admin-add-blog-card-footer">
                                <div className="d-flex justify-content-center">
                                    <button className="btn btn-dark admin-add-blog-edit-button">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAddBlog

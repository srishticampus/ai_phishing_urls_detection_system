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
                    Fitness
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
          <div className="inside-card-container">
            <hr></hr>
            <div className="d-flex justify-content-center ">
              <img className="admin-edit-blog-card-body-img" src={img} />
            </div>
            <hr></hr>
            <div className="admin-edit-blog-text-inside-img">
              <p className="admin-edit-blog-text-inside-img-head" >Cook with Passion, Eat with Joy</p>
              <p className="admin-edit-blog-text-inside-img-para" >Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging content with every visit.</p>
            </div>
          </div>
          <di className="container">
            <p className="admin-edit-blog-card-text-head">Achieving Optimal Health and Fitness: Your Ultimate Guide</p>
            <hr />
            <p className="admin-edit-blog-card-text-para"> In this extensive guide, we delve into the key principles of health and fitness to help you achieve your wellness goals. From understanding nutrition essentials to designing effective workout routines, this blog covers everything you need to know to embark on a journey towards a healthier lifestyle.</p>
            <p className="admin-edit-blog-card-text-head">Nutrition Essentials</p>
            <p className="admin-edit-blog-text-list-head">1. Balanced diet Basics</p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">A balanced diet includes essential nutrients such as proteins, carbohydrates, fats, vitamins, and minerals. Each plays a crucial role in maintaining overall health and supporting bodily functions.</p>
              </li>
            </ul>

            <p className="admin-edit-blog-text-list-head">2. Importance of Hydration</p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Water is vital for cellular function, temperature regulation, and digestion. Tips for staying hydrated and recognizing signs of dehydration are discussed.</p>
              </li>
            </ul>

            
            <p className="admin-edit-blog-text-list-head">3. Nutritional Supplements</p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Supplements can complement a diet but should not replace whole foods. Discuss common supplements like multivitamins, omega-3 fatty acids, and their benefits when used appropriately.</p>
              </li>
            </ul>


            <p className="admin-edit-blog-text-list-head">4.  Meal Planning Strategies</p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Effective meal planning helps in achieving nutritional goals, managing weight, and saving time. Includes tips for preparing balanced meals and healthy snacks.</p>
              </li>
            </ul>

            <p className="admin-edit-blog-card-text-head">Fitness and Exercise</p>

            <p className="admin-edit-blog-text-list-head">1. Creating a Fitness Plan </p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Designing a personalized fitness plan involves setting realistic goals, choosing suitable exercises, and scheduling workouts. Emphasis on incorporating cardiovascular, strength training, and flexibility exercises.</p>
              </li>
            </ul>

            <p className="admin-edit-blog-text-list-head">2. Importance of Regular Exercise </p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Benefits of exercise extend beyond weight management to include improved cardiovascular health, mental well-being, and enhanced overall quality of life.</p>
              </li>
            </ul>

            <p className="admin-edit-blog-text-list-head">3. Workout Techniques and Safety </p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">Proper form and technique reduce the risk of injury during exercise. Includes demonstrations of basic exercises and tips for beginners.</p>
              </li>
            </ul>

            <p className="admin-edit-blog-text-list-head">4. Mind-Body Connection</p>
            <ul className="admin-edit-view-ul">
              <li>
                <p className="admin-edit-blog-text-list-para">The link between mental health and physical fitness is explored, highlighting how activities like yoga and meditation promote holistic well-being.</p>
              </li>
            </ul>
       
          </di>
        


        </div>
       

      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
          <button className="btn btn-outline-dark  admin-edit-blog-button">Cancel</button>
          <button className="btn btn-dark admin-edit-blog-button ms-3">Update</button>
        </div>
    </div>
  )
}

export default AdminEditBlog

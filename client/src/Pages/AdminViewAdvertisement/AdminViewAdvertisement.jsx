import "../../Pages/AdminViewAdvertisement/AdminViewAdvertisement.css"
import cardimg from "../../assets/Images/advertisement.png"



function AdminViewAdvertisement() {
  return (
    <div className="admin-view-advertisement-container">
        <div className="ms-2">
        <p className="admin-view-advertisement">Advertisements</p>
        </div>
  <div className="admin-view-advretisement-center-row">
  <div className="row">
        <div className="card col-sm-4  admin-view-advertisement-card-size">
            <img src={cardimg}/>
        </div>
        <div className="card col-sm-4  admin-view-advertisement-card-size">
            <img src={cardimg}/>
        </div>
        <div className="card col-sm-4  admin-view-advertisement-card-size">
            <img src={cardimg}/>
        </div>
      </div>
  </div>
    </div>
  )
}

export default AdminViewAdvertisement

import "../AdvertisersViewAdvertisements/AdvertisersViewAdvertisement.css"
import advimg from "../../assets/Images/advertisement.png"
function AdvertisersViewAdvertisements() {
  return (
    <div className="advertisers-view-advertisements-container">
      <p className="advertisers-view-advertisements-head">View Advertisements</p>
      <div className="advertisers-view-advertisements-card-container">
        <div className="row">
          <div className="card col-sm-4 advertisers-view-advertisements-cards">
             <img src={advimg}/>
          </div>
          <div className="card col-sm-4 advertisers-view-advertisements-cards">
             <img src={advimg}/>
          </div>
          <div className="card col-sm-4 advertisers-view-advertisements-cards">
             <img src={advimg}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdvertisersViewAdvertisements

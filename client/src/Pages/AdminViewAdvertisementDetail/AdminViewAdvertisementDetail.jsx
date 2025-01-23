import "../../Pages/AdminViewAdvertisementDetail/AdminViewAdvertisementDetail.css"
import cardimg from "../../assets/Images/advertisement.png"



function AdminViewAdvertisementDetail() {
  return (
    <div className="admin-view-advertisement-detail-container">
        <p className="admin-view-advertisement-detail-head">View Advertisements Details</p>
      <div className="container">
         <div className="row">
            <div className="col-sm-4">
                <img src={cardimg} alt="Advertisement" className="admin-view-advertisement-detail-image-card"/>
            </div>
            <div className="col-sm-8">
                <p className="admin-view-advertisement-detail-paraone" >Master the Art of Home Cooking with Easy Gourmet Recipes!</p>
                <p className="admin-view-advertisement-detail-paratwo">Looking to spice up your kitchen routine? Discover a world of flavors with our easy-to-follow gourmet recipes! Whether you&apos;re a beginner or a seasoned chef, we&apos;ve got something for everyone. From quick weeknight dinners to elaborate weekend feasts, explore a treasure trove of culinary inspiration that’ll impress your family and friends. Start cooking with confidence today!</p>
                <p className="admin-view-advertisement-detail-parathree">November 01, 2024 -- November 30, 2024</p>
                <a href="www.deliciousrecipes.com/mastergourmet">www.deliciousrecipes.com/mastergourmet</a>
              
            </div>
         </div>
      </div>
    </div>
  )
}

export default AdminViewAdvertisementDetail

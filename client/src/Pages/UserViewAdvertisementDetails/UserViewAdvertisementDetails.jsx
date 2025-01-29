import "../../Pages/UserViewAdvertisementDetails/UserViewAdvertisementDetails.css"
import adv from "../../assets/Images/advertisement.png"


function UserViewAdvertisementDetails() {
  return (
    <div className="user-view-adv-details-body">
        <p className="user-view-adv-details-body-head">View Details</p>
        <div className="row p-3">
            <div className="card user-view-adv-details-card col-sm-4">
                 <img className="user-view-adv-details-card-img" src ={adv}/>
            </div>
            <div className="col-sm-7 user-view-adv-details-para-container">
                <p className="user-view-adv-details-head ">Master the Art of Home Cooking with Easy Gourmet Recipes!</p>
                <p className="user-view-adv-details-para mt-5">Looking to spice up your kitchen routine? Discover a world of flavors with our easy-to-follow gourmet recipes! Whether you&apos;re a beginner or a seasoned chef, we&apos;ve got something for everyone. From quick weeknight dinners to elaborate weekend feasts, explore a treasure trove of culinary inspiration that&apos;ll impress your family and friends. Start cooking with confidence today!</p>
                <p className="user-view-adv-details-para2 mt-5">November 01, 2024 -- November 30, 2024</p>
                <p className="mt-5"> <a href="www.deliciousrecipes.com/mastergourmet ">www.deliciousrecipes.com/mastergourmet</a>  </p>
                <button className="btn btn-dark mt-5">View More</button>
            </div>
        </div>
      
    </div>
  )
}

export default UserViewAdvertisementDetails

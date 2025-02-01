import "../../Pages/AdvertisersViewAdvertisementDetails/AdvertisersViewAdvertisementDetails.css"
import advimg from "../../assets/Images/advertisement.png"


function AdvertisersViewAdvertisementDetails() {
  return (
    <div className="advertisers-view-advertisement-details-container ">
       <p className="advertisers-view-advertisement-details-head">View Advertisements Details</p>
       <div className="advertisers-view-advertisement-details-card">
        <div className="row">
            <div className="card col-sm-4 advertisers-view-advertisement-details-cards">
               <img src={advimg}/>
            </div>
            <div className="col-sm-8">
                <p className="advertisers-view-advertisement-details-parahead">Master the Art of Home Cooking with Easy Gourmet Recipes!</p>
                <p className="advertisers-view-advertisement-details-para">Looking to spice up your kitchen routine? Discover a world of flavors with our easy-to-follow gourmet recipes! Whether you're a beginner or a seasoned chef, we've got something for everyone. From quick weeknight dinners to elaborate weekend feasts, explore a treasure trove of culinary inspiration that’ll impress your family and friends. Start cooking with confidence today!</p>
                <p className="advertisers-view-advertisement-details-para">November 01, 2024 -- November 30, 2024</p>
                <a href="www.deliciousrecipes.com/mastergourmet">www.deliciousrecipes.com/mastergourmet</a>
                <div className="mt-5">
                    <button className="btn btn-outline-dark w-25 me-4">Delete</button>
                    <button className="btn btn-dark w-25">Edit</button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default AdvertisersViewAdvertisementDetails

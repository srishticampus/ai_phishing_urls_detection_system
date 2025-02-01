import "../../Pages/AdvertisersEditAdvertisements/AdvertisersEditAdvertisements.css"

function AdvertisersEditAdvertisements() {
  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="advertisers-edit-advertisements-container">
      <div className="advertisers-edit-advertisements-card-container">
        <div className="card">
          <div className="card-header">
            <p className="advertisers-edit-advertisements-head" > Edit Advertisements</p>
          </div>
          <div className="card-body">

            <div className="advertisers-edit-advertisement-center-button d-flex justify-content-center">
              <button
                className="btn btn-light adv-edit-up-img-button"
                onClick={handleButtonClick}
              >
                Upload Image
                <input
                  id="fileInput"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                />
              </button>

              <button
                className="btn btn-light dropdown-toggle adv-edit-dropdown-button"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Food & Cooking
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li>
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Action 3
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="card advertisers-edit-advertisement-sec-card">
            <p>Title : Master the Art of Home Cooking with Easy Gourmet Recipes!</p>
            <hr></hr>
            <p>Link : <span className="advertisers-edit-advertisement-link">www.deliciousrecipes.com/mastergourmet</span> </p>
            <hr></hr>
            <div>
              <label>Start Date:</label><input className="me-5" type="date"></input>
              <label>End Date:</label><input type="date"></input>
            </div>
            <hr></hr>
            <p className="advertisers-edit-advertisement-para">Looking to spice up your kitchen routine? Discover a world of flavors with our easy-to-follow gourmet recipes! Whether you&apos;re a beginner or a seasoned chef, we&apos;ve got something for everyone. From quick weeknight dinners to elaborate weekend feasts, explore a treasure trove of culinary inspiration that&apos;ll impress your family and friends. Start cooking with confidence today!</p>
          </div>

         <div>
       <div className="card-footer d-flex justify-content-center">
        <button className="btn btn-outline-dark me-5 advertisers-edit-advertisement-btn" >Cancel</button>
        <button className="btn btn-dark advertisers-edit-advertisement-btn" >Update</button>
       </div>
         </div>

        </div>
      </div>
    </div>
  )
}

export default AdvertisersEditAdvertisements

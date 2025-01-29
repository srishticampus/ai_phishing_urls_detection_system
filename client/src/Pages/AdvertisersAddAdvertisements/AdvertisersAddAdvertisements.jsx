import "../../Pages/AdvertisersAddAdvertisements/AdvertisersAddAdvertisement.css";
import { useEffect } from "react";

function AdvertisersAddAdvertisements() {

    const handleButtonClick = () => {
        document.getElementById("fileInput").click();
    };

 
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        document.getElementById("startDate").value = today;
    }, []);

    return (
        <div className="advertisers-add-advertisement-container">
            <div className="advertisers-add-advertisement-card-container">
                <div className="card advertisers-add-advertisement-card">
                    <div className="card-header">
                        <p className="advertisers-add-advertisement-head">Add Advertisements</p>
                    </div>
                    <div className="card-body ">
                        <div className="advertisers-add-advertisement-center-button d-flex justify-content-center">
                            <button
                                className="btn btn-light adv-add-up-img-button"
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
                                className="btn btn-light dropdown-toggle adv-add-dropdown-button"
                                type="button"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Actions
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
                        <div className="card-body">
                            <p>Title:</p>
                            <hr></hr>

                            <div className="">
                                <p>Link:</p>
                                <hr></hr>
                                <div className="d-flex justify-content-center">
                                    <label>Start Date: </label>
                                    <input 
                                        id="startDate" 
                                        type="date" 
                                        placeholder="Start date" 
                                        className="me-5" 
                                    />
                                    <label>End Date: </label>
                                    <input 
                                        type="date" 
                                        placeholder="End date" 
                                    />
                                </div>
                            </div>
                            <hr></hr>
                            <p>Description: </p>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                        <button className="btn btn-dark w-25 ">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvertisersAddAdvertisements;

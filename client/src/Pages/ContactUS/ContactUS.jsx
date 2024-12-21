import "./ContactUS.css"
import call from "../../assets/Images/ion_call.png"
import mail from "../../assets/Images/mail_icon.png"
import location from "../../assets/Images/location_icon.png"
import map from "../../assets/Images/map.png"
import Footer from "../../Components/Footer/Footer"
function ContactUS() {
    return (
        <div>
            <div className="contactus-container">
                <p className="contactus-header">Contact Us</p>
                <p className="contactus-para" >We’re here to help! Whether you have a question, feedback, or are interested in collaboration, we’d love to hear from you. Reach out to us via email, phone, or<br /> social media, and we’ll get back to you as soon as possible. Our team is available Monday to Friday from 9 AM to 6 PM. Feel free to share your thoughts—your<br /> input helps us grow and improve!</p>
                <div className="contactus-jumbotron">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="jumbotron-left">
                                <p><img src={call} /> 1820401999</p>
                                <p><img src={call} /> 1820401999</p>
                                <p><img src={mail} /> blogsphere@gmail.com</p>
                                <p><img src={location} />Office No. 1, Waha Mall, Al Dajeej,<br />
                                    <span className="location-details">Farwaniya. ( pin : 656735 )</span></p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="jumbotron-right">
                                <img src={map} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="contactus-footer">
           <Footer/>
            </div>
        </div>
    )
}

export default ContactUS

import "./Services.css"
import imgone from "../../assets/Images/service1.png"
import imgtwo from "../../assets/Images/service2.png"
import imgthree from "../../assets/Images/service3.png"
import imgfour from "../../assets/Images/service4.png"


function Services() {
    return (
        <div>

            <div className="container">
            <div className="services-box">
                <div className="services-box-left">
                    <div className="services-box-top-images">
                        <img className="services-imgone" src={imgone} />
                        <img className="services-imgtwo" src={imgtwo} />
                    </div>
                    <div className="services-box-bottom-images">
                    <img className="services-imgthree" src={imgthree} />
                    <img className="services-imgfour" src={imgfour} />
                    </div>
                </div>
                <div className="services-box-right">
                    <p className="services-box-right-haedone">About Us</p>
                    <p className="services-box-right-haedtwo">Who We Are</p>
                    <p className="services-box-right-para">Welcome to Blog Sphere, your ultimate destination for discovering engaging and insightful content on a wide range of topics. Whether you’re seeking advice on personal development, inspiration for your next adventure, or the latest trends in fashion and technology, we bring you well-researched, relevant blogs designed to inform, inspire, and ignite conversations. Our platform is created for readers who crave knowledge and for writers who are passionate about sharing their expertise with the world.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Services

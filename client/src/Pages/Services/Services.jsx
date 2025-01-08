import "./Services.css"
import Promotion from "../../assets/Images/Promotion.png"
import HealthCare from "../../assets/Images/HealthCare.png"
import Cloud from "../../assets/Images/Cloud.png"
import Route from "../../assets/Images/Route.png"
import Investment from "../../assets/Images/Investment.png"
import Cooking from "../../assets/Images/Cooking.png"
import Home from "../../assets/Images/Home.png"
import Lifestyle from "../../assets/Images/Lifestyle.png"

import Goal from "../../assets/Images/Goal.png"




function Services() {
    return (
        <div>
            <div className="section-one">
                <p className="services-section-one-head">Services</p>
                <p className="services-section-one-para">At Blog Sphere, we aim to be your go-to source for diverse, high-quality content across all aspects of life.</p>
            </div>
            <div className="section-two">
                <div className="row services-section-two-card-row">
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Promotion} />
                        <div className="card-header services-section-two-card-header">Personal Development</div>
                        <div className="card-body services-section-two-card-para">Unlock your potential with our personal growth blogs. From productivity hacks to self-care tips, explore content that empowers you to be the best version of yourself.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={HealthCare} />
                        <div className="card-header services-section-two-card-header">Health & Wellness</div>
                        <div className="card-body services-section-two-card-para">Prioritize your health with expert advice on physical fitness, mental well-being, and holistic living. Our wellness blogs aim to keep you feeling great inside and out.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Cloud} />
                        <div className="card-header services-section-two-card-header">Technology</div>
                        <div className="card-body services-section-two-card-para">Stay updated on the latest in tech innovation. Our technology blogs bring you the newest gadgets, app reviews, and trends shaping the future.</div>
                    </div>
                </div>


                <div className="row services-section-two-card-row">
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Route} />
                        <div className="card-header services-section-two-card-header">Travel & Adventure</div>
                        <div className="card-body services-section-two-card-para">Let your wanderlust soar! Discover travel guides, tips for adventurers, and destination highlights from around the globe. Whether you&apos;re a traveler, we&apos;ve got insights for you.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Cooking} />
                        <div className="card-header services-section-two-card-header">Food & Cooking</div>
                        <div className="card-body services-section-two-card-para">Indulge in delicious recipes, cooking tips, and food trends. Whether you&apos;re a seasoned chef or a beginner, our food and cooking blogs have something to satisfy your cravings.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Home} />
                        <div className="card-header services-section-two-card-header">Family Life</div>
                        <div className="card-body services-section-two-card-para">Navigate family life with ease. From parenting advice to family activities, we cover the topics that help you build strong relationships and create lasting memories.</div>
                    </div>
                </div>
                <div className="row services-section-two-card-row mb-5">
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Lifestyle} />
                        <div className="card-header services-section-two-card-header">Lifestyle</div>
                        <div className="card-body services-section-two-card-para">Elevate your everyday living with lifestyle tips that range from home decor ideas to creating balance in your busy life. Explore inspiration for leading a more fulfilled and stylish life.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Investment} />
                        <div className="card-header services-section-two-card-header">Finance & Investing</div>
                        <div className="card-body services-section-two-card-para">Grow your wealth and manage your money wisely. Explore blogs on personal finance, smart investing, saving strategies, and financial planning for a secure future.</div>
                    </div>
                    <div className="card services-section-two-card col-sm-3">
                        <img className="services-section-two-picture-size" src={Goal} />
                        <div className="card-header services-section-two-card-header">Career & Business</div>
                        <div className="card-body services-section-two-card-para">Level up your career or business with our expert advice. From career growth strategies to entrepreneurial tips, our blogs provide the tools and inspiration.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

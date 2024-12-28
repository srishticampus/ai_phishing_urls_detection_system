import "../../Pages/AboutUS/About.css"
import imgone from "../../assets/Images/service1.png"
import imgtwo from "../../assets/Images/service2.png"
import imgthree from "../../assets/Images/service3.png"
import imgfour from "../../assets/Images/service4.png"

function About() {
  return (
    <div>
      <div className="aboutus-sectionone-container">
        <div className=" container aboutus-img-grp-div">
          <div className="row">
            <div className="card col-sm-6  aboutus-img-card1">
              <img src={imgone} />
            </div>
            <div className="card col-sm-6 aboutus-img-card2">
              <img src={imgtwo} />
            </div>
          </div>
          <div className="row">
            <div className="card col-sm-6 aboutus-img-card3">
              <img src={imgthree} />
            </div>
            <div className="card col-sm-6 aboutus-img-card4">
              <img src={imgfour} />
            </div>
          </div>
        </div>

        <div className="aboutus-whoweare-div">
          <p className="aboutus-whoweare-div-headone">About Us</p>
          <p className="aboutus-whoweare-div-headtwo">Who We Are</p>
          <p className="aboutus-whoweare-para">Welcome to <span className="aboutus-para-bold">Blog Sphere</span>, your ultimate destination for discovering engaging and insightful content on a wide range of topics. Whether you’re seeking advice on personal development, inspiration for your next adventure, or the latest trends in fashion and technology, we bring you well-researched, relevant blogs designed to inform, inspire, and ignite conversations. Our platform is created for readers who crave knowledge and for writers who are passionate about sharing their expertise with the world.</p>
        </div>
      </div>
      <div className="aboutus-sectiontwo-overview">
        <p className="aboutus-sectiontwo-overview-content">Overview</p>
        <div className="row d-flex justify-content-evenly aboutus-sectiontwo-card-row"  >
          <div className="card aboutus-sectiontwo-cardone col-sm-2">
            <div className="card-header aboutus-sectiontwo-cardone-head">Diverse Content</div>
            <div className="card-body  aboutus-sectiontwo-cardone-body">Covering topics ranging from Personal Development to Career & Business, we provide content for all aspects of life.</div>
          </div>
          <div className="card aboutus-sectiontwo-cardtwo col-sm-2">
            <div className="card-header aboutus-sectiontwo-cardtwo-head">Diverse Content</div>
            <div className="card-body  aboutus-sectiontwo-cardone-body">Covering topics ranging from Personal Development to Career & Business, we provide content for all aspects of life.</div>
          </div>
          <div className="card aboutus-sectiontwo-cardthree col-sm-2">
            <div className="card-header aboutus-sectiontwo-cardthree-head">Diverse Content</div>
            <div className="card-body  aboutus-sectiontwo-cardone-body">Covering topics ranging from Personal Development to Career & Business, we provide content for all aspects of life.</div>
          </div>
          <div className="card aboutus-sectiontwo-cardfour col-sm-2">
            <div className="card-header aboutus-sectiontwo-cardfour-head">Diverse Content</div>
            <div className="card-body  aboutus-sectiontwo-cardone-body">Covering topics ranging from Personal Development to Career & Business, we provide content for all aspects of life.</div>
          </div>
        </div>
      </div>
      <div className="aboutus-section-three ">
        <div className="row d-flex justify-content-evenly">
          <div className="card aboutus-section-three-cardone col-sm-5">
            <div className="card-header aboutus-section-three-cardone-head">Mission</div>
            <p className="aboutus-section-three-cardone-para">Our mission is to build a thriving online community that connects readers and writers through valuable, inspiring, and diverse content. We aim to empower individuals to explore their passions, learn something new, and grow in every area of life—be it health, career, finance, or personal development.</p>
          </div>
          <div className="card aboutus-section-three-cardtwo col-sm-5">
            <div className="card-header aboutus-section-three-cardtwo-head">Vision</div>
            <p className="aboutus-section-three-cardtwo-para">Our vision is to become a leading global platform for blogging, where diverse voices come together to share ideas, spark conversations, and inspire positive change. We aim to continuously evolve, providing a vibrant, interactive, and innovative space for both writers and readers, fostering a community that celebrates knowledge and creativity.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About

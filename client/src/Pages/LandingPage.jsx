import React from 'react'
import '../assets/Styles/Pages_Styles/LandingPage.css'
import LandingP_card_one from '../../src/assets/Images/LandingP_card_one.png'
import card_profile from '../../src/assets/Images/card_profile.png';

function LandingPage() {
  return (
    <>
      <div className='LandingPage_Section_one'>
        <div className='LandingPage_Background'>
          <div className='LandingPage_Background_content'>
            <p className='LandingP_Sec_one_para_one'>Welcome to BLOG <span className='LandingP_BG_one_sphere'>SPHERE</span><span className='exclamation' >!</span></p>
            <p className='LandingP_Sec_one_para_two'>From Thoughts to Trends – Your Blogging Hub</p>
            <p className='LandingP_Sec_one_para_three'>Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging<br />content with every visit.</p>
            <button className='btn exploreNow_Button '>Explore Now</button>
          </div>
        </div>
      </div>
      <div className='LandingPage_Section_two'>
        <p className='LandingP_Sec_two_para_one'>Our Recent Blogs...</p>
        <div className="row">
        
            <div className='card-sm-4'>
              <img src={LandingP_card_one}></img>
              <div className="card-body">
                <p className='LP_sec_two_card_one_body'>Budget Sacrificing Experience</p>
                <div className='d-flex'>
                <img className='card_profilepic' src={card_profile}/><p className='Card_profile_name'>Joanna Wellick</p>
                </div>

              </div>
              <div className="card-footer"></div>
            </div>
       
        </div>
      </div>
      <div className='LandingPage_Section_three'>

      </div>
    </>
  )
}

export default LandingPage

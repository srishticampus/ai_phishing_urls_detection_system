import React from 'react'
import '../assets/Styles/Pages_Styles/LandingPage.css'

function LandingPage() {
  return (
    <>
      <div className='LandingPage_Section_one'>
        <div className='LandingPage_Background'>
          <div className='LandingPage_Background_content'>
            <p className='LandingP_Sec_one_para_one'>Welcome to BLOG <span className='LandingP_BG_one_sphere'>SPHERE</span><span className='exclamation' >!</span></p>
            <p className='LandingP_Sec_one_para_two'>From Thoughts to Trends – Your Blogging Hub</p>
            <p className='LandingP_Sec_one_para_three'>Explore a diverse range of content that enlightens, entertains, and inspires with every read. Uncover fresh ideas, new perspectives, and engaging<br/>content with every visit.</p>
            <button className='btn exploreNow_Button '>Explore Now</button>
          </div>
        </div>
      </div>
      <div className='LandingPage_Section_two'>

      </div>
      <div className='LandingPage_Section_three'>

      </div>
    </>
  )
}

export default LandingPage

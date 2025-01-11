import AdvertiserSidebar from "../../Pages/AdvertiserSidebar/AdvertiserSidebar"
import PropTypes from "prop-types";

function AdvertiserViewSidebar({children}){
  return (
    <div className="adv-contaienr">
      <AdvertiserSidebar/>
      <div>
        <div  className="adv-content">
            {children}
        </div>
      </div>
    </div>
  )
}

AdvertiserViewSidebar.propTypes={
    children: PropTypes.node.isRequired, 
  };


export default AdvertiserViewSidebar

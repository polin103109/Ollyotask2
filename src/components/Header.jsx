import "../styles/Header.css";
import Calender from "./Calender";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineCalendar } from "react-icons/ai";
function Header() {
  return (
    <div className="header">
         <div className='headericons'>         
         <FontAwesomeIcon icon={faBars} className="fabaricon"/>
                       <AiOutlineCalendar className="calendarIcon" />
                       <span className="calendar">Calender</span>
                       {/* <div style={width:"300px"}>
                       <Calender/>
                       </div> */}
                     
                       </div>
                    
    </div>
  );
}

export default Header;

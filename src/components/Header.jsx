import "../styles/Header.css";
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
                       </div>
                    
    </div>
  );
}

export default Header;

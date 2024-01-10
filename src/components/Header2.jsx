import React from 'react'
import { AiOutlineDown,AiOutlineSearch,AiOutlineSetting } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle,faTh } from '@fortawesome/free-solid-svg-icons';
import "../styles/Header2.css";
export default function Header2() {
  return (
    
        <div className='headericons2'>         
              <AiOutlineSearch className="search-icon" />
              <FontAwesomeIcon icon={faQuestionCircle} />
                       <AiOutlineSetting className="settingIcon" />
                        <button className="monthbutton"> Month <AiOutlineDown className="dropdown-icon" /></button>
                        <FontAwesomeIcon icon={faTh} />
                        <div></div>
                       </div>

  )
}

import React from 'react';
import './index.css';
import { VscChevronRight } from "react-icons/vsc";


const MentorCard=()=>{
  return(
    <div className="mentorCard">
      <div></div>
      <div className="profilepic">
        <img src="https://www.anime-internet.com/content/images/size/w2000/wordpress/2021/02/1628161_1494435775964_full.png" alt="" />
      </div>
      <div className="userdetails">
        <div className="userdetailsbox">
          <div className="name">
            Miss Angela Miss Angela Miss Angela
          </div>
          <div className="role">Graphic Designer</div>
        </div>
      </div>
      <div className="arrow"><VscChevronRight size="90%" color="black" /></div>
      <div></div>
    </div>
  )
}

export default MentorCard;
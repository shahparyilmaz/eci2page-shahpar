import React from 'react';
import './index.css';
import MentorCard from './mentorcard/index'

const RecommendedMentors=()=>{
  return(
    <div className="outerContainer">
      <div className="rmtitle">
        <p>Recommended Mentors</p>
      </div>
      <MentorCard/>
      <MentorCard/>
      <MentorCard/>
      <MentorCard/>
      <MentorCard/>
    </div>
  )
}

export default RecommendedMentors;
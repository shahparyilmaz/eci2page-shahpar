import React from 'react';
import RecommendedMentors from './recmembers/index';
import PYMK from './peopleyoumayknow/index'
import Feed from './feed/index'
import './index.css'

function FinalPage() {
  return (
    <div className='outerbox'>
      <div className="left"><Feed/></div>
      <div className="upperright"><PYMK/></div>
      <div className="lowerright"><RecommendedMentors/></div>
    </div>
  )
}

export default FinalPage;
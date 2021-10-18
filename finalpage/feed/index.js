import React from "react";
import './feed.css'
import FeedCard from './feedcard'

const Feed=()=>{
    return(
        <div className="feedContainer">
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </div>
    )
}

export default Feed;
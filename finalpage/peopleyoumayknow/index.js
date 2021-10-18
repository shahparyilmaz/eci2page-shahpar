import React from "react";
import './peopleyoumayknow.css'
import PYMKCard from './pymkcard/index'

const PYMK =()=>{
    return(
        <div className="outerContainer">
            <div className="pymktitle">
                <p>People You May Know</p>
            </div>
            <PYMKCard/>
            <PYMKCard/>
            <PYMKCard/>
            <PYMKCard/>
        </div>
    )
}
export default PYMK;
import React from 'react';
import './feedcard.css';
import { VscChevronRight } from "react-icons/vsc";
import { AiOutlineMail,AiFillDelete } from 'react-icons/ai'
import { BsFillRecordFill, BsPersonPlus, BsPeople, BsCircleFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import { ChakraProvider } from "@chakra-ui/react"
import { HStack, Stack } from "@chakra-ui/react"

const FeedCard=()=>{
    return(
        <div className="feedCard">
            <div className="feedpp">
                <img src="https://i.pinimg.com/564x/4f/02/d5/4f02d57afe254fcb51e09cba977a03cc.jpg" alt="" />
            </div>
            <div className="middlebody">
                <div className="nameandoccupation">
                    <p className="feedname">Adrian Brewer</p>
                    <p className="feedoccupation">student</p>
                </div>
                <div className="courseoccupationlocation">
                    <Stack spacing="0px">
                    <div className="courseoccupation">
                        <HStack spacing="10px">
                            <p className="course">BTech CSE</p>
                            <BsCircleFill size="2%"/>
                            <p className="feedorganization">Vellore Institute of technology, Vellore</p>
                        </HStack>
                    </div>
                    <div className="location">
                        <p>Mumbai, Maharashtra</p>
                    </div>
                    </Stack>
                </div>
                <div className="feedconnections">
                    <p className="mutualconnectionsicon"><BsPeople color="rgb(9, 149, 230)" /></p>
                    <p className="mutualconnections">18 Mutual Connections</p>
                </div>
            </div>
            <div>
                <div className="messagecontainer">
                    <button className="messagebtn"><AiOutlineMail/><span></span>Message</button>
                </div>
            </div>
            {/* <div><Button variant="outline-primary" size="sm" borderRadius="1rem">Primary</Button></div> */}
            <div>
                <div className="deletecontainer">
                    <AiFillDelete color="rgb(41, 41, 41)"/>
                </div>
            </div>
        </div>
    )
}

export default FeedCard;
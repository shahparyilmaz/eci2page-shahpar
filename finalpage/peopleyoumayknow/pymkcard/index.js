import React from 'react';
import './pymkcard.css';
import { VscChevronRight } from "react-icons/vsc";
import { BsFillRecordFill, BsPersonPlus, BsPeople, BsCircleFill } from 'react-icons/bs'
// import { ChakraProvider } from "@chakra-ui/react"
import { HStack, Stack } from "@chakra-ui/react"



const pymkCard=()=>{
  return(
    <div className="pymkCard">
        <div></div>
      <div className="pymkprofilepic">
        <img src="https://i.pinimg.com/564x/17/75/8d/17758dc7b280f9b1b32b7e394ff58a9a.jpg" alt="" />
      </div>
      <div className="pymkuserdetails">
        <div className="pymkuserdetailsbox">
          <div className="pymknameandorganization">
            <HStack spacing="10px">
                <p className="pymkname">Miss Angela Angela</p>
                <BsCircleFill size="1%"/>
                <p className="pymkorganization">VIT, Vellore</p>
            </HStack>
          </div>
          <div className="pymkconnections">
              <p className="pymkmutualconnectionsicon"><BsPeople color="rgb(9, 149, 230)" /></p>
              <p className="pymkmutualconnections">  18 Mutual Connections</p>
          </div>
        </div>
      </div>
      <div className="arrow"><BsPersonPlus size="80%" color="rgb(9, 149, 230)" /></div>
      <div></div>
    </div>
  )
}

export default pymkCard;
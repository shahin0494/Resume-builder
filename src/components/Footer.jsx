import React from 'react'
import { LiaMailchimp } from "react-icons/lia";
import { PiMicrophoneStage } from "react-icons/pi";
import { FaConnectdevelop } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { GiBirdTwitter } from "react-icons/gi";

function Footer() {
  return (
    <div style={{ height: '300px' , backgroundColor:'rgb(119, 150, 164)' , fontFamily:' "Quicksand", sans-serif'}} className='d-flex justify-content-center align-items-center text-light'>
      <div className='text-light text-center'>
        <h1 className=''>Contact Us</h1>
        <h3><LiaMailchimp /> monkeykong@gmail.com</h3>
        <h3><PiMicrophoneStage /> 5893290483</h3>
        <h2><FaConnectdevelop />Connect with Us</h2>
        <div className='d-flex justify-content-center fs-4 mt-3 '>
          <RiFacebookCircleLine className='me-5' />
          <TiSocialInstagramCircular className='me-5' />
          <GiBirdTwitter className='me-5' />
        </div>
      </div>

    </div>
  )
}

export default Footer
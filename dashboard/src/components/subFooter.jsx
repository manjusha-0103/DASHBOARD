import React from 'react'
import './subfooter.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SubFooter = () => {
  return (
    <div className='sfooter-main'>
      <div className='sfooter-box-1'><FaFacebookF size='1.5em'color='#103291'/></div>
      <div className='sfooter-box-2'><FaGoogle size='1.5em'color='#bf3232'/></div>
      <div className='sfooter-box-3'><FaTwitter size='1.5em'color='#05d3f7'/></div>
    </div>
  )
}

export default SubFooter

import React from 'react'
import Navbar from '../components/navbar'

import  "./dashboard.css"

const Home = () => {
  return (
    <div className='d-main'>
        <div className='nav-main'>
            <Navbar/>
        </div>
        <div className='da-main'>
            <div className='sidebar-m'></div>
            
        </div>
    </div>
  )
}

export default Home

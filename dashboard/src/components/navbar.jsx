import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './navbar.css'
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaQuestion } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { FaQuestionCircle } from "react-icons/fa";


const Navbar = () => {
    const [open,setOpen] = useState(false)
    const navigate = useNavigate()
    const handleLogout =async()=>{
        if(localStorage.getItem("token")){
            localStorage.clear("token");
            alert('You have logout successfully..');
            navigate('/')
        }
        else{
            alert("First logged in with your account")
            navigate("/")
        }
    }
    return (
        <div className='n-main'>
            <span>
                <Link to ="/dashboard">
                    <button className='home-bt'>Home</button>
                </Link>
            </span>
            <div className='nav-middle'>
                <div className='ab-div'>
                    <Link to ="/about">
                        <span><p className='ab-p'>About Us</p></span>
                    </Link>
                </div>
                <div className='search-div'>
                    <input type="search" placeholder='Search'/>
                    <span>
                        <button className='seatch-bt'><IoSearch color="gray" size={30}/></button>
                    </span>
                </div>
                
            </div>
            <div className='user-div' >
                <span>
                    <button onClick={()=>setOpen(!open)}> 
                        <FaRegUser size={23} color='gray' />
                    </button>
                </span>
            </div>
            
                {open?
                    (<> 
                        <div className='arrow-up'></div>
                        <div className='drop-dv'>
                            <ul>
                                <li>
                                    <Link to="/profile">
                                        <div className='li-item'>
                                            <div><AiOutlineProfile size={20}/></div>
                                            <div><p>Profile</p></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to = "/settings">
                                        <div className='li-item'>
                                            <div><IoSettingsOutline size={20}/></div>
                                            <div><p>Settings</p></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to = "/faqs">
                                        <div className='li-item'>
                                            <div><FaQuestionCircle size={20}/></div>
                                            <div><p>FAQs</p></div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <button className='li-item'onClick={handleLogout}>
                                        <div><CiLogout size={20}/></div>
                                        <div><p>Log-Out</p></div>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </>)
                    :(<></>)
                }
            
        </div>
    )
}

export default Navbar

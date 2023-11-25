import React from 'react'
import './forgetpassword.css'
import { FcLock } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Forgetpassword=()=> {
  return (
    <div style={{
      width: "100%",
      minHeight: "98vh",
      flexDirection:"row",
      display : "flex"
    }}>
      <div style ={{
        width: "70%",
        minHeight:"98vh"
      }}></div>
      <div style={{
        width:"30%",
        minHeight: "98vh",
        borderLeft :"1px solid gray",
        display: "flex",
        flexDirection:"column",
        justifyContent : "center",
        alignItems:"center"
      }}>
        <div style={{display:"flex", flexDirection:"column",width: "80%",alignItems:"flex-start"}}>
          <div>
            <h2>Forget Password?     <span> <FcLock /></span></h2>
            <p style={{
              fontSize : "1rem",
              fontWeight : 700,
              color : "#2b2b2b"
            }}>Enter your email and we'll send you instructions to reset your password</p>
          </div>
          <div style={{
            width: "100%"
          }}>
            <form action="">
              <div style={{
                width: "100%"
              }}>
                <label style={{
                  color : "gray",
                  fontSize: "1.1rem",
                  fontWeight : 500
                }}>Email</label><br />
                <input style={{
                  width: "94%",
                  borderRadius: 5,
                  height: 35,
                  border : "1px solid gray",
                  outlineColor: " #8b6bc3",
                  paddingLeft: 20,
                  marginTop: "1%",
                  cursor: "pointer",
                }} type="text" placeholder='Email'/>
              </div>
              <button className="send-reset" type='submit'>Send Reset Link</button>

            </form>

          </div>

        </div>
        <Link to="/"><p style={{
          fontSize: "1.2rem",
          fontWeight : 500,
          color : "#5d40c8"
        }}>&lt; Back to Login</p></Link>
      </div>
      
    </div>
  )
}

export default Forgetpassword

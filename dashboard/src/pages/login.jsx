import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import SubFooter from "../components/subFooter";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [onclick, setClick] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [userData,setUserData] = useState({
    email : "",
    password : ""
  })

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
    setUserData((prev)=>({
      ...prev ,[evnt.target.name] : evnt.target.value
    }))
  };

  const handleInput = (e)=>{
    const {name, value } = e.target
    setUserData((prev)=>({
      ...prev, [name] : value
    }))
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleLogin =async(e)=>{
    e.preventDefault();
    console.log(userData)
    try{
      const response = await axios.post('http://localhost:5000/api/users/', userData,{
        headers :{
          Authorization :"Bearer"+localStorage.getItem("token")
        }
      });
        console.log(response.data);
        if (response.data.success){
            localStorage.setItem('token',JSON.stringify(response.data)); 
            alert(response.data.msg)
            console.log(response.data.msg)
            navigate("/dashboard")
        }
        else{
          alert(response.data.msg)
          console.log(response.data.msg)
          navigate('/')
        }
    }
    catch(error){
      console.log(error)
    }
  }


  return (
    <div className="main">
      <div className="main-1"></div>
      <div className="main-2">
        <div className="login-title">
          <h4 className="text-h4">Welcome to Vuexy! <span>👋🏻</span></h4>
          <p style={{ marginTop: 0 }}>
            Please sign-in to your account and start the adventure
          </p>
        </div>
        <div className="login-form">
          <form style ={{width :"100%", height :"fit-content"}} onSubmit={handleLogin} method="POST" >
            <div className="form-item">
              <label >
                Email </label>
              
                <input
                  style ={{
                    width: "100%",
                    borderRadius: 5,
                    height: 35,
                    border : "1px solid gray",
                    outlineColor: "1px solid #8b6bc3",
                    paddingLeft: 20,
                    marginTop: "1%",
                    cursor: "pointer",
                  }}
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleInput}
                  value={userData.email}
                />
              
            </div>
            <div className="form-item-pass">
              <label>
                Password 
              </label>
              <div
                style={{
                  marginTop:"1%",
                  display: "flex",
                  height: 38,
                  alignItems: "center",
                  borderRadius: 5,
                  width: "106%",
                  border: "1px solid gray",
                  flexDirection: "row",
                  border: onclick ? "1px solid #8b6bc3" : "1px solid gray",
                  
                }}
              >
                <div style={{width:"88%", height:"100%"}}>
                  <input
                    className="input-pass"
                    type={passwordType}
                    onChange={handleInput}
                    value={userData.password}
                    name="password"
                    placeholder="Password"
                    onClick={() => {
                      setClick(!onclick);
                    }}
                    autoComplete="current-password"
                  />
                </div>
                <div style={{
                  width: "12%",
                  height:"100%",
                  display : "flex",

                }}>
                  <button style = {{
                    border:"none",
                    backgroundColor:"transparent"
                  }} onClick={togglePassword}>
                    {passwordType === "password" ? <PiEyeSlash size={19} color="gray"/> : <PiEye size={19} color="gray"/>}
                  </button>
                </div>
              </div>
            </div>
            <div className="c1">
              <div>
                <label style={{color: "gray" , fontSize :"1.2rem"}}>
                  <input type="checkbox" />   Remember me
                </label>
              </div>
              <div style={{fontSize :"1.2rem"}}><Link to="/forget-pass">Forget Password?</Link></div>
            </div>
            <button  type ="submit"className="login-bt">Login</button>
          </form>
        </div>
        <div>
          <p>
            New on Platform?{" "}
            <span>
              <Link to="/register">Create an account</Link>
            </span>
          </p>
        </div>
        <div style={{display:"flex",flexDirection:"row", justifyContent:"space-around", gap:"2%"}}>
          <div style={{
            marginTop:"3%"
          }}>________________________</div>
          <div>
            <p>or</p>
          </div>
          <div style={{
            marginTop:"3%"
          }}>________________________</div>
        </div>
        <div style ={{width : "40%",}}>
          <SubFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;

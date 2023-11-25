import React,{useState} from "react";
import "./register.css";
import { PiEye } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link,useNavigate } from "react-router-dom";
import SubFooter from "../components/subFooter";
import axios from 'axios'


const Register = () => {
  const [onclick, setClick] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [userData, setUserData] = useState({
    username :"",
    email : "",
    password : ""
  })

  const navigate = useNavigate()


  const handlePasswordChange = async(evnt) => {
    setPasswordInput(evnt.target.value);
    setUserData((prev)=>(
      { ...prev, [evnt.target.name]: evnt.target.value }
    ))
  };

  const handleOnchange =(e)=>{
    const { name, value } = e.target;
    setUserData((prev) => (
      { ...prev, [name]: value }
    ))
  }
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const handleRegister = async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:5000/api/users/register",userData)
      if(response.data.success){
        alert(response.data.msg)
        console.log(response.data.msg)
        navigate("/")
      }
      else{
        alert(response.data.msg)
        console.log(response.data.msg)
      }
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "98vh",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "70%",
          minHeight: "98vh",
        }}
      ></div>
      <div
        style={{
          width: "30%",
          minHeight: "98vh",
          borderLeft: "1px solid gray",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            alignItems: "center",
          }}
        >
          <div>
            <h2>Adventure starts here <span>🚀</span></h2>
            <p style={{
              fontSize: "1.3rem",
              fontWeight : 500,
              color : "gray"
            }}>Create Your Account</p>
            <div style ={{
              width: "100%"
            }}>
              <form onSubmit={handleRegister} method="POST"style={{
                width : "100%"
              }}>
                <div className="form-itm">
                  <label htmlFor="">Username</label><br />
                  <input className="input-it"type="text" placeholder="username" onChange={handleOnchange} name ="username" value ={userData.username}/>
                </div>
                <div className="form-itm">
                  <label htmlFor="">Email</label><br />
                  <input className="input-it" type="text" placeholder="Email"onChange={handleOnchange} name ="email" value ={userData.email}/>
                </div>
                <div className="form-itm">
                  <label htmlFor="">Password</label><br />
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
                    onChange={handleOnchange}
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
                <div className="form-itm">                  
                  <span>
                    <input type="checkbox" />
                    <label htmlFor="">I agree to <span><Link to ="/policy">privacy policy & terms</Link></span></label>
                  </span>
                </div>
                <div className="form-itm">
                  <button  type ="submit"className="signup-bt">Sign Up</button>
                </div>
              </form>
            </div>
          </div> 
        </div>
        <span>
          <p>Already have an account?  <span > <Link style={{color :"#5d40c8"}}to="/"> Sign in instead</Link></span></p>
        </span>
        <div>
          <span>________________________ </span>
          <span> or </span>
          <span>________________________ </span>
        </div>
        <div style={{
          marginTop: "3%",
          width : "40%"
        }}>
          <SubFooter/>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React,{useState} from "react";
import './loginpage.css';
import { useNavigate } from "react-router-dom";


const Login=()=>{
    const [user,setuser]=useState('username');
    const [pass,setpass]=useState('password');
    const navigate = useNavigate();

    const handleforlogin =()=>{
        const required_user="Nirajan";
        const required_pass="Banjade";
        if(user===required_user && pass===required_pass){
            localStorage.setItem("auth", "true");
            navigate('/home');
        }
        else{
            alert("Wrong credentials!")
        }
    }

    return(
        <>
        <div className="capsule">
        <div className="form">
            <form>
                <label>UserName</label>
                <input type="text" onChange={(e)=>setuser(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e)=>setpass(e.target.value)}/>
            </form>
            <div className="login">
            <button onClick={handleforlogin}>Login</button>
                <p id="forgot">
                    Forgot Password?
                </p>
            </div>
        </div>
        <div className="form-side">
            <p id="welcome">Welcome to Login</p>
            <p id="account"> Don't have an account ?</p>
            <p id="signup">Sign up</p>
        </div>
        </div>
        </>

    )
};

export default Login;
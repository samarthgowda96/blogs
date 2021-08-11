import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const [error, setError]=useState(false)
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError(false) 
    try {
      const res= await axios.post("https://blogs-mern1.herokuapp.com/auth/register",{ 
        username:username,
        email:email,
        password:password,
  
      })
      res.data && window.location.replace('/')
      setError(false)
      
  
    } catch (error) {
      console.log(error) 
      setError(true)
      
    }
    

  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
          
           />
        <label>Email</label>
        <input 
          className="registerInput" 
          type="text" 
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
          
          />
        <label>Password</label>
        <input 
          className="registerInput" 
          type="password" 
          placeholder="Enter your password..." 
          onChange={(e)=>setPassword(e.target.value)}
          
          />
        <button className="registerButton" type='submit'>Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
        </Link>
        {error && <span style={{color:"red", marginTop:"12px"}}>Something went wrong Bois!!</span>}
      
    </div>
    )
}

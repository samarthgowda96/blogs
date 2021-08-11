import { useContext,useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import axios from 'axios'

import {Context} from '../context/Context'

export default function Topbar() {
  const {user,dispatch} = useContext(Context);
  const [profilePic,setProfilePic]=useState("")

  const handleLogout=()=>{
    dispatch({type:"LOGOUT"})

  }
  if(user){
    const fetchUser= async ()=>{
      const res= await axios.get('https://blogs-mern1.herokuapp.com/users/'+user._id)
      //console.log(res.data)
      setProfilePic(res.data.profilePic)

      
    }
    fetchUser();


  }
    
  
    

   



 
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.hackerrank.com/SamarthVGowda">
      <i className="topIcon fab fa-hackerrank icon">
          
         </i> </a>
         <a href="https://www.linkedin.com/in/samarth-gowda96/">

        <i className="topIcon fab fa-linkedin">
         
          
        </i></a>
        <a href="https://www.facebook.com/samarth13"> 
        <i className="topIcon fab fa-facebook">
          

          
        </i></a>
        <a href="https://github.com/samarthgowda96">
        <i className="topIcon fab fa-github">
          

         
        </i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <Link className="link" to="/about">
          <li className="topListItem">ABOUT</li>
          </Link>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
            </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem" onClick={handleLogout}>LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={profilePic}
              alt="Avatar"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

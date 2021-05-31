import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import "./sidebar.css";
import axios from 'axios'

export default function Sidebar() {
  const [cats,setCats]= useState([])
  useEffect(()=>{
    const getCats= async ()=>{
      const res = await axios.get('http://localhost:5000/category');
      setCats(res.data)
      console.log(res.data)
    }
    getCats();

  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/.jpg"
          alt=""
        />
        <p>
         
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> </li>
            {cats.map(cat=>(
              <Link to={`/?category=${cat.name}`} className='link'key={cat._id}>
                <li className="sidebarListItem" >{cat.name}</li>
              </Link>


            ))}
           
          
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}

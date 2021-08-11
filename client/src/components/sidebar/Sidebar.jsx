import { Link } from "react-router-dom";
import {useState,useEffect} from 'react'
import "./sidebar.css";
import axios from 'axios'

export default function Sidebar() {
  const [cats,setCats]= useState([])
  /* useEffect(()=>{
    const getCats= async ()=>{
      const res = await axios.get('http://localhost:5000/category');
      setCats(res.data)
      console.log(res.data)
    }
    getCats();

  },[]) */
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2018/10/Blog_Full-stack-dev.jpg"
          alt="sam"
        />
        <p>
         
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> </li>
            {cats.map(cat=>(
              <Link to={`/?category=${cat.name}`} className='link'key={cat._id}>
                <li className="sidebarListItem" >{cat.name}</li>
              </Link>


            ))}
           
          
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
}

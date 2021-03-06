import {useState,useEffect} from 'react'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from 'axios';
import {useLocation} from 'react-router'

export default function Homepage() {
  const [posts,setPosts]=useState([]);
  const {search}= useLocation();
  console.log(search)
 
  //const username= location.search.split('=')[1];
 

  useEffect(()=>{
    const fetchPosts= async ()=>{
      const res= await axios.get('https://blogs-mern1.herokuapp.com/posts'+search)
      setPosts(res.data)
      
    }
    fetchPosts();

   
  },[search])
  return (
    <>
      <Header />
      <div className="home"> 
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

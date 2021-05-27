import {useState,useEffect} from 'react'
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from 'axios';

export default function Homepage() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts= async ()=>{
      const res= await axios.get('http://localhost:5000/posts')
      setPosts(res.data)
      
    }
    fetchPosts();

   
  },[])
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

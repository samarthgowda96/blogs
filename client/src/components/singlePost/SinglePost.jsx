import { useEffect,useState,useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "./singlePost.css";
import axios from 'axios'
import {Context} from '../../components/context/Context';

export default function SinglePost() {
  const location= useLocation();
  const singlePostId = location.pathname.split('/')[2];
  const [post, setPost]= useState({})
  const {user }= useContext(Context)
  useEffect(()=>{
    const getSinglePost= async ()=>{
      const res = await axios.get('http://localhost:5000/posts/'+singlePostId)
      setPost(res.data)
      console.log(res.data)
    }
    getSinglePost();
  },[singlePostId])

  const handleDelete=async()=>{
    try {
      await axios.delete("http://localhost:5000/posts/"+singlePostId,{
        data:{username:user.username}
    })
      window.location.replace("/")
      
    } catch (error) {
      console.log(error)
      
    }
   

  }
  return (

    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo&&
          
        <img
          className="singlePostImg"
          src={post.photo}
          alt=""
        />
        }
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username &&(
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${post.username}`}>
                {post.username}
              </Link>
            </b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}
        </p>
      </div>
    </div>
  );
}

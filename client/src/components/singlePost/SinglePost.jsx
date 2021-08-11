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
  const [title, setTitle]=useState("")
  const [desc,setDesc]= useState("")
  const [updateMode,setUpdateMode]=useState(false)
  useEffect(()=>{
    const getSinglePost= async ()=>{
      const res = await axios.get('https://blogs-mern1.herokuapp.com/posts/'+singlePostId)
      setPost(res.data)
      setTitle(res.data.title)
      setDesc(res.data.desc)

    }
    getSinglePost();
  },[singlePostId])

  const handleDelete=async()=>{
    try {
      await axios.delete("https://blogs-mern1.herokuapp.com/posts/"+singlePostId,{
        data:{username:user.username}
    })
      window.location.replace("/")
      
    } catch (error) {
      console.log(error)
      
    }
   

  }

  const handleUpdate=async()=>{
    try {
      await axios.put("https://blogs-mern1.herokuapp.com/posts/"+singlePostId,{
        username:user.username,
        title:title,
        desc:desc

      })
      //window.location.reload();
      setUpdateMode(false)

      
    } catch (error) {
      
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
      {
        updateMode?<input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e)=>setTitle(e.target.value)}/>:(
          <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username &&(
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true  )}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>
          )}
        </h1>
        )
      }
        
        
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
        {updateMode?(
          <textarea  className="singlePostDesc"value={desc} autoFocus onChange={(e)=>setDesc(e.target.value) } />):(

        
        <p className="singlePostDescInput" >
        {desc}
        </p>
          
        )}
        <button className="singlePostButton" onClick={handleUpdate}>Update!</button>
      </div>
    </div>
  );
}

import "./write.css";
import {useState,useRef,useContext} from "react";
import axios from 'axios';
import {Context} from '../../components/context/Context';
import FileBase from 'react-file-base64'

export default function Write() {
  const [title, setTitle] =useState ("");
  const [desc,setDesc]= useState("");
  const [photo,setPhoto]= useState("");
  const {user }= useContext(Context)
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newPost={
      username:user.username,
      title,
      desc,
      photo

     
      
    }
    /* if(file){
      const data= new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename); 
      data.append("file",file);
      newPost.photo= filename;
      try {
        await axios.post("http://localhost:5000/api/upload",data)
        
      } catch (error) {
        console.log("error!")
         
      }

    }  */
    try {
      const res= await axios.post("https://blogs-mern1.herokuapp.com/posts",newPost)
     // window.location.replace("/post/"+ res.data._id)
     window.location.replace('/')
      
    } catch (error) {
      console.log(error)
      console.log(photo)
      
    }
    
  }
  return (
    <div className="write">
     {/*  {file&&
      <img
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt=""
      />
    } */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            
            <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) =>setPhoto(base64)}
                    className="writeInput"
                    > <i className="writeIcon fas fa-plus"></i></FileBase>
          </label>
          {/* <input id="fileInput" type="file" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])}/> */}
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

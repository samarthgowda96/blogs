import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import {useContext,useState} from 'react';
import {Context} from '../../components/context/Context'
import FileBase from 'react-file-base64'
import axios from 'axios'

export default function Settings() {
  const {user}= useContext(Context)
  const [username, setUsername] =useState ("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [profilePic,setProfilePic]= useState("");
  const [success,setSuccess]= useState(false)

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const updateUser={
      userId:user._id,
      username,
      email,
      password,
      profilePic
    }

      try {
         await axios.put("http://localhost:5000/users/"+user._id,updateUser)
         setSuccess(true)
         console.log(user)
        } catch (error) {
        console.log(error)
      }
    }
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            
             <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) =>setProfilePic(base64)}
                    className="writeInput"
                    > <i className="writeIcon fas fa-plus"></i></FileBase>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} name="name" onChange={(e)=>setUsername(e.target.value)}/>
          <label>Email</label>
          <input type="email" placeholder={user.email} name="email"  onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          {success&&<span style={{color:"green"}}>Profile has been updated!!</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

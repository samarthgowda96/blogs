import { Link } from "react-router-dom";
import "./post.css";

export default function Post({post}) {
  
  return (
    <div className="post">
      {post.photo&&(
      <img
        className="postImg"
        src={post.photo} 
        alt="image"
      />
      )}
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            {post.categories.map(categrory=>(
               <span className="postCat">{categrory.name}</span>
            ))}
            
          </span>
          <span className="postCat">
            
          </span>
        </div>
        <Link to={`/post/${post._id}`} className='link'>
        <span className="postTitle"> 
          {post.title}
        </span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
       {post.desc}
      </p>
    </div>
  );
}

import "./header.css";
import {useContext} from 'react';
import {Context} from '../../components/context/Context'
export default function Header() {
  const {user }= useContext(Context)
  return (
    <div className="header">
        <h2 className="headerTitles">Welcome {user.username} :)</h2>
      <div className="headerTitles">
        <span className="headerTitleSm">Sammy's</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}

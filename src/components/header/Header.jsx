import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { IoNotificationsOutline, IoSearch } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img className="header_icon" src={logo} alt="logo" />
        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>New & Popular</span>
        <span>My List</span>
        <span>Browse by Language</span>
      </div>
      <div className="headerRight">
        <span><IoSearch /></span>
        <span>Children</span>
        <span><IoNotificationsOutline /></span>
        <span><img className="user_icon" src={user} alt="User" /></span>
        <span><IoMdArrowDropdown/></span>
      </div>
    </div>
  );
};

export default Header;

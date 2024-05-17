import { useState } from "react";
import logo from "../assets/images/logo.svg";
import "./Header.css";
import menu from "../assets/images/icon-menu.svg";
import close from "../assets/images/icon-menu-close.svg"

const Header = () => {

    const [display, setDisplay] = useState(false);

    const showDisplay=()=>{
        setDisplay(prev=>!prev)
    }
  return (
   <header className="header-component">
<div className="header">
<img src={logo} alt="logo" />
    <nav className="desktop">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
        </ul>
    </nav>
    <div className="mobile-menu-container">
    <div className={`${display && " mobile-navigation"} desktop `}>
    <div  className="mobile-menu">
    <img onClick={showDisplay} src={close} alt="close" />
    <nav className="mobile-nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
        </ul>
    </nav>
    </div>
    </div>
    <div onClick={showDisplay} className={`${display && "desktop"} menu`}>
        <img src={menu} alt="menu" />
    </div>
    </div>
</div>
    
   </header>
  )
}

export default Header
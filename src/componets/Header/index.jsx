import LOGO from "../../assets/Logo.png";
import BURGER from "../../assets/burger.png";
import { NavLink } from "react-router-dom";
import "./header.css";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Item from "./item/index";

const Header = ()=> {
  
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu=() => {
        setMenuOpen(!menuOpen)
    }

    return (
    <header>
      <div className="item">
      <img src={LOGO} className='logo' />
      <Item />
      </div>
      <nav className="nav">
        <NavLink to="/" className='nav-item nav-bord-lefl'>
            Home
        </NavLink>
        <NavLink to="/AboutMe" className='nav-item'>
            About Me
        </NavLink>
        <NavLink to="/Portfolio" className='nav-item'>
            Portfolio
        </NavLink>
        <NavLink to="/Services" className='nav-item nav-bord-rait'>
            Services
        </NavLink>
      </nav>
      <button className="main-btn header-btn btn">
        <NavLink to="/Contact" className='linka'>
        Contact Me
        </NavLink>
      </button>
      <button className="burger" onClick={handleMenu}>
        <img src={BURGER} />
      </button>
      {
        menuOpen && <MobileMenu bMenu={handleMenu} />
      }
    </header>
    );
}

export default Header;


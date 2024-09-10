import { NavLink } from "react-router-dom";
import "./MobileMenu.css"

const MobileMenu = ({bMenu})=> {
    return (
        <div className="mobile-menu">
           <nav className="mobile-menu__nav" onClick={bMenu}>
               <NavLink to="/" className='mobile-nav-item'>
                     Home
                </NavLink>
                <NavLink to="/AboutMe" className='mobile-nav-item'>
                      About Me
                </NavLink>
                <NavLink to="/Portfolio" className='mobile-nav-item'>
                      Portfolio
               </NavLink>
               <NavLink to="/Services" className='mobile-nav-item'>
                      Services
               </NavLink>
           </nav>
        </div>
    );
}

export default MobileMenu;
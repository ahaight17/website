import { Link, useLocation } from 'react-router-dom'
import name from '../../../public/assets/nav/name.png'
import home from '../../../public/assets/nav/home.png'
import about from '../../../public/assets/nav/about.png'
import work from '../../../public/assets/nav/work.png'
import hover from '../../../public/assets/nav/hover.png'
import shop from '../../../public/assets/nav/shop.png'
import hamburger from '../../../public/assets/nav/hamburger.png'

import "../aesthetic/aesthetic.css"
import { useEffect, useRef, useState } from 'react'
export default function Header(props){
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const hamburgerRef = useRef();

    const isActive = (path) => location.pathname === path ? "active" : "";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="flex-container-row header">
            <div className='header-container flex-container-row'>
                <Link to={"/"}>
                    <img src={name} height={"100"} onHover/>
                </Link>
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)} ref={hamburgerRef}>
                    <img src={hamburger} className="base" height={"50"}/>
                </div>
                <div className={`nav-links flex-container-row ${menuOpen ? "open" : ""}`} ref={navRef}>
                    <Link to={"/"}>
                        <div className='flex-container-column'>
                            <img src={home} className="base" height={"35"}/>
                            <img src={hover} className={`hover ${isActive("/")}`} height={"35"}/>
                        </div>
                    </Link>
                    <Link to={"work"}>
                        <div className='flex-container-column'>
                            <img src={work} className="base" height={"35"}/>
                            <img src={hover} className={`hover ${isActive("/work")}`} height={"35"}/>
                        </div>
                    </Link>
                    <Link to={"/about"}>
                        <div className='flex-container-column'>
                            <img src={about} className="base" height={"35"}/>
                            <img src={hover} className={`hover ${isActive("/about")}`} height={"35"}/>
                        </div>
                    </Link>
                    <Link to={"/shop"}>
                        <div className='flex-container-column'>
                            <img src={shop} className="base" height={"35"}/>
                            <img src={hover} className={`hover ${isActive("/shop")}`} height={"35"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
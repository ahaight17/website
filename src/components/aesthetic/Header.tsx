import { Link, useLocation } from 'react-router-dom'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'

import name from '../../assets/nav/name.png'
import home from '../../assets/nav/home.png'
import about from '../../assets/nav/about.png'
import work from '../../assets/nav/work.png'
import hover from '../../assets/nav/hover.png'
import shop from '../../assets/nav/shop.png'
import hamburger from '../../assets/nav/hamburger.png'
import close from '../../assets/nav/close.png'
import "../aesthetic/aesthetic.css"

export const Header: FunctionComponent = () =>{
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef();
    const hamburgerRef = useRef();

    const isActive = (path: string) => location.pathname === path ? "active" : "";

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
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
            document.body.classList.add("menu-open");
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.body.classList.remove("menu-open");
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.body.classList.remove("menu-open");
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div className="flex-container-row header">
            <div className='header-container flex-container-row'>
                <Link to={"/"}>
                    <img src={name} className='header-title' height={"100"}/>
                </Link>
                <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)} ref={hamburgerRef}>
                    <img src={hamburger} className={`hamburger-icon ${menuOpen ? 'hidden' : 'visible'}`} height={"50"}/>
                    <img src={close} className={`hamburger-icon ${menuOpen ? 'visible' : 'hidden'}`} height={"50"}/>
                </div>
                <div className={`nav-links ${menuOpen ? "open" : ""}`} ref={navRef}>
                    <Link to={"/"}>
                        <div className='flex-container-column'>
                            <img src={home} className="base" />
                            <img src={hover} className={`hover ${isActive("/")}`} height={"50"}/>
                        </div>
                    </Link>
                    <Link to={"/work"}>
                        <div className='flex-container-column'>
                            <img src={work} className="base" height={"50"}/>
                            <img src={hover} className={`hover ${isActive("/work")}`} height={"50"}/>
                        </div>
                    </Link>
                    <Link to={"/about"}>
                        <div className='flex-container-column'>
                            <img src={about} className="base" height={"50"}/>
                            <img src={hover} className={`hover ${isActive("/about")}`} height={"50"}/>
                        </div>
                    </Link>
                    <Link to={"/shop"}>
                        <div className='flex-container-column'>
                            <img src={shop} className="base" height={"50"}/>
                            <img src={hover} className={`hover ${isActive("/shop")}`} height={"50"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
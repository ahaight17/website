import { Link } from 'react-router-dom'
import name from '../../../public/assets/nav/name.png'
import home from '../../../public/assets/nav/home.png'
import about from '../../../public/assets/nav/about.png'
import work from '../../../public/assets/nav/work.png'

import "../aesthetic/aesthetic.css"
export default function Header(props){
    return (
        <div className="flex-container-row header">
            <div className='header-container flex-container-row'>
                <Link to={"/"}>
                    <img src={name} height={"100"}/>
                </Link>
                <div className='nav-links flex-container-row'>
                    <Link to={"/"}>
                        <img src={home} height={"35"}/>
                    </Link>
                    <Link to={"/about"}>
                        <img src={about} height={"35"}/>
                    </Link>
                    <Link to={"/work"}>
                        <img src={work} height={"35"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
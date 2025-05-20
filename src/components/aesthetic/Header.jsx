import { Link } from 'react-router-dom'
import name from '../../../public/assets/nav/name.png'
import home from '../../../public/assets/nav/home.png'
import about from '../../../public/assets/nav/about.png'
import work from '../../../public/assets/nav/work.png'
import hover from '../../../public/assets/nav/hover.png'

import "../aesthetic/aesthetic.css"
export default function Header(props){
    return (
        <div className="flex-container-row header">
            <div className='header-container flex-container-row'>
                <Link to={"/"}>
                    <img src={name} height={"100"} onHover/>
                </Link>
                <div className='nav-links flex-container-row'>
                    <Link to={"/"}>
                        <div className='flex-container-column'>
                            <img src={home} height={"35"}/>
                            <img src={hover} className='hover' height={"35"}/>
                        </div>
                    </Link>
                    <Link to={"/work"}>
                        <div className='flex-container-column'>
                            <img src={work} height={"35"}/>
                            <img src={hover} className='hover' height={"35"}/>
                        </div>
                    </Link>
                    <Link to={"/about"}>
                        <div className='flex-container-column'>
                            <img src={about} height={"35"}/>
                            <img src={hover} className='hover' height={"35"}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
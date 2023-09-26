import folder from 'assets/folder.png'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header(props){
    const location = useLocation()
    const navigate = useNavigate()
    const [showBackButton, setShowBackButton] = useState(false)

    const handleBackButtonClick = () => {
        props.setLoading(true)
        var paths = location.pathname.split("/")
        paths.pop()
        navigate(paths.join("/"))
    }

    useEffect(() => {
        setShowBackButton(location.pathname !== "/")
    }, [location])

    if (showBackButton) {
        return (
            <div className="flex-container-row header" onClick={handleBackButtonClick}>
                <img className="folder-img img-default" src={folder}/>
                <p className="folder-name">..</p>
            </div>
        )
    } else {
        return (
            <div className="flex-container-row header" />
        )
    }
}
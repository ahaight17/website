import { useLocation, useNavigate } from "react-router-dom"
import folder from 'assets/folder.png'

export default function FolderPage(props){
    const navigate = useNavigate()
    const location = useLocation()

    const handleFolderClick = (e) => {
      const folderName = e.target.parentElement.outerText
      const compositePathname = location.pathname === "/" ? `${location.pathname}${folderName}` : `${location.pathname}/${folderName}`
  
      navigate(compositePathname)
      props.setCurrentChildren(props.currentChildren[folderName])
      if(Object.keys(props.currentChildren[folderName]).length <= 0){
        props.setIsValidPath(false)
      }
      if(Object.keys(Object.values(props.currentChildren[folderName])[0]).length <= 0){
        props.setIsFolderSet(false)
      }
    }

    return (
        Object.keys(props.currentChildren).map((objectName) => (
        <div className="content-box">
            <div className="flex-container-row center" onClick={handleFolderClick}>
            <img className="folder-img img-default" src={folder}/>
            <h1 className="folder-name">{objectName}</h1>
            </div>
        </div>
        ))
    )
}
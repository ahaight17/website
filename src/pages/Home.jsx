import Footer from "components/aesthetic/Footer";
import { callApiWithEndpoint } from "helper/callApiWithEndpoint";
import { useEffect, useState } from "react";
import Loading from "components/aesthetic/Loading";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Error from "./Error";
import FolderPage from "./FolderPage";
import ImagePage from "./ImagePage";
import Header from "components/aesthetic/Header";

export default function Home(){
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [fileTree, setFileTree] = useState(undefined)
  const [currentChildren, setCurrentChildren] = useState({})
  const [isValidPath, setIsValidPath] = useState(true)
  const [isFolderSet, setIsFolderSet] = useState(true)

  const getAllObjects = async () => {
    let res = await callApiWithEndpoint('/listObjects')
    let result = {};

    res.Contents.forEach(path => {
      path.Key.split('/').reduce((r, name) => {
        if(!r[name]){
          r[name] = {}
        }
        return r[name]
      }, result)
    })

    setCurrentChildren(result)
    setFileTree(result)
    if(result[params["*"]] === undefined && params["*"] !== ""){
      setIsValidPath(false)
    }
    updateTreeWithLocation()
  }

  const updateTreeWithLocation = () => {
    const subroutes = location.pathname.split("/")
    if(fileTree !== undefined){
      let tree = fileTree
      subroutes.forEach((path) => {
        if(path !== ""){
          tree = tree[path]
        }
      })
      setIsValidPath(tree !== undefined)
      setCurrentChildren(tree)
      setIsFolderSet(Object.keys(Object.values(tree)[0]).length > 0)
    }
  }

  useEffect(() => {
    getAllObjects()
  }, [])

  useEffect(() => {
    updateTreeWithLocation()
  }, [location, fileTree])

  if(isValidPath){
    return(
      <div className="color-4 fit-page relative-position flex-container-column">
        <Header />
        { fileTree !== undefined ? (
          isFolderSet ? (
            <div className="content-page flex-container-row center folder-page">
              <FolderPage
                currentChildren={currentChildren} 
                setCurrentChildren={setCurrentChildren}
                setIsValidPath={setIsValidPath}
                setIsFolderSet={setIsFolderSet}
              />
            </div>
          ) : (
            <div className="content-page flex-container-row center image-page">
              <ImagePage currentChildren={currentChildren} />
            </div>
          )
        ) :
        (
          <div className="content-page center flex-container-row">
            <Loading /> 
          </div>
        ) 
        }
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="color-4 fit-page relative-position flex-container-column">
        <div className="fit-page flex-container-row center">
          <Error />
        </div>
        <Footer />
      </div>
    )
  }
}
import Footer from '../components/aesthetic/Footer';
import { callApiWithEndpoint } from '../helper/callApiWithEndpoint';
import { useEffect, useState } from "react";
import Loading from '../components/aesthetic/Loading';
import { useParams, useLocation } from "react-router-dom";
import Error from '../pages/Error';
import FolderPage from '../pages/FolderPage';
import ImagePage from '../pages/ImagePage';
import Header from '../components/aesthetic/Header';

export default function Home(){
  const params = useParams()
  const location = useLocation()
  const [loading, setLoading] = useState(true);
  const [currentChildren, setCurrentChildren] = useState({})
  const [isValidPath, setIsValidPath] = useState(true)
  const [isFolderSet, setIsFolderSet] = useState(true)
  const [bodyColor, setBodyColor] = useState(new Date().getMilliseconds()%7)

  const updateTreeWithLocation = async () => {
    const subroutes = location.pathname.split("/")
    const query = subroutes
    query.shift()
    let res = await callApiWithEndpoint(`/listObjects?path=${query.join("/")}`)
    if(res.Contents === undefined){
      setIsValidPath(false)
      return
    }

    // form better data structure to work with idk
    let result = {};
    res.Contents.forEach(path => {
      path.Key.split('/').reduce((r, name) => {
        if(!r[name]){
          r[name] = {}
        }
        return r[name]
      }, result)
    })

    let tree = result
    subroutes.forEach((path) => {
      if(path !== ""){
        tree = tree[path]
      }
    })
    if(tree === undefined){
      setIsValidPath(false)
    } else {
      setIsValidPath(true)
      setCurrentChildren(tree)
      setIsFolderSet(Object.keys(Object.values(tree)[0]).length > 0)
    }

    setLoading(false)
  }

  useEffect(() => {
    // updateTreeWithLocation()
  }, [location])

  useEffect(() => {
    let body = document.getElementsByClassName("home-page-outer")[0]
    body.style.backgroundColor = `var(--color${bodyColor})`
    setBodyColor(bodyColor === 7 ? 1 : bodyColor+1)
  }, [location])

  useEffect(() => {
    async function callApi() {
      const res = await callApiWithEndpoint("/")
      console.log(res);
    }
    callApi()
  }, [])

  if(isValidPath){
    return(
      <div className="color-default fit-page relative-position flex-container-column home-page-outer">
        <Header setLoading={setLoading}/>
        { !loading ? (
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
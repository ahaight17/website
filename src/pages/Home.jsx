import Footer from "components/aesthetic/Footer";
import { callApiWithEndpoint } from "helper/callApiWithEndpoint";
import { useEffect, useState } from "react";
import folder from 'assets/folder.png'
import Loading from "components/aesthetic/Loading";

export default function Home(){
  const [fileTree, setFileTree] = useState(undefined)


  const getAllObjects = async () => {
    let res = await callApiWithEndpoint('/listObjects')
    let result = [];
    let level = {result};

    res.Contents.forEach(path => {
      path.Key.split('/').reduce((r, name) => {
        if(!r[name]) {
          r[name] = {result: []};
          r.result.push({name, children: r[name].result})
        }
        
        return r[name];
      }, level)
    })

    setFileTree(result)
  }

  useEffect(() => {
    if(fileTree == undefined){
      getAllObjects()
    }
  }, [])

  return(
    <div className="color-4 fit-page relative-position flex-container-column">
      <div className="fit-page flex-container-row center">
        {fileTree !== undefined ? (
          fileTree.map((file) => {
            return (
              <div className="content-box">
                <div className="flex-container-row center">
                  <img className="folder-img img-default" src={folder}/>
                  <h1 className="folder-name">{file.name}</h1>  
                </div>
              </div>
            )
          })
        ) :
        (
          <Loading />
        ) 
        }
      </div>
      <Footer />
    </div>
  )
}
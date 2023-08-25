import { useLocation } from "react-router-dom"

export default function ImagePage(props){
  const location = useLocation()
    return (
        Object.keys(props.currentChildren).map((objectName) => {
            let imgUrl = `${process.env.REACT_APP_S3_BUCKET_ENDPOINT}${location.pathname}/${objectName}`
            return (
              <div className="content-box">
                <div className="flex-container-column center product-box">
                  <img className="product-img" src={imgUrl}/>
                  <p1 className="product-title">{objectName}</p1>
                </div>
              </div>
            )
        })
    )
}
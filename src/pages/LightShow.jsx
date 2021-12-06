import { useWindowSize } from "hooks/useWindowSize"
import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

export default function LightShow(props){
  const NUMLIGHTS = 50
  const [w, h] = useWindowSize();
  const [lights, setLights] = useState([])

  useEffect(() => {
    let lSize = parseInt(w/NUMLIGHTS);
    if(lights.length < NUMLIGHTS && w !== 0 && h !== 0){
      for(let i = 0; i < NUMLIGHTS-lights.length; i++){
        let light = document.createElement('div')
        light.classList.add('light')
        light.classList.add('color-3')
        light.style.height = `${lSize}px`
        light.style.width = `${lSize}px`
  
        setLights(oldLights => [...oldLights, light])
      }
    }
  }, [w, h])
  console.log(lights)
  return(
    <div className="color-1 fit-page lights-container">
      { lights.map((light) => {
        console.log(light)
        return(<>{light}</>)
      }) }
    </div>
  )
}
import './aesthetic.css'

export default function VerticalDivider(props){
  return(
    <div className="vertical-divider" style={{height: `${props.height}`}}/>
  )
}
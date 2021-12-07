import './aesthetic.css'

export default function HorizontalDivider(props){
  return(
    <div className="horizontal-divider" style={{width: `${props.width}`}}/>
  )
}
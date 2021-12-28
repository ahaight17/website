import './aesthetic.css'
import VerticalDivider from './VerticalDivider'

export default function Footer(){
  return(
    <>
      <div className="footer">
        <div className="flex-container-row center">
          <a href="https://github.com/ahaight17">
            <img src="/assets/logos/github.png" alt="github logo"/>
          </a>
          <a href="https://www.linkedin.com/in/alexhaight/">
            <img src="/assets/logos/linkedin.png" alt="linkedin logo"/>
          </a>
          {/* <VerticalDivider height={'2rem'}/>
          <a href="/event-generator">Event Generator</a> */}
        </div>
      </div>
    </>
  )
}
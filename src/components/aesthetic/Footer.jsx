import '../aesthetic/aesthetic.css'
import github from '../../../public/assets/logos/github.png'
import linkedin from '../../../public/assets/logos/linkedin.png'

export default function Footer(){
  return(
    <>
      <div className="footer">
        <div className="flex-container-row center">
          <a href="https://github.com/ahaight17">
            <img src={github} alt="github logo" className="footer-logo"/>
          </a>
          <a href="https://www.linkedin.com/in/alexhaight/">
            <img src={linkedin} alt="linkedin logo" className="footer-logo"/>
          </a>
        </div>
      </div>
    </>
  )
}
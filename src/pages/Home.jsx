import Footer from "components/aesthetic/Footer";
import RotatingCube from "components/utils/RotatingCube";

export default function Home(){

  const handleClick = () => {
    fetch(`${process.env.REACT_APP_WEBSITE_API}/api`, {
      method: 'GET'
    }).then((res) => {
      return res.text()
    }).then((data) => {
      console.log(data)
    })
  }

  return(
    <div className="color-4 fit-page relative-position flex-container-column">
      <div onClick={handleClick}>
        <h1 id="coming-soon-banner">I'M WORKING ON IT</h1>
        <RotatingCube />
      </div>
      <Footer />
    </div>
  )
}
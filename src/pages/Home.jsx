import Footer from "components/aesthetic/Footer";
import VerticalDivider from "components/aesthetic/VerticalDivider";
import RotatingCube from "components/utils/RotatingCube";

export default function Home(){
  return(
    <div className="color-4 fit-page relative-position flex-container-column">
      <div>
        <h1 id="coming-soon-banner">I'M WORKING ON IT</h1>
        <RotatingCube />
      </div>
      <Footer />
    </div>
  )
}
import { Loader } from '@googlemaps/js-api-loader';
import VerticalDivider from 'components/aesthetic/VerticalDivider';
import { useEffect, useState } from 'react'
import '../components/buttons/buttons.css'
import './pages.css'

export default function EventGenerator(){
  const loader = new Loader({
    apiKey: process.env.REACT_APP_GCP_API_KEY,
    version: "weekly",
    libraries: ["places"]
  });

  const [location, setLocation] = useState([]);
  const [lName, setLName] = useState(undefined);

  loader.load().then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: location[0], lng: location[1] },
      zoom: 13,
      mapTypeId: "roadmap",
    });

    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    // map.addListener('bounds_changed', (e) => {
    //   console.log(e)
    // })

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if(places.length === 0) return;

      setLocation([places[0].geometry.location.lat(), places[0].geometry.location.lng()])
      setLName(places[0].name)
    })
  }).catch((e) => {
    console.error(e);
  })

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude])
      })
    }
  }, [])

  return(
    <>
      <div className="color-3 fit-page flex-container-column event-generator">
        <h1 id="location-title">{lName === undefined ? 'Search a location to find events' : `Showing events near ${lName}`}</h1>
        <div className="flex-container-row center">
          <input
            id="pac-input"
            type="text"
            placeholder="Search Box"
          />
          <div id="map" />
          <VerticalDivider height={'77vh'} />
          <div className="events-list">
            <h1>Events List</h1>
          </div>
        </div>
      </div>
    </>
  )
}
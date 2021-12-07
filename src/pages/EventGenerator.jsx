import { Loader } from '@googlemaps/js-api-loader';
import VerticalDivider from 'components/aesthetic/VerticalDivider';
import EventsList from 'components/EventsList';
import Loading from 'components/utils/Loading';
import RotatingCube from 'components/utils/RotatingCube';
import { makeQueryParams } from 'hooks/makeQueryParams';
import Geohash from 'latlon-geohash';
import { useEffect, useState } from 'react'
import '../components/buttons/buttons.css'
import './pages.css'

export default function EventGenerator(){

  const [location, setLocation] = useState([]);
  const [lName, setLName] = useState(undefined);
  const [events, setEvents] = useState([]);

  const loader = new Loader({
    apiKey: process.env.REACT_APP_GCP_API_KEY,
    version: "weekly",
    libraries: ["places"]
  });

  loader.load().then((google) => {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: location[0], lng: location[1] },
      zoom: 13,
      mapTypeId: "roadmap",
    });

    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if(places.length === 0) return;

      setLocation([places[0].geometry.location.lat(), places[0].geometry.location.lng()])
      setLName(places[0].name)
    })
  }).catch((e) => {
    console.error(e);
  })

  const fetchEvents = (hash) => {
    let date = new Date().toISOString()
    let qParams = makeQueryParams({
      apikey: process.env.REACT_APP_TM_API_KEY,
      size: 150,
      geoPoint: hash,
      sort: 'distance,date,asc',
      startDateTime: `${date.slice(0, date.length-5)}Z`
    })

    return(new Promise((resolve, reject) => {
      fetch(`https://app.ticketmaster.com/discovery/v2/events.json?${qParams}`).then((res) => {
        const data = res.json()
        if(res.ok) resolve(data)
        reject(data)
      }).catch((e) => {
        reject(e)
      })
    }))
  }

  useEffect(() => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude])
      })
    }
  }, [])

  useEffect(() => {
    if(location.length !== 0){
      let newHash = Geohash.encode(location[0], location[1], 5)

      fetchEvents(newHash).then((events) => {
        setEvents(events._embedded.events)
      })

    }
  }, [location])

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
          { location.length !== 0 && 
            <div className="map-loader">
              <RotatingCube />
              <h1>Initializing map...</h1>
            </div>
          }
          <div id="map" />
          <VerticalDivider height={'81vh'} />
          <div className="events-panel flex-container-column">
            <h1>Events List</h1>
            <EventsList events={events} />
          </div>
        </div>
      </div>
    </>
  )
}
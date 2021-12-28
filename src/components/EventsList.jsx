import HorizontalDivider from "./aesthetic/HorizontalDivider";

export default function EventsList(props){
  return(
    <div className="events-list flex-container-column">
      { props.events.map((event) => (
        <EventListItem event={event} />
      ))}
    </div>
  )
}

function EventListItem(props){
  let startTime = props.event.dates.start.dateTime === undefined ? new Date(props.event.dates.start.localDate) : new Date(props.event.dates.start.dateTime)
  let date = startTime.toDateString().split(' ');
  let time = startTime.toTimeString().split(' ')[0].split(':');
  return(
    <a href={props.event.url}>
      <div className="flex-container-row event-item">
        <img src={props.event.images[0].url} alt="Event image preview" height={58.5} width={104} />
        { props.event.dates.spanMultipleDays &&  
          <div className="event-time flex-container-column center">
            <p id="multi">Multiple<br/>Dates</p>
          </div>
        }
        { !props.event.dates.spanMultipleDays && 
          <div className="event-time flex-container-column center">
            <p id="date">{`${date[1]} ${date[2][0] === '0' ? date[2][1] : date[2]}`}</p>
            <p id="time">{date[0]} {parseInt(time[0]) > 12 ? `${time[0]%12}:${time[1]} PM` : `${time[0]}:${time[1]} AM`}</p>
          </div>
        }
        <div className="event-info">
          <p id="name">{props.event.name}</p>
          <p id="location">{`${props.event._embedded.venues[0].name} -- ${props.event._embedded.venues[0].city.name}, ${props.event._embedded.venues[0].state.stateCode}`}</p>
        </div>
      </div>
      <HorizontalDivider width={'99%'}/>
    </a>
  )
}
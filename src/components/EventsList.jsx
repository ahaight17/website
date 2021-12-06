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
  let eDate = props.event.dates.start.dateTime === undefined ? new Date(props.event.dates.start.localDate) : new Date(props.event.dates.start.dateTime)
  console.log(eDate)
  return(
    <div className="flex-container-row event-item">
      <img src={props.event.images[0].url} alt="Event image preview" height={58.5} width={104} />
      <div className="event-time">
      <p>{props.event.name}</p>
      </div>
    </div>
  )
}
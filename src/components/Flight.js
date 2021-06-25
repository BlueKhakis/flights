import { DateTime } from 'luxon';
import('../Flight.css');


function Flight(props) {

  return (
    <div className="Flight">
      <p>from: {props.flight.flyFrom} at {DateTime.fromMillis(props.flight.dTime * 1000).toFormat('hh:mm')}</p>
      <p>to: {props.flight.flyTo} at {DateTime.fromMillis(props.flight.aTime * 1000).toFormat('hh:mm')}</p>
      <p>duration: {props.flight.fly_duration}</p>
      <p>distance: {props.flight.distance}</p>
      <p>price: {props.flight.price}</p>
      <p>available seats:  {props.flight.availability.seats}</p>
      {/* <img src={props.image} alt={props.name} />
     <h2>{props.name}</h2> */}
     
    </div>
  );
}

export default Flight;

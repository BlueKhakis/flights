import { DateTime } from 'luxon';
import('../Flight.css');


function Flight(props) {

  return (
    <div className="Flight">
      <div className="box FlightFrom">
        <p><span class="light">from:</span><h3 className="boxCity">{props.flight.flyFrom}</h3></p> 
        <p><span class="light">at</span> <h4 className="boxCity">{DateTime.fromMillis(props.flight.dTime * 1000).toFormat('hh:mm')}</h4></p>
      </div>
      <div className="box FlightTo">
        <p><span class="light">to:</span><h3 className="boxCity">{props.flight.flyTo}</h3></p> 
        <p><span class="light">at</span>  <h4 className="boxCity">{DateTime.fromMillis(props.flight.aTime * 1000).toFormat('hh:mm')}</h4></p>
      </div>
      <div className="box FlightDurDist">
        <p><span class="light">duration: </span>{props.flight.fly_duration}</p>
        <p><span class="light">distance: </span>{props.flight.distance.toFixed(0)} <span class="light">km</span></p>
        <p><span class="light">stopovers: </span> {props.flight.route.length - 1  }</p>
      </div>
      <div className="box FlightRest">
        <p><span class="light">price: </span>{props.flight.price.toFixed(0)} eur</p>
        <p><span class="light">available seats:  </span>{props.flight.availability.seats}</p>
        <button className="buyButton">BUY</button>
      </div>
      {/* <img src={props.image} alt={props.name} />
     <h2>{props.name}</h2> */}
     
    </div>
  );
}

export default Flight;

import {useState} from 'react';

function Destination(props) {
  return (
    <div className="Destination">
      <label htmlFor="Destination"> TO: </label>
        <select onChange={(event) =>  props.setDestination(event.target.value)} id="filter" name="filter">
            <option value="all" >All</option>
            <option value="VLC" >Valencia</option>
            <option value="BCN" >Barcelona</option>
            <option value="MAD" >Madrid</option>
            <option value="MXP" >Milano</option>
            <option value="ATH" >Athens</option>
        </select>
    </div>
  );
}
export default Destination;
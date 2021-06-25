import {useState} from 'react';

function OriginDestination(props) {
  return (
    <div className="OriginDestination">
      <label for="OriginDestination">Choose a departure:</label>
        <select onChange={(event) =>  props.setOriginDestination(event.target.value)} id="filter" name="filter">
            <option value="all" >All</option>
            <option value="PRG" >Prague</option>
            <option value="SXF" >Berlin</option>
            <option value="WAW" >Warsaw</option>
            <option value="PED" >Pardubice</option>
        </select>
    </div>
  );
}
export default OriginDestination;
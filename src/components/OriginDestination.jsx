import {useState} from 'react';

function OriginDestination(props) {
  return (
    <div className="OriginDestination">
      <label Htmlfor="OriginDestination">FLY FROM: </label>
        <select onChange={(event) =>  props.setOriginDestination(event.target.value)} id="filter" name="filter">
            <option value="all" >All</option>
            <option value="PRG" >Prague</option>
            <option value="BER" >Berlin</option>
            <option value="WAW" >Warsaw</option>
            <option value="PED" >Pardubice</option>
        </select>
    </div>
  );
}
export default OriginDestination;
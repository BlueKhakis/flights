import {useState} from 'react';
function Filter(props) {
  return (
    <div className="Filter">
      <label htmlfor="filter">Choose a region:</label>
        <select onChange={(event) =>  props.setRegion(event.target.value)} id="filter" name="filter">
            <option value="all" >All</option>
            <option value="region/americas" >Americas</option>
            <option value="region/europe" >Europe</option>
            <option value="region/africa" >Africa</option>
            <option value="region/oceania" >Oceania</option>
        </select>
    </div>
  );
}
export default Filter;
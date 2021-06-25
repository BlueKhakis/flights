import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import OriginDestination from './components/OriginDestination';
import Flight from './components/Flight';
import { DateTime } from 'luxon';

function App() {
  const [flights, setFlights] = useState(null);
  const url = "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1";
  
  const [destination, setDestination] = useState('VLC');
  const [originDestination, setOriginDestination] = useState('PRG');

  async function fetchAll() {
    const resp = await fetch(url);
    const data = await resp.json();
    setFlights(data);
    console.log(flights);
    console.log(data);
  }

  async function fetchDestination() {
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1`);
    const data = await results.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    console.log('useEffect2')
    fetchDestination();
  }, [destination, originDestination]);

  return (
    <div className="App">
     
      <Destination setDestination={setDestination} />

      <OriginDestination setOriginDestination={setOriginDestination}/>


      { flights ? 
      <div>

        {flights.data.map((flight, i)=>  
        <Flight flight={flight} key={i} />) }

        </div>
      :
      
      <p>loading</p>}
     
    </div>
  );
}

export default App;



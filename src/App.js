import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import Flight from './components/Flight';

function App() {
  const [flights, setFlights] = useState(null);
  const [destination, setDestination] = useState('VLC');
  const url = `https://api.skypicker.com/flights?flyFrom=PRG&to=BCN&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1`;

  async function fetchAll() {
    const resp = await fetch(url);
    const data = await resp.json();
    setFlights(data);
    console.log(flights);
    console.log(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    fetchAll();
  }, [destination]);

  return (
    <div className="App">
     
      {/* <Destination setDestination={setDestination} /> */}

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

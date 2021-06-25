import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import OriginDestination from './components/OriginDestination';

function App() {
  const [flights, setFlights] = useState(null);
  const url = "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1";
  
  const [destination, setDestination] = useState('all');
  const [originDestination, setOriginDestination] = useState('all');

  async function fetchAll() {
    const resp = await fetch(url);
    const data = await resp.json();
    setFlights(data);
  }

  async function fetchDestination() {
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1`);
    const data = await results.json();
    console.log(data);
    setDestination(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
     
      <Destination setDestination={setDestination} />

      <OriginDestination setOriginDestination={setOriginDestination}/>
     
    </div>
  );
}

export default App;

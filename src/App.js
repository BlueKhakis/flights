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
  const [direct, setOriginDirect] = useState('PRG');

  async function fetchDestination() {
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1&direct_flights=${direct}`);
    const data = await results.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    console.log('useEffect2')
    fetchDestination();
  }, [destination, originDestination]);

  return (
    <div className="App">
     
      <Destination setDestination={setDestination} />
      {/* <Destination setDestination={setOriginDestination} /> */}

      <OriginDestination setOriginDestination={setOriginDestination}/>


      { flights ? 
          <div>
            {!flights.data.length ?
              <p>no flights for selected route</p>
              :
              flights.data.map((flight, i)=>  
              <Flight flight={flight} key={i} />) 
            }
            </div>
          :
          
          <p>loading</p>}
        
        </div>
  );
}

export default App;



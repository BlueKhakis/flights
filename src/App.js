import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import OriginDestination from './components/OriginDestination';
import LoadMoreButton from './components/LoadMoreButton'
import Flight from './components/Flight';
import { DateTime } from 'luxon';
import DirectButton from './components/DirectButton';
import Button from './components/Button';

function App() {
  const [flights, setFlights] = useState(null);
  const [limit, setLimit] = useState(5)
  
  const [destination, setDestination] = useState('VLC');
  const [originDestination, setOriginDestination] = useState('PRG');
  const [direct, setDirect] = useState(0);

  async function fetchDestination() {
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=${limit}&sort=date&asc=1&direct_flights=${direct}`);
    const data = await results.json();
    console.log(data);
    setFlights(data);
  }

  // useEffect(() => {
  //   console.log('useEffect2')
  //   fetchDestination();
  // }, [destination, originDestination, limit, direct]);



  return (
    <div className="App">
     
      
      {/* <Destination setDestination={setOriginDestination} /> */}

      <OriginDestination setOriginDestination={setOriginDestination} />
      
      <Destination setDestination={setDestination} />

      Direct flights only<DirectButton direct={direct} setDirect={setDirect} />

      <Button fetchDestination={fetchDestination}/>

      { flights ? 
          <div>
            {!flights.data.length ?
              <p>no flights for selected route</p>
              :
              <div>
              {flights.data.map((flight, i)=>  
                <Flight flight={flight} key={i} />)
            }
                <LoadMoreButton setLimit={setLimit} limit={limit} />
              </div>
            }
          </div> :
          
        <p>loading</p>}
      
      
      
        
        
        </div>
  );
}

export default App;



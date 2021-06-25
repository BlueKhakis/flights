import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import OriginDestination from './components/OriginDestination';
import SearchBar from './components/SearchBar';
import LoadMoreButton from './components/LoadMoreButton'
import Flight from './components/Flight';
import { DateTime } from 'luxon';
import DirectButton from './components/DirectButton'

function App() {
  const [flights, setFlights] = useState(null);
  const [limit, setLimit] = useState(5)
  
  const [destination, setDestination] = useState('VLC');
  const [originDestination, setOriginDestination] = useState('PRG');
  const [direct, setDirect] = useState(0);
  const [searchQuery, setSearchQuery] = useState('PRG');

  async function fetchDestination() {
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=${limit}&sort=date&asc=1&direct_flights=${direct}`);
    const data = await results.json();
    
    setFlights(data);

    console.log(flights)
  }

  async function fetchSearch() {
    const results = await fetch(`https://api.skypicker.com/locations?term=${searchQuery}&locale=en-US&location_types=airport&location_types=city&location_types=country&limit=10&active_only=true&sort=name`);
    const data = await results.json();
    
    setFlights(data);
    console.log(flights)
  }

  useEffect(() => {
    
    fetchDestination();
  }, [destination, originDestination, limit, direct]);

  useEffect(() => {
    
    fetchSearch();
  }, [searchQuery, direct]);

  return (
    <div className="App">
     
      <Destination setDestination={setDestination} />
      {/* <Destination setDestination={setOriginDestination} /> */}

      <SearchBar setSearchQuery={setSearchQuery}/>

      <OriginDestination setOriginDestination={setOriginDestination} />
      Direct flights only<DirectButton direct={direct} setDirect={setDirect} />


      { flights ?  
          <div>
            {!flights.length ?
              <p>no flights for selected route</p>
              :
              <div>
              {flights.map((flight, i)=>  
                <Flight flight={flight} key={i} />)
            }
                {flights.data.length >= limit ?
                <LoadMoreButton setLimit={setLimit} limit={limit} /> :
                  <></>
                }
              </div>
            }
          </div> :
          
        <p>loading</p>}
      
      
      
        
        
        </div>
  );
}

export default App;



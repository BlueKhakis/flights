import { useEffect, useState } from 'react';
import './App.css';
import Destination from './components/Destination';
import OriginDestination from './components/OriginDestination';
import SearchBar from './components/SearchBar';
import LoadMoreButton from './components/LoadMoreButton'
import Flight from './components/Flight';
import { DateTime } from 'luxon';
import DirectButton from './components/DirectButton'
import Button from './components/Button';



import DatePickerComp from './components/DatePickerComp';



function App() {
  const [flights, setFlights] = useState(null);
  const [limit, setLimit] = useState(5)
  const [destination, setDestination] = useState('VLC');
  const [originDestination, setOriginDestination] = useState('PRG');
  const [direct, setDirect] = useState(0);
  const [searchQuery, setSearchQuery] = useState('PRG');
  const [searchQueryTwo, setSearchQueryTwo] = useState('VLC');
  const [searchResults, setSearchResults] = useState(null);
  const [dateFrom, setDateFrom] = useState('26/10/2021');
  const [dateTo, setDateTo] = useState('26/11/2021');
  const [formattedDateTo, setFormattedDateTo] = useState('26/08/2021');
  const [formattedDateFrom, setFormattedDateFrom] = useState('26/08/2021');
  const [rand, setRand] = useState(0);
  const [randTwo, setRandTwo] = useState(0);


  async function fetchDestination() {
    console.log(destination);
    const results = await fetch(`https://api.skypicker.com/flights?flyFrom=${originDestination}&to=${destination}&dateFrom=${dateFrom}&dateTo=${dateTo}&partner=data4youcbp202106&v=3&limit=${limit}&sort=date&asc=1&direct_flights=${direct}`);
    const data = await results.json();

    setFlights(data);
  }

  async function fetchSearch() {
    console.log(searchQuery);
    console.log(searchQueryTwo);
    const results = await fetch(`https://api.skypicker.com/locations?type=id&id=${searchQuery}&locale={locale}&active_only={active_only}`);
    const data = await results.json();
    const results2 = await fetch(`https://api.skypicker.com/locations?type=id&id=${searchQueryTwo}&locale={locale}&active_only={active_only}`);
    const data2 = await results2.json();
console.log(data2);
    setOriginDestination(data.locations[0].id)
    setDestination(data2.locations[0].id)
    setRandTwo(Math.random())
  }

  



  useEffect(() => {
    fetchDestination();
  }, [randTwo, direct, dateTo, dateFrom, limit]);

  useEffect(() => {
    fetchSearch();
  }, [rand, direct]);


  return (
    <div className="App">



     <div className="se">
      <div className="search">
        <OriginDestination setOriginDestination={setOriginDestination} setRandTwo={setRandTwo}/>
        <Destination setDestination={setDestination} setRandTwo={setRandTwo}/>
      </div>

      <SearchBar setSearchQuery={setSearchQuery} setSearchQueryTwo={setSearchQueryTwo} setRand={setRand}/>
      {/* To:  <SearchBar setSearchQueryTwo={setSearchQueryTwo}/> */}


      <DatePickerComp setDateFrom={setDateFrom} setDateTo={setDateTo}/>



      Direct flights only<DirectButton direct={direct} setDirect={setDirect} />
  
      <Button fetchDestination={fetchDestination}/>
    </div>
      { flights ?  
          <div>

            {!flights.data.length ?
              <p>no flights for selected route</p>
              :
              <div>
              {flights.data.map((flight, i)=>  
                <Flight flight={flight} key={i} />)
            }
                {/* {flights.data.length >= limit ? */}
                <LoadMoreButton setLimit={setLimit} limit={limit} /> 
                {/* :
                  <></>
                } */}
              </div>
            }
          </div> :
          
        <p>loading</p>}
      
      
      

        
        </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Flight from './components/Flight';

function App() {
  const [countries, setCountries] = useState(null);
  const[flights, setFlights] = useState([]);
  const url = "https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2021&dateTo=12/12/2021&partner=data4youcbp202106&v=3";

  async function fetchAll() {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    setFlights(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
      this
     {
       (flights.data || []).map((flight,i) => (
         <Flight key={i} flight={flight} />
       ))
     }
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
<<<<<<< HEAD
import Flight from './components/Flight';

function App() {
  const [countries, setCountries] = useState(null);
  const[flights, setFlights] = useState([]);
  const url = "https://api.skypicker.com/flights?flyFrom=PRG&to=LGW&dateFrom=18/11/2021&dateTo=12/12/2021&partner=data4youcbp202106&v=3";
=======


function App() {
  const [flights, setFlights] = useState(null);
  const url = "https://api.skypicker.com/flights?flyFrom=PRG&to=VLC&dateFrom=26/06/2021&dateTo=26/06/2021&partner=data4youcbp202106&v=3&limit=5&sort=date&asc=1";
>>>>>>> 07ca91f700f75fbd76f41cbd4b1eed87d24237f1

  async function fetchAll() {
    const resp = await fetch(url);
    const data = await resp.json();
<<<<<<< HEAD
    console.log(data);
=======
>>>>>>> 07ca91f700f75fbd76f41cbd4b1eed87d24237f1
    setFlights(data);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
      this
     {
       (flights.data || []).map((flight,i) => (
         <Flight key={i} flight={flight} />
       ))
     }
=======
     
       
     
>>>>>>> 07ca91f700f75fbd76f41cbd4b1eed87d24237f1
    </div>
  );
}

export default App;

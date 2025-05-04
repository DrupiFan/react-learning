import './App.css';
import { useState, useEffect } from 'react';
import Card from "./Card";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      const formatted = data.map((country) => ({
        name: country.name.common,
        flag: country.flags.svg,
        capital: country.capital,
      }));
      setCountries(formatted)
    });
  }, []);

  return (
    <>
      <div className="app">
      <h1>Country Flags</h1>
      <div className="grid">
        {countries.map((country, index) => (
          <Card key={index} name={country.name} flag={country.flag} capital={country.capital} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App;

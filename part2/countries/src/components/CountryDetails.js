import React, {useState, useEffect} from 'react';
import axios from 'axios'




const CountryDetails = ({result}) => {

  const REACT_APP_WEATHER_QUERY = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${result.capital}`

  const [weather, setWeather] = useState([])

  const hook = () => {
    console.log("Rest query for", REACT_APP_WEATHER_QUERY)
    axios
      .get(REACT_APP_WEATHER_QUERY)
      .then(response => {
        console.log("weather Results", response.data.current)
        setWeather(response.data.current)
      })

  }
  useEffect(hook, []) // load the data once, then do local processing.


  return (
  <div>
    <h2>{result.name}</h2>
    <div>Capital: {result.capital}</div>
    <div>Population: {result.population}</div>
    <h3>languages</h3>
    <ul>
      {result.languages.map(language => (<li key={language.iso639_1}>{language.name}</li>))}
    </ul>
    <img src={result.flag} width="25%" alt={result.name} />
    <h3>Weather in {result.capital}</h3>
    <div>Temperature: {weather.temperature} C</div>
    <div><img src={weather.weather_icons} alt={weather.weather_icons}/></div>
    <div>Wind: {weather.wind_speed} units unknown direction {weather.wind_dir}</div>
  </div>
)}

export default CountryDetails;

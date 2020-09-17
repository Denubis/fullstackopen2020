import React, {useState, useEffect} from "react"
import SearchField from './components/SearchField.js'
import CountryResult from './components/CountryResult.js'
import axios from 'axios'


const App = () => {
  //need to have REACT_APP_ at start of env variable. Odd.
  console.log("weather", process.env.REACT_APP_WEATHER_API_KEY)

  const [countryName, setNewCountryName] = useState('')
  const [results, setResults] = useState([])
  const hook = () => {
    console.log("Rest query for", countryName)
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => {
        console.log("Results", response.data)
        setResults(response.data)
      })

  }
  useEffect(hook, []) // load the data once, then do local processing.


  return (
    <div>
    <SearchField countryName={countryName} setNewCountryName={setNewCountryName}/>
    <CountryResult results={results} countryName={countryName} />
    </div>
  )
}


export default App;

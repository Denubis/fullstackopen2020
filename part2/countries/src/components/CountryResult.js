import React, {useState} from 'react';
import CountryDetails from './CountryDetails.js'

const CountryResult = ({results, countryName}) => {
  const [countryClick, setCountryClick] = useState('')
  const filterResults = results.filter((cur) => (cur.name.toLowerCase().includes(countryName.toLowerCase())))

  //https://stackoverflow.com/a/48145476

  const handleSearchButtonChange = (event) => {
    setCountryClick(event.target.value)
    console.log("clickbutton", event.target.value)
  }

  const Results = () => {
    console.log("results:", filterResults)
  if (filterResults.length > 10) {
      return (<div>Too many matches, specify another filter</div>)

  } else if (filterResults.length > 1) {
    const CountryName = ({result}) => {
      // https://stackoverflow.com/a/24534492
      if (result.name === countryClick) {
        return (<CountryDetails result={result} />)
      } else {
        return(<div>{result.name} <button value={result.name} onClick={handleSearchButtonChange}>Show</button></div>)
      }
    }
    return ( filterResults.map(r => <CountryName key={r.name} result={r}/>))




  } else if (filterResults.length === 1) {

    return (<CountryDetails result={filterResults[0]}/>)

  } else {
    return (<div>No result found</div>)
  }

  }
  return (


     <Results />

  )
}


export default CountryResult;

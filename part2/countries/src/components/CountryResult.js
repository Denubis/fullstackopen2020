import React from 'react';

const CountryResult = ({results, countryName}) => {
  const filterResults = results.filter((cur) => (cur.name.toLowerCase().includes(countryName.toLowerCase())))
  //https://stackoverflow.com/a/48145476

  const Results = () => {
    console.log("results:", filterResults)
  if (filterResults.length > 10) {
      return (<div>Too many matches, specify another filter</div>)

  } else if (filterResults.length > 1) {
    const CountryName = ({result}) => {
      return(<div>{result.name}</div>)
    }
    return ( filterResults.map(r => <CountryName key={r.name} result={r}/>))




  } else if (filterResults.length === 1) {
    const CountryDetails = ({result}) => (
      <div>
        <h2>{result.name}</h2>
        <div>Capital: {result.capital}</div>
        <div>Population: {result.population}</div>
        <h3>languages</h3>
        <ul>
          {result.languages.map(language => (<li key={language.iso639_1}>{language.name}</li>))}
        </ul>
        <img src={result.flag} width="25%" alt={result.name} />
      </div>
    )
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

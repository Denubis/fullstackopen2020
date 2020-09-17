import React from 'react';
import axios from 'axios'

const CountryDetails = ({result}) => {
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
  </div>
)}

export default CountryDetails;

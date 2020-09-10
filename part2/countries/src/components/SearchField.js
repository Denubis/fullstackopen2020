import React from 'react';

const SearchField = ({countryName, setNewCountryName}) => {

  const handleSearchChange = (event) => {
    setNewCountryName(event.target.value)
    console.log("searching", countryName)
  }
  return (
    <div>
    <form>
      Find Countries: <input type="text" value={countryName} onChange={handleSearchChange} />
    </form>
    </div>
  )
}


export default SearchField;

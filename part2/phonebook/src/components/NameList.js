import React from 'react'
import Name from './Name.js'

const NameList = ({filterPersons}) => {

  if (filterPersons.length > 0) {
    return (filterPersons.map(person => <Name key={person.name} name={person}/>))
  } else {
    return (<div>No people found</div>)
  }
}

export default NameList;

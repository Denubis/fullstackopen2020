import React, {useState} from "react";
import NameList from './NameList.js'


const Persons = ({persons, filterName}) => {


  const filterPersons = filterName
  ? persons.filter((cur) => (cur.name.includes(filterName)))
  : persons


  return (
    <NameList filterPersons={filterPersons}/>

  )
}
export default Persons;

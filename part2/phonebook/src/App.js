import React, {useState, useEffect} from "react"
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("") // We need a name change handler.
  const [newNumber, setNewNumber] = useState("") // We need a name change handler.
  const [filterName, setNewFilterName] = useState("")

  const phonebookURL = "http://localhost:3001/persons"

  const hook = () => {
    console.log('effect')
    axios
      .get(phonebookURL)
      .then(response => {
        console.log('promise fuf')
        setPersons(response.data)
      })
  }
  useEffect(hook, []) //empty array is run only on first render



return (<div>
  <h2>Phonebook</h2>
  <Filter filterName={filterName} setNewFilterName={setNewFilterName}/>
  <h2>Add a new</h2>
  <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
  <h2>Numbers</h2>
  <Persons persons={persons} filterName={filterName}/>


</div>)
}

export default App;

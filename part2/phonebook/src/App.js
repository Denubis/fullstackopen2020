import React, {useState, useEffect} from "react"
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("") // We need a name change handler.
  const [newNumber, setNewNumber] = useState("") // We need a name change handler.
  const [filterName, setNewFilterName] = useState("")


  useEffect(() => {
    personService
      .getAll()
      .then(initalPhonebook => {
        setPersons(initalPhonebook)
      })
  }, []) //run at start


  const deletePerson = (id) => {
    console.log(`called delete person ${id}`)
    personService
      .deletePerson(id)
      .then(response => {
        console.log(`delete response ${response}`)
        //promise successful, don't care about returned stuff?
        setPersons(persons.filter(n=>n.id !== id))
      })
  }


return (<div>
  <h2>Phonebook</h2>
  <Filter filterName={filterName} setNewFilterName={setNewFilterName}/>
  <h2>Add a new</h2>
  <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
  <h2>Numbers</h2>
  <Persons persons={persons} deletePerson={deletePerson} filterName={filterName}/>


</div>)
}

export default App;

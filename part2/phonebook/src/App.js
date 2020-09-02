import React, {useState} from "react";
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);


  
  const [newName, setNewName] = useState("") // We need a name change handler.
  const [newNumber, setNewNumber] = useState("") // We need a name change handler.
  const [filterName, setNewFilterName] = useState("")





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

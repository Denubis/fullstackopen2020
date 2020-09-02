import React, {useState} from "react";
const Name = ({name}) => (<div>{name.name} {name.number}</div>)
const NameList = ({filterPersons}) => {

  if (filterPersons.length > 0) {
    return (filterPersons.map(person => <Name key={person.name} name={person}/>))
  } else {
    return (<div>No people found</div>)
  }
}
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
  const handleNameChange = (event) => { setNewName(event.target.value)}
  const handleNumberChange = (event) => { setNewNumber(event.target.value)}
  const handleFilterChange = (event) => {
    setNewFilterName(event.target.value)
  }
const addPerson = (event) => {
  event.preventDefault()
  console.log('nameclick', event.target)
  const nameObject = {
    name: newName,
    number: newNumber
  }
  console.log(persons)
  console.log(nameObject) // https://stackoverflow.com/a/30735595  some is an iterator
  if   (persons.some((cur) => (newName === cur.name))) {
    alert(`${newName} is already added to phonebook`)
  } else {
    setPersons(persons.concat(nameObject))
  }
  setNewName('')
  setNewNumber('')
}

const filterPersons = filterName
? persons.filter((cur) => (cur.name.includes(filterName)))
: persons

console.log(filterPersons)


return (<div>
  <h2>Phonebook</h2>
  filter shown with <input value={filterName} onChange={handleFilterChange}/>
  <h2>Add a new</h2>
  <form onSubmit={addPerson}>
    <div>
      name:
      <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
      number:
      <input value={newNumber} onChange={handleNumberChange}/>
    </div>

    <div>
      <button type="submit">add</button>
    </div>
  </form>
  <h2>Numbers</h2>


    <NameList filterPersons={filterPersons}/>

</div>)
}

export default App;

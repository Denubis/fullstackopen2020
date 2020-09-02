import React, {useState} from "react";
const Name = ({name}) => (<div>{name.name} {name.number}</div>)
const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      number: "040-1234567"
    }
  ]);
  const [newName, setNewName] = useState(""); // We need a name change handler.
  const [newNumber, setNewNumber] = useState(""); // We need a name change handler.

  const handleNameChange = (event) => { setNewName(event.target.value)}
  const handleNumberChange = (event) => { setNewNumber(event.target.value)}

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
return (<div>
  <h2>Phonebook</h2>
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
  {persons.map(person => <Name key={person.name} name={person}/>)}
</div>);
};
export default App;

import React from "react";

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber}) =>{


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


  return (
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
  )
}

export default PersonForm;

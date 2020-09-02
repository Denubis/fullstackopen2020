import React, { useState } from "react";

const Name = ({name}) => (
  <div>{name.name}</div>
)

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);


  const [newName, setNewName] = useState("");

  // We need a name change handler.
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
      event.preventDefault()
      console.log('nameclick', event.target)

      const nameObject = {
        name: newName
      }
      console.log(persons)
      console.log(nameObject)

      // https://stackoverflow.com/a/30735595

      if (persons.some((cur) => (newName === cur.name))){
        alert(`${newName} is already added to phonebook`)
      } else {
        setPersons(persons.concat(nameObject))
      }

      setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleNameChange}
          />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <Name key={person.name} name={person}/>)}
    </div>
  );
};
export default App;

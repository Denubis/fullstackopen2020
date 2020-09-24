import React from 'react'
//it would be nice to be able to propegate a delete up the chain from here.




const Name = ({name, deletePerson}) => (
  <div>{name.name} {name.number} <button onClick={deletePerson}>delete</button></div>
)

export default Name;

import React, {useState, useEffect} from "react"
import Note from './components/Note'
import axios from 'axios'



const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const notesURL = "http://localhost:3001/notes"

  const hook = () => {
    console.log('effect')
    axios
      .get(notesURL)
      .then(response => {
        console.log('promise fuf')
        setNotes(response.data)
      })
  }
  useEffect(hook, []) //empty array is run only on first render
  console.log('render', notes.length, 'notes')


    const notesToShow = showAll
      ? notes
      : notes.filter(note => note.important === true)

      // if showAll:
      //   notes
      // else:
      //   notes.filter blah -- I hate ternary operators

    const handleNoteChange = (event) => {
      console.log(event.target.value)
      setNewNote(event.target.value)
    }

    const addNote = (event) => {
      event.preventDefault()
      console.log('buttonclick', event.target)
      const noteObject = {
        content: newNote,
        date: new Date().toISOString(),
        important: Math.random() < 0.5,
        id: notes.length +1,
      }
      setNotes(notes.concat(noteObject))
      setNewNote('')
    }

    return (<div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note key={note.id} note={note}/>)}

      </ul>
      <form onSubmit={addNote}>
        <input value={newNote}
          onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>)
  }

  export default App;


//
// const App = (props) => {
//   const [notes, setNotes] = useState(props.notes)
//   const [newNote, setNewNote] = useState(
//     'a new note'
//   )
//
//   const [showAll, setShowAll] = useState(true)

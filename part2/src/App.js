import React, {useState, useEffect} from "react"
import Note from './components/Note'
// import axios from 'axios'
import noteService from './services/notes'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const notesURL = "http://localhost:3001/notes"

  // const hook = () => {
  //   console.log('effect')
  //   axios
  //     .get(notesURL)
  //     .then(response => {
  //       console.log('promise fuf')
  //       setNotes(response.data)
  //     })
  // }
  useEffect(() => {
    noteService
      .getAll()
      .then(response => {
        setNotes(response.data)
      })
  }, []) //empty array is run only on first render
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
      }

      noteService
        .create(noteObject)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
      // axios
      //   .post(notesURL, noteObject)
      //   .then(response => {
      //     console.log(response)
      //     setNotes(notes.concat(response.data))
      //     setNewNote('')
      //   })

      // setNotes(notes.concat(noteObject))

    }
    const toggleImportanceOf = (id) => {
      console.log(`importance of ${id} needs to be toggled`)
      const url = `${notesURL}/{$id}`
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important } // agh, this takes in the note object, then changes that one variable

      noteService
        .update(id, changedNote)
        .then(response => {
          setNotes(notes.map(note => note.id !== id? note : response.data))
        })
      // axios
      //   .put(url, changedNote)
      //   .then(response => {
      //       setNotes(notes.map(note => note.id !== id ? note : response.data ))
      //       //yeah, these ternary operators suck.
      //       //
      //       // for all notes, write the note back into the object, unless it's the specific one we're getting the response for, then use the REST data
      //   })
    }

    return (<div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => <Note
          key={note.id}
          note={note}
          toggleImportance={() => toggleImportanceOf(note.id)}
          />)}

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

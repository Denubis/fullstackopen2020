import React, {useState, useEffect} from "react"
import Note from './components/Note'
// import axios from 'axios'
import noteService from './services/notes'
import './index.css'
import Notification from './components/Notification'
const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('some error happened...')
  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
          setNotes(initialNotes)
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
        .then(returnedNote => {
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })

    }
    const toggleImportanceOf = (id) => {
      console.log(`importance of ${id} needs to be toggled`)
      const note = notes.find(n => n.id === id)
      const changedNote = { ...note, important: !note.important } // agh, this takes in the note object, then changes that one variable

      noteService
        .update(id, changedNote)
        .then(returnedNote => {
          setNotes(notes.map(note => note.id !== id? note : returnedNote))
        .catch(error => {
          setErrorMessage(`the note '${note.content}' was already deleted from the server`)
          setTimeout(()=>{
            setErrorMessage(null)
          }, 5000)
          setNotes(notes.filter(n=>n.id !== id)) //urrrrgh, immutable deletes. Return an object with all ids except this one.
        })
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
    const Footer = () => {
      const footerStyle = {
        color: 'green',
        fontStyle: 'italic',
        fontSize: 16
      }
      return (
        <div style={footerStyle}>
          <br />
          <em>blah</em>
        </div>
      )
    }

    return (<div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
      <Footer />
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

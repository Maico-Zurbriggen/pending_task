import { useState } from 'react'
import './App.css'
import { Form, Note } from './components';

function App() {
  const [ notes, setNotes ] = useState([]);

  const onSubmit = (data, reset) => {
    setNotes([...notes, data]);
    reset();
  }

  const onDelete = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete))
  }

  return (
    <>
      <h1>Pending Task</h1>
      <Form onSubmit={onSubmit}></Form>
      {notes.map((note, index) => (
        <Note key={index} content={note.content} importance={note.importance} onClick={() => onDelete(index)}/>
      ))}
    </>
  )
}

export default App

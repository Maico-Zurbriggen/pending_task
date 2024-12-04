import { useState } from 'react'
import './App.css'
import { Form, Note } from './components';

function App() {
  const [ notes, setNotes ] = useState([]); //Creamos estado para las notas, el cual es un array

  const onSubmit = (data, reset) => { //Metodo para agregar nota al hacer submit
    setNotes([...notes, data]);
    reset(); //Se resetea el formulario
  }

  const onDelete = (indexToDelete) => { //Metodo para eliminar nota al presionar el boton eliminar de la misma
    setNotes(notes.filter((_, index) => index !== indexToDelete))
  }

  return (
    <div className='column container'> 
      <h1>Pending Task</h1>
      <Form onSubmit={onSubmit /*Utilizamos el componente Form para el formulario*/}></Form> 
      {notes.map((note, index) => (
        <Note key={index} content={note.content} importance={note.importance} onClick={() => onDelete(index)}/>
      )) /*Por cada nota utilizamos un componente Note*/}
    </div>
  )
}

export default App

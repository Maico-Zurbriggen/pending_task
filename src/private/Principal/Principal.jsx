import { useState, useCallback } from "react";
import { Form, Note } from "../../components";
import { addNote, deleteNote } from "../../utils";

//Componente principal de la aplicacion

export const Principal = () => {
  const [notes, setNotes] = useState([]); //Creamos estado para las notas, el cual es un array

  //Metodo para modificar el estado de las notas
  const modifyNotes = useCallback((updatedNotes) => {
    setNotes(updatedNotes);
  }, []);

  return (
    <>
      <Form addNote={addNote} notes={notes} modifyNotes={modifyNotes} />
      {notes.map((note, index) => (
        <Note
          key={index}
          content={note.content}
          importance={note.importance}
          deleteNote={() => deleteNote(notes, modifyNotes, index)}
        />
      ))} {/**Iteramos las notas para mostrarlas */}
    </>
  );
};

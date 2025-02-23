import { useState, useCallback, useEffect } from "react";
import { Form, Note } from "../../components";
import { deleteNote } from "../../utils";

//Componente principal de la aplicacion

export const Principal = ({ user }) => {
  const [notes, setNotes] = useState([]); //Creamos estado para las notas, el cual es un array

  useEffect(() => {
    const getNotes = async () => {
      console.log(user);
      try {
        const response = await fetch("http://localhost:3000/api/notes/user", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
          credentials: "include",
        });

        if (response.ok) {
          const responseData = await response.json();
          setNotes(responseData);
        } else {
          console.log("Aun no hay notas");
        }
      } catch (error) {
        console.error("Error obteniendo las notas del usuario", error);
      }
    };

    getNotes();
  }, []);

  //Metodo para modificar el estado de las notas
  const modifyNotes = useCallback((updatedNotes) => {
    setNotes(updatedNotes);
  }, []);

  return (
    <>
      <Form notes={notes} modifyNotes={modifyNotes} user={user} />
      {notes.map((note, index) => (
        <Note
          key={index}
          content={note.content}
          importance={note.importance}
          deleteNote={() => deleteNote(notes, modifyNotes, index)}
        />
      ))}
      {/**Iteramos las notas para mostrarlas */}
    </>
  );
};

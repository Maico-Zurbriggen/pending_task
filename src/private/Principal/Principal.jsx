import { useEffect } from "react";
import { Form, Note } from "../../components";
import { deleteNote } from "../../utils";

//Componente principal de la aplicacion

export const Principal = ({ notes, modifyNotes }) => {

  useEffect(() => {
    const getNotes = async () => {
      await fetch("http://localhost:3000/api/notes/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then(async (response) => {
          if (response.ok) {
            if (response.status === 204) {
              console.log("Aun no hay notas");
              return;
            }
            const responseData = await response.json();
            modifyNotes(responseData);
          } else {
            throw new Error("Usuario no autenticado");
          }
        })
        .catch((error) => {
          console.error("Error obteniendo las notas del usuario", error);
        });
    };

    getNotes();
  }, []);

  return (
    <>
      <Form notes={notes} modifyNotes={modifyNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            content={note.content}
            importance={note.importance}
            deleteNote={() => deleteNote(notes, modifyNotes, index)}
          />
        );
      })}
      {notes.length ? null : <p>Aún no hay notas</p>}
      {/**Iteramos las notas para mostrarlas */}
    </>
  );
};

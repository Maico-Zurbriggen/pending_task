import { useEffect } from "react";
import { Form, Note } from "../../components";
import { inputsFormPrincipal, selectsFormPrincipal, defaultValuesFormPrincipal } from "../../constants";
import { schemaNotes } from "../../models";
import { deleteNote, addNote } from "../../api";

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
            window.location.href = "http://localhost:5173/pending_task/signIn";
            throw new Error("Usuario no autenticado");
          }
        })
        .catch((error) => {
          console.error("Error obteniendo las notas del usuario", error);
        });
    };

    getNotes();
  }, []);

  const handleAddNote = async (data, reset) => {
    await addNote(notes, modifyNotes, data, reset);
  }

  return (
    <>
      <Form buttonText="subir" inputs={inputsFormPrincipal} selects={selectsFormPrincipal} schema={schemaNotes} defaultValues={defaultValuesFormPrincipal} onSubmit={handleAddNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            content={note.content}
            importance={note.importance}
            deleteNote={() => deleteNote(notes, modifyNotes, index, note.content)}
          />
        );
      })}
      {notes.length ? null : <p>Aún no hay notas</p>}
      {/**Iteramos las notas para mostrarlas */}
    </>
  );
};

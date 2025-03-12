import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Note, Form } from "../../components";
import { addNote, deleteNote } from "../../api";
import {
  inputsFormNotes,
  defaultValuesFormNotes,
  selectsFormNotes,
} from "../../constants";
import { schemaNotes } from "../../models";

export const ProjectPage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { name, description, timeInit, timeLimit } = location.state || {
    name: "URL Inválida",
    description: "Proyecto inexistente",
  };

  useEffect(() => {
    const params = new URLSearchParams({
      project: name,
    });

    const getNotes = () => {
      fetch(`http://localhost:3000/pending_task/notes?${params}`, {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            backToProjects();
            throw new Error("Error obteniendo las notas");
          }

          setLoading(false);

          if (response.status === 204) {
            console.log("NADA");
            return;
          }

          response.json().then((responseData) => {
            console.log("NOTAS");
            setNotes(responseData);
          });
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    };

    getNotes();
  }, []);

  const backToProjects = () => {
    window.location.href =
      "http://localhost:5173/pending_task/private/projects";
  };

  const handleDeleteNote = async ({ index, content }) => {
    const updatedNotes = await deleteNote({
      project: name,
      notes,
      indexToDelete: index,
      content,
    });
    if (updatedNotes) {
      setNotes(updatedNotes);
    }
  };

  const handleAddNote = async ({ data, reset, setError }) => {
    const updatedNotes = await addNote({
      data,
      notes,
      reset,
      setError,
      project: name,
    });
    if (updatedNotes) {
      setNotes(updatedNotes);
    }
  };

  return (
    <>
      <button className="button project-button" onClick={backToProjects}>
        projects
      </button>
      <header className="project-container">
        <section className="data-project">
          <h1>{name}</h1>
          <p>init: {timeInit}</p>
          {timeLimit ? <p>finish planified: {timeLimit}</p> : null}
        </section>
        <p className="description-project">{description}</p>
      </header>
      <main className="container">
        <details className="detail-notes detail">
          <summary className="summary">New note</summary>
          <div className="content-detail">
            <Form
              buttonText="subir"
              inputs={inputsFormNotes}
              selects={selectsFormNotes}
              schema={schemaNotes}
              defaultValues={defaultValuesFormNotes}
              onSubmit={handleAddNote}
            />
          </div>
        </details>
        <section className="notes">
          {notes.map((note, index) => (
            <Note
              key={index}
              content={note.content}
              importance={note.importance}
              deleteNote={() =>
                handleDeleteNote({ index, content: note.content })
              }
            />
          ))}
          {notes.length ? null : <p>Aún no hay notas</p>}
        </section>
      </main>
    </>
  );
};

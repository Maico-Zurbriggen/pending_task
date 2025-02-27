//Funcion para eliminar una nota del usuario
export async function deleteNote(notes, modifyNotes, indexToDelete, content) {
  await fetch(`http://localhost:3000/api/notes/${content}`, {
    method: "DELETE",
    credentials: "include",
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Error al eliminar la nota");
    }

    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    modifyNotes(updatedNotes);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

export async function addNote(notes, modifyNotes, data, reset) {
  await fetch("http://localhost:3000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al agregar la nota");
      }
      modifyNotes([...notes, data]);
      reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

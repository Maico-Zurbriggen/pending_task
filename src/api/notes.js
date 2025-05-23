//Funcion para eliminar una nota del usuario
export const deleteNote = async ({notes, indexToDelete, content, project}) => {
  const params = new URLSearchParams({
    project: project
  });

  try {
    const response = await fetch(`https://backend-pending-task.onrender.com/pending_task/notes/${content}?${params}`, {
      method: "DELETE",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la nota");
    }

    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    return updatedNotes;
  } catch (error) {
    console.error("Error:", error);
  }
}

export const addNote = async ({notes, data, reset, setError, project}) => {
  try {
    const response = await fetch("https://backend-pending-task.onrender.com/pending_task/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({note: data, project }),
      credentials: "include",
    });

    if (!response.ok) {
      const { input, errorMessage } = await response.json();
      setError(input, { message: errorMessage });
      throw new Error("Error al agregar la nota");
    }

    reset();
    const updatedNotes = [...notes, data];
    return updatedNotes;
  } catch (error) {
    console.error("Error:", error);
  }
}

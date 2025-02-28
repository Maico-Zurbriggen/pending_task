//Funcion para eliminar una nota del usuario
export const deleteNote = async (notes, modifyNotes, indexToDelete, content) => {
  try {
    const response = await fetch(`http://localhost:3000/api/notes/${content}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la nota");
    }

    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    modifyNotes(updatedNotes);
  } catch (error) {
    console.error("Error:", error);
  }
}

export const addNote = async (notes, modifyNotes, data, reset, setError) => {
  try {
    const response = await fetch("http://localhost:3000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (!response.ok) {
      const { input, errorMessage } = await response.json();
      setError(input, { message: errorMessage });
      throw new Error("Error al agregar la nota");
    }

    reset();
    modifyNotes([...notes, data]);
  } catch (error) {
    console.error("Error:", error);
  }
}

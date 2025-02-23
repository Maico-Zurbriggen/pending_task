//Funcion para agregar una nota del usuarios
export const addNote = async (notes, modifyNotes, data, reset, user) => {
  try {
    const response = await fetch('http://localhost:3000/api/notes', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "note": data, "user": user }),
    })

    if (response.ok) {
      const updatedNotes = [...notes, data];
      modifyNotes(updatedNotes);
      reset();
    }
  } catch (error) {
    console.error("Error al agregar la nueva nota", error);
  }
};
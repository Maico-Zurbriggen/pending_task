//Funcion para eliminar una nota del usuario
export function deleteNote(notes, modifyNotes, indexToDelete) {
  const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
  modifyNotes(updatedNotes);
};

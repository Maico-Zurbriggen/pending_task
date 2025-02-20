//Funcion para agregar una nota del usuarios
export function addNote(notes, modifyNotes, data, reset) {
  const updatedNotes = [...notes, data];
  modifyNotes(updatedNotes);
  reset();
};

//Funcion para eliminar una nota del usuario
export function deleteNote(notes, modifyNotes, indexToDelete) {
  const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
  modifyNotes(updatedNotes);
};

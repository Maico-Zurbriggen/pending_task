export function addNote(notes, modifyNotes, data, reset) {
  const updatedNotes = [...notes, data];
  modifyNotes(updatedNotes);
  reset();
};

export function deleteNote(notes, modifyNotes, indexToDelete) {
  const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
  modifyNotes(updatedNotes);
};

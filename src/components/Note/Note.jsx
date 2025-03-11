//Componente para las notas

export const Note = ({ content, importance, deleteNote }) => {
  return (
    <article className={`note ${importance}`}>
      <p className="content-note">{content}</p>
      <button className="button" onClick={deleteNote}>
        Eliminar
      </button>
    </article>
  );
};

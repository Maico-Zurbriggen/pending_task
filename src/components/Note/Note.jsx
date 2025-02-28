import "./Note.css";

//Componente para las notas

export const Note = ({ content, importance, deleteNote }) => {
  return (
    <article
      className={`note container ${importance}`}
    >
      <p className="text-note">{content}</p>
      <div className="data w-100">
        <p className="text-note">Importance: {importance}</p>
        <button onClick={deleteNote}>
          Eliminar
        </button>
      </div>
    </article>
  );
};

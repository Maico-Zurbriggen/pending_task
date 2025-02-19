import { Button } from '../../components';
import "./Note.css";

const Note = ({ content, importance, deleteNote }) => {
  return (
    <div
      className={`note container ${
        importance === "normal" ? "normal" : "important"
      }`}
    >
      <p className="text-note">{content}</p>
      <div className="data w-100">
        <p className="text-note">Importance: {importance}</p>
        <Button text="eliminar" onClick={deleteNote} />
      </div>
    </div>
  );
};

export default Note;

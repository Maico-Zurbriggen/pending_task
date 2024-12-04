import './Note.css'

const Note = ( { content, importance, onClick } = props ) => { //Creamos el componente Note y extraemos los parametros que recibe
    return (
        <div className={`note column ${importance === "normal" ? 'normal' : 'important'}`}>
            <p className='text-note'>{content}</p>
            <div className="data">
                <p className='text-note'>Importance: {importance}</p>
                <button className="button-note" onClick={onClick}>Eliminar</button>
            </div>
        </div>
    )
}

export default Note;
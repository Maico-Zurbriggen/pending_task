const Note = ( { content, importance, onClick } = props ) => {
    return (
        <div>
            <p>{content}</p>
            <p>{importance}</p>
            <button onClick={onClick}>Eliminar</button>
        </div>
    )
}

export default Note;
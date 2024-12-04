import { Controller } from "react-hook-form";
import './../../Form.css'

const InputForm = ({ name, control, label, type, error } = props) => { //Creamos el componente para el input
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name} 
                control={control}
                render={({ field }) => 
                    <input id={name} type={type} {...field} />
                }
            />
            {error && <p className="error">{error.message}</p> /*Mensaje de error por si falla la validacion*/}
        </div>
    )
}

export default InputForm;
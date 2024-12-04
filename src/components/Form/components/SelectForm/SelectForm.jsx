import { Controller } from "react-hook-form";
import './../../Form.css'

const SelectForm = ({ name, control, label, error } = props) => { //Creamos el componente para el select
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name} 
                control={control}
                render={({ field }) => 
                    <select id={name} {...field}>
                        <option value="" default>--Select--</option>
                        <option value={"normal"}>Normal</option>
                        <option value={"importante"}>Importante</option>
                    </select>
                }
            />
            {error && <p className="error">{error.message}</p> /*Mensaje de error que aparece cuando falla la validacion*/}
        </div>
    )
}

export default SelectForm;
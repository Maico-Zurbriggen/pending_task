import { Controller } from "react-hook-form";
import './../../Form.css'

const InputForm = ({ name, control, label, type, error } = props) => {
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
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}

export default InputForm;
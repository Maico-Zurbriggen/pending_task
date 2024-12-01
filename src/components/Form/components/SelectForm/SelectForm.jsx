import { Controller } from "react-hook-form";

const SelectForm = ({ name, control, label } = props) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name} 
                control={control}
                render={({ field }) => 
                    <select id={name} {...field} className="form-control">
                        <option value={"normal"} default>Normal</option>
                        <option value={"importante"}>Importante</option>
                    </select>
                }
            />
        </div>
    )
}

export default SelectForm;
import { Controller } from "react-hook-form";
import "../../Form.css";

//Componente para los select de un formulario

const SelectForm = ({ name, control, label, error }) => {
  return (
    <label className="w-100" htmlFor={name}>
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select id={name} {...field}>
            <option value="" default>
              --Select--
            </option>
            <option value={"normal"}>Normal</option>
            <option value={"important"}>Importante</option>
          </select>
        )}
      />
      {
        error && (
          <p className="error">{error.message}</p>
        ) /*Mensaje de error que aparece cuando falla la validacion*/
      }
    </label>
  );
};

export default SelectForm;

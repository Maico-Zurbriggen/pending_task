import { Controller } from "react-hook-form";
import "../../Form.css";

//Componente para los input de un formulario

const InputForm = ({ name, control, label, type, error }) => {
  return (
    <label className="w-100" htmlFor={name}>
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <input id={name} type={type} {...field} />}
      />
      {
        error && (
          <p className="error">{error.message}</p>
        ) /*Mensaje de error por si falla la validacion*/
      }
    </label>
  );
};

export default InputForm;

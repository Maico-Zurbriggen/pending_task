import { Controller } from "react-hook-form";

//Componente para los select de un formulario

const SelectForm = ({ name, control, label, error, options }) => {
  return (
    <label className="inputs-container" htmlFor={name}>
      {label}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select className="inputs" id={name} {...field}>
            <option value="" default>
              --Select--
            </option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
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

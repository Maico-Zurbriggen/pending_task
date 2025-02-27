import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, SelectForm } from "./components";
import "./Form.css";

//Componente para los formularios

const Form = ({ buttonText, inputs, selects = [], schema, defaultValues, onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(schema), //Indicamos que el formulario usara el esquema schemaNotes
    defaultValues: defaultValues,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  //Metodo para llamar a la funcion de agregar nota agregando el parametro data
  const handleFormSubmit = useCallback((data) => {
    onSubmit(data, reset, setError);
  });

  return (
    <form className="form container" onSubmit={handleSubmit(handleFormSubmit)}>
      {inputs.map((input, index) => (
        <InputForm
          key={index}
          name={input.name}
          control={control}
          label={input.label}
          type={input.type}
          error={errors[input.name]}
        />
      ))}
      {selects.map((select, index) => (
        <SelectForm
          key={index}
          name={select.name}
          control={control}
          label={select.label}
          options={select.options}
          error={errors[select.name]}
        />
      ))}
      <button type="submit" className="w-100">
        {buttonText}
      </button>
    </form>
  );
};

export default Form;

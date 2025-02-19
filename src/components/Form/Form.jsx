import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaNotes } from "../../models";
import { InputForm, SelectForm } from "./components";
import "./Form.css";

const Form = ({ addNote, notes, modifyNotes }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaNotes), //Indicamos que el formulario usara el esquema que creamos
    defaultValues: {
      //Definimos valores para los campos por defecto
      content: "",
      importance: "",
    },
    mode: "onSubmit", //Indicamos cuando se hace la validacion
    reValidateMode: "onSubmit", //Indicamos cuando se debe revalidar
  });

  const handleFormSubmit = useCallback((data) => {
    //Llamamos al metodo onSubmit pasando como parametro reset
    addNote(notes, modifyNotes, data, reset);
  });

  return (
    <form className="form container" onSubmit={handleSubmit(handleFormSubmit)}>
      <InputForm
        name="content"
        control={control}
        label="Enter Task:"
        type="text"
        error={errors.content}
      />
      <SelectForm
        name="importance"
        control={control}
        label="Select Importance:"
        error={errors.importance}
      />
      <button type="submit" className="w-100">
        SUBIR
      </button>
    </form>
  );
};

export default Form;

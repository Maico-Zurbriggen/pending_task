import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaNotes } from "../../models";
import { InputForm, SelectForm } from "./components";
import { addNote } from "../../utils";
import "./Form.css";

//Componente para los formularios

const Form = ({ notes, modifyNotes }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaNotes), //Indicamos que el formulario usara el esquema schemaNotes
    defaultValues: {
      content: "",
      importance: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  //Metodo para llamar a la funcion de agregar nota agregando el parametro data
  const handleFormSubmit = useCallback((data) => {
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

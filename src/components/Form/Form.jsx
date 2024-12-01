import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, SelectForm } from './components';
import {schema} from "./models";

const Form = ( { onSubmit } = props ) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
        mode: onSubmit,
        defaultValues: {
            content: "",
            importance: "normal",
        },
    });

    const handleFormSubmit = data => {
        onSubmit(data, reset);
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <InputForm name="content" control={control} label="Ingresar Tarea" type="text" error={errors.content} />
            <SelectForm name="importance" control={control} label="Seleccionar Tarea" />
            <button type="submit" className="button">Subir</button>
        </form>
    )
}

export default Form;
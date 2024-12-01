import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, SelectForm } from './components';
import {schema} from "./models";

const Form = () => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            content: "",
            importance: "normal",
        },
    });

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm name="content" control={control} label="Ingresar Tarea" type="text" error={errors.content} />
            <SelectForm name="importance" control={control} label="Seleccionar Tarea" />
            <button type="submit" className="button">Subir</button>
        </form>
    )
}

export default Form;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, SelectForm } from './components';
import {schema} from "./models";
import './Form.css'

const Form = ( { onSubmit } = props ) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            content: "",
            importance: "",
        },
        mode: 'onSubmit',
        reValidateMode: 'onSubmit',
    });

    const handleFormSubmit = data => {
        onSubmit(data, reset);
    }

    return (
        <form className="form column" onSubmit={handleSubmit(handleFormSubmit)}>
            <InputForm name="content" control={control} label="Ingresar Tarea:" type="text" error={errors.content} />
            <SelectForm name="importance" control={control} label="Seleccionar Tarea:" error={errors.importance} />
            <button type="submit" className="button-form">SUBIR</button>
        </form>
    )
}

export default Form;
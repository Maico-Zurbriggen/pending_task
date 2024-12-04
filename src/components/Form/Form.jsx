import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm, SelectForm } from './components';
import {schema} from "./models"; //Importamos el esquema del formulario
import './Form.css'

const Form = ( { onSubmit } = props ) => { //Creamos el componente del formulario
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema), //Indicamos que el formulario usara el esquema que creamos
        defaultValues: { //Definimos valores para los campos por defecto
            content: "",
            importance: "",
        },
        mode: 'onSubmit', //Indicamos cuando se hace la validacion
        reValidateMode: 'onSubmit', //Indicamos cuando se debe revalidar
    });

    const handleFormSubmit = data => { //Llamamos al metodo onSubmit pasando como parametro reset
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
import { z } from "zod";

//Modelo para el formulario de notes

export const schemaNotes = z.object({ //Creamos el objeto del esquema
    content: z.string().min(1, "La tarea es obligatoria"), //Indicamos el contenido y sus validaciones, junto con sus mensajes de error
    importance: z.string().min(1, "Debe seleccionar la importancia")
})
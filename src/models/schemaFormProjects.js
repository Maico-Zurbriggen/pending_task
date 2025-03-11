import { z } from "zod";

//Modelo para el formulario de notes

export const schemaProjects = z.object({ //Creamos el objeto del esquema
    name: z.string().min(1, "El nombre del proyecto es obligatorio"), //Indicamos el contenido y sus validaciones, junto con sus mensajes de error
    description: z.string().min(1, "La descripcion es obligatoria"),
    timeLimit: z.string()
})
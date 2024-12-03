import { z } from "zod";

const schema = z.object({
    content: z.string().min(1, "La tarea es obligatoria"),
    importance: z.string().min(1, "Debe seleccionar la importancia")
})

export default schema;
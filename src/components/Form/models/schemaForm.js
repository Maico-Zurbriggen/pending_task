import { z } from "zod";

const schema = z.object({
    content: z.string().min(1, "La tarea es obligatoria"),
    importance: z.string()
})

export default schema;
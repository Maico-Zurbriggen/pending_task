import { z } from "zod";

//Modelo para el formulario de inicio de sesion

export const schemaUsers = z.object({
  name: z.string().min(1, "Ingrese el nombre"),
  password: z.string().min(1, "Ingrese el password")
});
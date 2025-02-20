import { z } from "zod";

//Modelo para el formulario de inicio de sesion

const registeredPassword = "clave123";

export const schemaUsers = z.object({
  name: z.string().min(1, "Ingrese el nombre"),
  password: z.string().min(1, "Ingrese el password")
}).refine(data => data.password === registeredPassword, {
  message: "La contraseña no es válida",
  path: ['password'],
});
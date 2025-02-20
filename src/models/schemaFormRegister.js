import { z } from "zod";

//Modelo para el formulario del registro

export const schemaRegister = z.object({
  name: z.string().min(4, "El nombre debe contener 4 carácteres mínimo"),
  email: z.string().email("El email no tiene un formato válido"),
  password: z.string().min(8, "El password debe contener 8 carácteres mínimo"),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, { //Validacion para cuando las contraseñas no son iguales
  message: "Las contraseñas no coinciden",
  path: ['confirmPassword']
})
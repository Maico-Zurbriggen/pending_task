import { z } from "zod";

export const schemaRegister = z.object({
  name: z.string().min(4, "El nombre debe contener 4 carácteres mínimo"),
  email: z.string().email("El email no tiene un formato válido"),
  password: z.string().min(8, "El password debe contener 8 carácteres mínimo"),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ['confirmPassword']
})
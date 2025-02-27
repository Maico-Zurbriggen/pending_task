import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppRoutes, schemaRegister } from "../../models";
import { InputForm } from "../../components/Form/components";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  }); //Define que utilizara el esquema del registro schemaRegister

  //Metodo para registrar a un usuario
  const registerUser = async (data) => {
    await register(data, reset);
  };

  return (
    <>
      <h2>Registrese</h2>
      <form
        className="form container"
        onSubmit={handleSubmit((data) => registerUser(data))}
      >
        <InputForm
          name="name"
          control={control}
          label="Enter Name"
          type="text"
          error={errors.name}
        />
        <InputForm
          name="email"
          control={control}
          label="Enter Email"
          type="email"
          error={errors.email}
        />
        <InputForm
          name="password"
          control={control}
          label="Enter Password"
          type="password"
          error={errors.password}
        />
        <InputForm
          name="confirmPassword"
          control={control}
          label="Confirm Your Password"
          type="password"
          error={errors.confirmPassword}
        />
        <button type="submit">Registrarse</button>
      </form>
      <footer className="links">
        <a href={`${AppRoutes.signIn}`}>Ya tienes una cuenta? Inicia sesión</a>
        <a href={`${AppRoutes.signIn}`}>
          Has olvidado tu contraseña? Recuperala
        </a>
      </footer>
    </>
  );
};

export default Register;

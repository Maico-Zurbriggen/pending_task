import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../components/Form/components";
import { AppRoutes, schemaUsers } from "../../models";
import { initSession } from "../../api";

//Componente para iniciar sesion

const SignIn = ({ modifyAuth, auth }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schemaUsers),
    defaultValues: {
      name: "",
      password: "",
    },
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });//Define que utilizara el esquema schemaUsers para el formulario

  //Metodo para verificar al usuario y autenticarlo
  const handleLogin = async (data) => {
    try {
      const response = await initSession(data, reset, modifyAuth);
    } catch (error) {
      console.error("Algo salio mal", error);
    }
  };

  if (auth) { //Redirigimos a private si esta autenticado
    return <Navigate to={AppRoutes.private.root} />;
  }

  return (
    <>
      <h2>INICIE SESION</h2>
      <form
        className="form container"
        onSubmit={handleSubmit((data) => handleLogin(data))}
      >
        <InputForm
          name="name"
          control={control}
          label="Enter Name"
          type="text"
          error={errors.name}
        />
        <InputForm
          name="password"
          control={control}
          label="Enter Password"
          type="password"
          error={errors.password}
        />
        <button type="submit">Ingresar</button>
      </form>
      <footer className="links">
        <a href={`${AppRoutes.register}`}>No tienes una cuenta? Registrate</a>
        <a href={`${AppRoutes.signIn}`}>
          Has olvidado tu contraseña? Recuperala
        </a>
      </footer>
    </>
  );
};

export default SignIn;

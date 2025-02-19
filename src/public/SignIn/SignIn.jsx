import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputForm } from "../../components/Form/components";
import { AppRoutes, schemaUsers } from "../../models";
import { initSession } from "../../api";

const SignIn = ({ modifyAuth, auth, navigate }) => {
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
  });

  const handleLogin = async (data) => {
    try {
      const response = await initSession(data);

      if (response.ok) {
        modifyAuth(true);
        reset();
      }
    } catch (error) {
      modifyAuth(false);
      console.error("Algo salio mal", error);
    }
  };

  if (auth) {
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

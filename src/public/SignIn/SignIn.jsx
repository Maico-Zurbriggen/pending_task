import { Form } from "../../components";
import { AppRoutes, schemaUsers } from "../../models";
import { inputsFormSignIn, defaultValuesFormSignIn } from "../../constants";
import { initSession } from "../../api";

//Componente para iniciar sesion

const SignIn = () => {
  //Metodo para verificar al usuario y autenticarlo
  const handleLogin = async (data, reset, setError) => {
    await initSession(data, reset, setError);
  };

  return (
    <>
      <h2>INICIE SESION</h2>
      <Form buttonText="ingresar" inputs={inputsFormSignIn} schema={schemaUsers} defaultValues={defaultValuesFormSignIn} onSubmit={handleLogin} />
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

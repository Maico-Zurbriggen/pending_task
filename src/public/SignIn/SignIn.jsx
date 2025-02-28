import { Form, Links } from "../../components";
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
      <Links urlLeft={AppRoutes.register} textLeft="No tienes una cuenta? Regístrate" urlRight={AppRoutes.register} textRight="Has olvidado tu contraseña? Recupérala" />
    </>
  );
};

export default SignIn;

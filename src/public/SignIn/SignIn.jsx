import { Form, Links } from "../../components";
import { AppRoutes, schemaUsers } from "../../models";
import { inputsFormSignIn, defaultValuesFormSignIn } from "../../constants";
import { initSession } from "../../api";

//Componente para iniciar sesion

const SignIn = () => {
  //Metodo para verificar al usuario y autenticarlo
  const handleLogin = ({data, reset, setError}) => {
    initSession({data, reset, setError});
  };

  return (
    <>
      <header>
        <h1 className="title">INICIE SESION</h1>
      </header>
      <main className="container">
        <Form
          buttonText="ingresar"
          inputs={inputsFormSignIn}
          schema={schemaUsers}
          defaultValues={defaultValuesFormSignIn}
          onSubmit={handleLogin}
        />
      </main>
      <footer className="links">
        <Links
          urlLeft={AppRoutes.register}
          textLeft="No tienes una cuenta? Regístrate"
          urlRight={AppRoutes.register}
          textRight="Has olvidado tu contraseña? Recupérala"
        />
      </footer>
    </>
  );
};

export default SignIn;

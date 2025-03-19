import { Form, Links } from "../../components";
import { schemaUsers } from "../../models";
import { inputsFormSignIn, defaultValuesFormSignIn } from "../../constants";
import { initSession } from "../../api";

//Componente para iniciar sesion

const SignIn = () => {
  //Metodo para verificar al usuario y autenticarlo
  const handleLogin = ({ data, reset, setError }) => {
    initSession({ data, reset, setError });
  };

  return (
    <>
      <header>
        <h1 className="title">Log In</h1>
      </header>
      <main className="container">
        <Form
          buttonText="enter"
          inputs={inputsFormSignIn}
          schema={schemaUsers}
          defaultValues={defaultValuesFormSignIn}
          onSubmit={handleLogin}
        />
      </main>
      <Links
        urlLeft="https://maico-zurbriggen.github.io/pending_task/#/register"
        textLeft="Don't have an account? Sign Up"
      />
    </>
  );
};

export default SignIn;

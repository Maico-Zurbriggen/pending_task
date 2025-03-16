import { useState } from "react";
import { Form, Links } from "../../components";
import { AppRoutes, schemaRegister } from "../../models";
import { inputsFormRegister, defaultValuesFormRegister } from "../../constants";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  const [success, setSuccess] = useState(false);

  //Metodo para registrar a un usuario
  const handleRegister = async ({data, reset, setError}) => {
    const valueSuccess = await register({data, reset, setError});
    console.log(valueSuccess);
    if (valueSuccess) {
      setSuccess(valueSuccess);
      setTimeout(() => {
        setSuccess(!valueSuccess);
        window.location.href = "https://maico-zurbriggen.github.io/pending_task/#/signIn";
      }, 300);
    }
  };

  return (
    <>
      <header>
        <h1 className="title">Registrese</h1>
      </header>
      <main className="container">
        <Form
          buttonText="registrarse"
          inputs={inputsFormRegister}
          schema={schemaRegister}
          defaultValues={defaultValuesFormRegister}
          onSubmit={handleRegister}
        />
        {success ? <p className="exito">Usuario registrado con exito</p> : null}
      </main>
      <footer className="links">
        <Links
          urlLeft="https://maico-zurbriggen.github.io/pending_task/#/signIn"
          textLeft="Ya tienes una cuenta? Inicia sesión"
          urlRight="https://maico-zurbriggen.github.io/pending_task/#/signIn"
          textRight="Has olvidado tu contraseña? Recupérala"
        />
      </footer>
    </>
  );
};

export default Register;

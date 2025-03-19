import { useState } from "react";
import { Form, Links } from "../../components";
import { schemaRegister } from "../../models";
import { inputsFormRegister, defaultValuesFormRegister } from "../../constants";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  const [success, setSuccess] = useState(false);

  //Metodo para registrar a un usuario
  const handleRegister = async ({ data, reset, setError }) => {
    const valueSuccess = await register({ data, reset, setError });
    console.log(valueSuccess);
    if (valueSuccess) {
      setSuccess(valueSuccess);
      setTimeout(() => {
        setSuccess(!valueSuccess);
        window.location.href =
          "https://maico-zurbriggen.github.io/pending_task/#/signIn";
      }, 300);
    }
  };

  return (
    <>
      <header>
        <h1 className="title">Sign Up</h1>
      </header>
      <main className="container">
        <Form
          buttonText="register"
          inputs={inputsFormRegister}
          schema={schemaRegister}
          defaultValues={defaultValuesFormRegister}
          onSubmit={handleRegister}
        />
        {success ? <p className="exito">Usuario registrado con exito</p> : null}
      </main>
      <Links
        urlLeft="https://maico-zurbriggen.github.io/pending_task/#/signIn"
        textLeft="Do you already have an account? Log In"
      />
    </>
  );
};

export default Register;

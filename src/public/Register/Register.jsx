import { useState } from "react";
import { Form, Links } from "../../components";
import { AppRoutes, schemaRegister } from "../../models";
import { inputsFormRegister, defaultValuesFormRegister } from "../../constants";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  const [success, setSuccess] = useState(false);

  const modifySuccess = () => {
    setSuccess(!success);
  }

  //Metodo para registrar a un usuario
  const handleRegister = (data, reset, setError) => {
    register(data, reset, setError, modifySuccess);
  };

  return (
    <>
      <h2>Registrese</h2>
      <Form buttonText="registrarse" inputs={inputsFormRegister} schema={schemaRegister} defaultValues={defaultValuesFormRegister} onSubmit={handleRegister} />
      {success ? <p className="exito">Usuario registrado con exito</p> : null}
      <Links urlLeft={AppRoutes.signIn} textLeft="Ya tienes una cuenta? Inicia sesión" urlRight={AppRoutes.signIn} textRight="Has olvidado tu contraseña? Recupérala" />
    </>
  );
};

export default Register;

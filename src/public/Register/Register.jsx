import { Form, Links } from "../../components";
import { AppRoutes, schemaRegister } from "../../models";
import { inputsFormRegister, defaultValuesFormRegister } from "../../constants";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  //Metodo para registrar a un usuario
  const handleRegister = async (data, reset, setError) => {
    await register(data, reset, setError);
  };

  return (
    <>
      <h2>Registrese</h2>
      <Form buttonText="registrarse" inputs={inputsFormRegister} schema={schemaRegister} defaultValues={defaultValuesFormRegister} onSubmit={handleRegister} />
      <Links urlLeft={AppRoutes.signIn} textLeft="Ya tienes una cuenta? Inicia sesión" urlRight={AppRoutes.signIn} textRight="Has olvidado tu contraseña? Recupérala" />
    </>
  );
};

export default Register;

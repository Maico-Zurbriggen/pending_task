import { Form } from "../../components";
import { AppRoutes, schemaRegister } from "../../models";
import { inputsFormRegister, defaultValuesFormRegister } from "../../constants";
import { register } from "../../api";

//Componente para el registro de usuarios

const Register = () => {
  //Metodo para registrar a un usuario
  const handleRegister = async (data, reset) => {
    await register(data, reset);
  };

  return (
    <>
      <h2>Registrese</h2>
      <Form buttonText="registrarse" inputs={inputsFormRegister} schema={schemaRegister} defaultValues={defaultValuesFormRegister} onSubmit={handleRegister} />
      <footer className="links">
        <a href={`${AppRoutes.signIn}`}>Ya tienes una cuenta? Inicia sesión</a>
        <a href={`${AppRoutes.signIn}`}>
          Has olvidado tu contraseña? Recuperala
        </a>
      </footer>
    </>
  );
};

export default Register;

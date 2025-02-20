import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../components";
import { AppRoutes } from "../models";
import { Principal } from "./Principal/Principal";

//Definimos las rutas privadas de la aplicacion

export const PrivateRouter = () => {
  //Metodo para cerrar sesion
  const cerrarSesion = () => {
    console.log("Sesion finalizada");
  }

  return (
    <>
      <button onClick={cerrarSesion} className="close-buttom">
        Cerrar Sesión
      </button>
      <RoutesWithNotFound>
        <Route
          path="/"
          element={<Navigate to={AppRoutes.private.principal} replace />}
        />
        <Route path="/principal" element={<Principal />} />
      </RoutesWithNotFound>
    </>
  );
};

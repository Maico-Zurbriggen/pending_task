import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../components";
import { AppRoutes } from "../models";
import { Principal } from "./Principal/Principal";
import { closeSession } from "../api/closeSession";

//Definimos las rutas privadas de la aplicacion

export const PrivateRouter = ({ modifyUser, user }) => {
  //Metodo para cerrar sesion
  const cerrarSesion = () => {
    closeSession(modifyUser);
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
        <Route path="/principal" element={<Principal user={user} />} />
      </RoutesWithNotFound>
    </>
  );
};

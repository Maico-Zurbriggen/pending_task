import { Navigate, Route } from "react-router-dom";
import { Button, RoutesWithNotFound } from "../components";
import { AppRoutes } from "../models";
import { Principal } from "./Principal/Principal";

export const PrivateRouter = () => {
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

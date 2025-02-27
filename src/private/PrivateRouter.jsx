import { useState, useCallback } from "react";
import { Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../components";
import { AppRoutes } from "../models";
import { Principal } from "./Principal/Principal";
import { closeSession } from "../api/closeSession";

//Definimos las rutas privadas de la aplicacion

export const PrivateRouter = () => {
  const [notes, setNotes] = useState([]);

  const modifyNotes = useCallback((updatedNotes) => {
    setNotes(updatedNotes);
  }, []);

  //Metodo para cerrar sesion
  const cerrarSesion = () => {
    closeSession(notes, modifyNotes);
  }

  return (
    <>
      <button onClick={cerrarSesion} className="close-buttom">
        Cerrar Sesión
      </button>
      <RoutesWithNotFound>
        <Route
          path="/"
          element={<Navigate to={AppRoutes.private.principal} />}
        />
        <Route path="/principal" element={<Principal notes={notes} modifyNotes={modifyNotes} />} />
      </RoutesWithNotFound>
    </>
  );
};

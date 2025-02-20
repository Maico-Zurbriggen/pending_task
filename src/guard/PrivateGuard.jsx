import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../models";
import { useEffect } from "react";

//Componente que determina si un usuario cumple o no con los requisitos para ingresar a una url privada

export const PrivateGuard = ({ modifyAuth, auth }) => {
  useEffect(() => {
    const verifiedAuth = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/protected", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          modifyAuth(true);
        }
      } catch (error) {
        console.error("Error al autenticar", error);
        modifyAuth(false);
      }
    };

    verifiedAuth();
  }, []);

  return auth ? <Outlet /> : <Navigate to={AppRoutes.signIn} />;
};

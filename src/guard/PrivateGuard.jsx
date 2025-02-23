import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../models";
import { useEffect } from "react";

//Componente que determina si un usuario cumple o no con los requisitos para ingresar a una url privada

export const PrivateGuard = ({ modifyUser, user }) => {
  useEffect(() => {
    const verifiedAuth = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/protected", {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          modifyUser({});
        }
      } catch (error) {
        console.error("Error al autenticar", error);
        modifyUser({});
      }
    };

    verifiedAuth();
  }, []);

  console.log(user);

  return Object.values(user).length ? <Outlet /> : <Navigate to={AppRoutes.signIn} />;
};

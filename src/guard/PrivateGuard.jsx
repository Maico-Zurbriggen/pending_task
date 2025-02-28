import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../models";
import { useEffect, useState } from "react";

//Componente que determina si un usuario cumple o no con los requisitos para ingresar a una url privada

export const PrivateGuard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const verifyAuth = async () => {
      await fetch("http://localhost:3000/api/protected", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            setIsAuthenticated(false);
            throw new Error("Usuario no autenticado");
          } else {
            setIsAuthenticated(true);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setIsAuthenticated(false);
        });
    };

    verifyAuth();
  }, []);

  if (isAuthenticated === null) {
    console.log("cargando...");
    return <h1>Cargando...</h1>
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={AppRoutes.signIn} />
  )
};

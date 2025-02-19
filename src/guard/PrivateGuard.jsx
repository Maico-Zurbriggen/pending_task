import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../models";
import { useEffect } from "react";

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
        } else {
          modifyAuth(false);
        }
      } catch (error) {
        modifyAuth(false);
      }
    };

    verifiedAuth();
  }, []);

  console.log(auth);

  return auth ? <Outlet /> : <Navigate to={AppRoutes.signIn} />;
};

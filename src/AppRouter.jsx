import { useState, useCallback } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components";
import { Register, SignIn } from "./public";
import { AppRoutes } from "./models";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";

const basename =
  process.env.NODE_ENV === "development" ? "/" : "/pending_task/"; //Especificamos la base de nuestras rutas

const AppRouter = () => {
  const [user, setUser] = useState({}); //Estado para determinar si un usuario esta logeado o no

  const modifyUser = useCallback((userAutenticated) => { //Creamos el metodo para cambiar el estado de la autenticacion
    setUser(userAutenticated);
  }, []);

  return (
    <BrowserRouter basename={basename}>
      <h1>Pending Task</h1>
      <RoutesWithNotFound> {/**Componente para filtrar rutas no validas */}
        <Route
          path="/pending_task/"
          element={<Navigate to={AppRoutes.signIn} />}
        />
        <Route path={AppRoutes.register} element={<Register modifyUser={modifyUser} user={user} />} />
        <Route path={AppRoutes.signIn} element={<SignIn modifyUser={modifyUser} user={user} />} />
        <Route element={<PrivateGuard modifyUser={modifyUser} user={user} />}>
          <Route
            path={`${AppRoutes.private.root}/*`}
            element={<PrivateRouter modifyUser={modifyUser} user={user} />}
          />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};

export default AppRouter;

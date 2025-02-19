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
  const [auth, setAuth] = useState(false);

  const modifyAuth = useCallback((state) => {
    setAuth(state);
  }, []);

  return (
    <BrowserRouter basename={basename}>
      <h1>Pending Task</h1>
      <RoutesWithNotFound>
        <Route
          path="/pending_task/"
          element={<Navigate to={AppRoutes.signIn} />}
        />
        <Route path={AppRoutes.register} element={<Register modifyAuth={modifyAuth} auth={auth} />} />
        <Route path={AppRoutes.signIn} element={<SignIn modifyAuth={modifyAuth} auth={auth} />} />
        <Route element={<PrivateGuard modifyAuth={modifyAuth} auth={auth} />}>
          <Route
            path={`${AppRoutes.private.root}/*`}
            element={<PrivateRouter />}
          />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};

export default AppRouter;

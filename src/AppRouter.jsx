import { HashRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components";
import { Register, SignIn } from "./public";
import { AppRoutes } from "./models";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";

const basename =
  process.env.NODE_ENV === "development" ? "/" : "/"; //Especificamos la base de nuestras rutas

const AppRouter = () => {

  return (
    <HashRouter basename={basename}>
      <RoutesWithNotFound> {/**Componente para filtrar rutas no validas */}
        <Route
          path="/"
          element={<Navigate to={AppRoutes.signIn} />}
        />
        <Route path={AppRoutes.register} element={<Register />} />
        <Route path={AppRoutes.signIn} element={<SignIn />} />
        <Route element={<PrivateGuard />}>
          <Route
            path={`${AppRoutes.private.root}/*`}
            element={<PrivateRouter />}
          />
        </Route>
      </RoutesWithNotFound>
    </HashRouter>
  );
};

export default AppRouter;

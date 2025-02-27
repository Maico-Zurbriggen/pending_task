import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "./components";
import { Register, SignIn } from "./public";
import { AppRoutes } from "./models";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";

const basename =
  process.env.NODE_ENV === "development" ? "/" : "/pending_task/"; //Especificamos la base de nuestras rutas

const AppRouter = () => {

  return (
    <BrowserRouter basename={basename}>
      <h1>Pending Task</h1>
      <RoutesWithNotFound> {/**Componente para filtrar rutas no validas */}
        <Route
          path="/pending_task/"
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
    </BrowserRouter>
  );
};

export default AppRouter;

//Modelo que contiene las rutas validas de nuestra pagina
const AppRoutes = {
  register: "/pending_task/register",
  signIn: "/pending_task/signIn",
  private: {
    root: '/pending_task/private',
    principal: "/pending_task/private/principal"
  }
};

export default AppRoutes;

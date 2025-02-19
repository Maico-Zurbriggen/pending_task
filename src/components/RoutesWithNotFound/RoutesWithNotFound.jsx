import { Navigate, Route, Routes } from "react-router-dom";

const RoutesWithNotFound = ({ children }) => {
  //Componente para rutas no encontradas
  return (
    <Routes>
      {children} {/**Se ubica al final de las otras rutas */}
      <Route path="*" element={<Navigate to={"/pending_task/404"} />} />
      <Route path="/pending_task/404" element={<h1>Página no encontrada</h1>} />
    </Routes>
  );
};

export default RoutesWithNotFound;

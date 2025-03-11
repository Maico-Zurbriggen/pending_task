import { useState } from "react";
import { Navigate, Route } from "react-router-dom";
import { closeSession } from "../api/closeSession";
import { RoutesWithNotFound } from "../components";
import { AppRoutes } from "../models/routes.models";
import { Projects } from "./Projects/Projects";
import { ProjectPage } from "./Projects/ProjectPage";

//Definimos las rutas privadas de la aplicacion

export const PrivateRouter = () => {
  const [projects, setProjects] = useState([]);
  //Metodo para cerrar sesion
  const cerrarSesion = () => {
    closeSession();
  }

  const modifyProjects = ({updatedProjects}) => {
    setProjects(updatedProjects);
  }

  return (
    <>
      <button onClick={cerrarSesion} className="button close-button">
        Cerrar Sesión
      </button>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={AppRoutes.private.projects} />} />
        <Route path="/projects" element={<Projects projects={projects} modifyProjects={modifyProjects} />} />
        <Route path="/projects/*" element={<ProjectPage />} />
      </RoutesWithNotFound>
    </>
  );
};

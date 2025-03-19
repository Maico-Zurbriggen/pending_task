import { useEffect, useState } from "react";
import { Form, Project } from "../../components";
import {
  inputsFormProjects,
  defaultValuesFormProjects
} from "../../constants";
import { SkeletonProjects } from "../../skeletons";
import { AppRoutes, schemaProjects } from "../../models";
import { deleteProject, addProject } from "../../api";
import "react-loading-skeleton/dist/skeleton.css";
import { Navigate } from "react-router-dom";

//Componente de los proyectos del usuario

export const Projects = ({projects, modifyProjects}) => {
  const [loading, setLoading] = useState(true);
  const [projectSelected, setProjectSelected] = useState(null);

  useEffect(() => {
    const getProjects = () => {
      fetch("https://political-johnette-maico-gabriel-zurbriggen-1055c233.koyeb.app/pending_task/projects", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => {
          if (!response.ok) {
            window.location.href = "https://maico-zurbriggen.github.io/pending_task/#/signIn";
            throw new Error("Usuario no autenticado");
          }

          setLoading(false);

          if (response.status === 204) {
            return;
          }

          response.json().then((responseData) => {
            modifyProjects({updatedProjects: responseData});
          });
        })
        .catch((error) => {
          console.error("Error obteniendo los proyectos del usuario", error);
        });
    };

    getProjects();
  }, []);

  const handleAddProject = async ({data, reset, setError}) => {
    const updatedProjects = await addProject({
      data,
      projects,
      reset,
      setError
    });
    if (updatedProjects) {
      modifyProjects({updatedProjects});
    }
  };

  const handleDeleteProject = async ({index, name}) => {
    const updatedProjects = await deleteProject({ projects, indexToDelete: index, name });
    if (updatedProjects) {
      modifyProjects({updatedProjects});
    }
  }

  const modifyProjectSelected = (project) => {
    setProjectSelected(project);
  }

  return loading ? (
    <SkeletonProjects />
  ) : projectSelected ? (
    <Navigate to={AppRoutes.private.projects + "/" + projectSelected} state={projects.find(project => project.name === projectSelected)} />
  ) : (
    <>
      <header>
        <h1 className="title">Projects</h1>
      </header>
      <main className="container">
        <details className="detail-projects detail">
          <summary className="summary">New project</summary>
          <div className="content-detail">
            <Form
              buttonText="create"
              inputs={inputsFormProjects}
              schema={schemaProjects}
              defaultValues={defaultValuesFormProjects}
              onSubmit={handleAddProject}
            />
          </div>
        </details>
        <section className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                name={project.name}
                deleteProject={() => handleDeleteProject({index, name: project.name})}
                modifyProjectSelected={modifyProjectSelected}
              />
            );
          })}
          {/**Iteramos los proyectos para mostrarlos */}
        </section>
        {projects.length ? null : <p>Aún no hay proyectos</p>}
      </main>
    </>
  )
};

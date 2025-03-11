import { useLocation } from "react-router-dom";

export const ProjectPage = () => {
  const location = useLocation();
  const { name, description, timeInit, timeLimit } = location.state || {
    name: "URL Inválida",
    description: "Proyecto inexistente",
  };

  console.log(timeLimit);

  return (
    <>
      <button
        className="button project-button"
        onClick={() =>
          (window.location.href =
            "http://localhost:5173/pending_task/private/projects")
        }
      >
        projects
      </button>
      <header className="project-container">
        <section className="data-project">
          <h1>{name}</h1>
          <p>init: {timeInit}</p>
          <p>finish planified: {timeLimit}</p>
        </section>
        <p className="description-project">{description}</p>
      </header>
      <main>
        
      </main>
    </>
  );
};

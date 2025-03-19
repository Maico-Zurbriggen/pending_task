export const Project = ({ name, deleteProject, modifyProjectSelected }) => {
  return (
    <article className="project">
      <p className="text-project" onClick={() => modifyProjectSelected(name)}>{name}</p>
      <button className="button button-project" onClick={deleteProject}>
        Delete
      </button>
    </article>
  );
};

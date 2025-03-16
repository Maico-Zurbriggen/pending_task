export const addProject = async ({ projects, data, reset, setError }) => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDay()).padStart(2, "0");

  data.timeInit = `${year}-${month}-${day}`;
  data.notes = [];

  try {
    const response = await fetch('https://political-johnette-maico-gabriel-zurbriggen-1055c233.koyeb.app/pending_task/projects', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include"
    });

    if (!response.ok) {
      const { input, errorMessage } = await response.json();
      setError(input, { message: errorMessage });
      throw new Error("Error al agregar el proyecto");
    }

    reset();
    const updatedProjects = [...projects, data];
    return updatedProjects;
  } catch (error) {
    console.error("Error: ", error);
  }
}

export const deleteProject = async ({ projects, indexToDelete, name }) => {
  try {
    const response = await fetch(`https://political-johnette-maico-gabriel-zurbriggen-1055c233.koyeb.app/pending_task/projects/${name}`, {
      method: "DELETE",
      credentials: "include"
    });

    if (!response.ok) {
      throw new Error("Error al eliminar la nota");
    }
    const updatedProjects = projects.filter((_, index) => index !== indexToDelete );
    return updatedProjects;
  } catch (error) {
    console.error("Error: ", error);
  }
}
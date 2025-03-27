//Funcion para cerrar la sesion del usuario

export const closeSession = () => {
  fetch("https://backend-pending-task.onrender.com/pending_task/logout", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "https://maico-zurbriggen.github.io/pending_task/#/signIn";
      } else {
        window.location.href = "https://maico-zurbriggen.github.io/pending_task/#/signIn";
        throw new Error("No hay sesion activa");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

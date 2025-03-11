//Funcion para cerrar la sesion del usuario

export const closeSession = () => {
  fetch("http://localhost:3000/pending_task/logout", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "http://localhost:5173/pending_task/signIn";
      } else {
        window.location.href = "http://localhost:5173/pending_task/signIn";
        throw new Error("No hay sesion activa");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//Funcion para cerrar la sesion del usuario

export const closeSession = async (notes, modifyNotes) => {
  await fetch("http://localhost:3000/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notes),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = "http://localhost:5173/pending_task/signIn";
        modifyNotes([]);
      } else {
        window.location.href = "http://localhost:5173/pending_task/signIn";
        throw new Error("No hay sesion activa");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

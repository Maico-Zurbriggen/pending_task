//Funcion para cerrar la sesion del usuario

export const closeSession = async (modifyUser) => {
  try {
    const response = await fetch('http://localhost:3000/api/logout', {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      modifyUser({});
    }
  } catch (error) {
    console.error("Error al finalizar la sesión", error);
  }
}
//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = async (data, reset) => {
  delete data.confirmPassword;
  await fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        reset();
        alert("Usuario registrado con exito");
      } else {
        throw new Error("Error al registrar usuario");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

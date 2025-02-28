//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = async (data, reset, setError) => {
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
        window.location.href = "http://localhost:5173/pending_task/signIn";
      } else {
        response.json().then((response) => {
          setError(response.input, {
            type: "manual",
            message: response.errorMessage,
          });
        })
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

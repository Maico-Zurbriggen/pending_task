//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = (data, reset, setError, modifySuccess) => {
  delete data.confirmPassword;

  fetch("http://localhost:3000/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        reset();
        modifySuccess();
        setTimeout(() => {
          modifySuccess();
          window.location.href = "http://localhost:5173/pending_task/signIn";
        }, 300);
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

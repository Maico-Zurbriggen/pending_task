//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = ({data, reset, setError}) => {
  delete data.confirmPassword;
  data.projects = [];

  return fetch("http://localhost:3000/pending_task/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        reset();
        return true;
      } else {
        return response.json().then((response) => {
          setError(response.input, {
            type: "manual",
            message: response.errorMessage,
          });
          return false;
        })
      }
    })
    .catch(() => {
      return false;
    });
};

//Funcion que verifica si existe un determinado usuario

export const initSession = ({data, reset, setError}) => {
  fetch("http://localhost:3000/pending_task/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  })
    .then((response) => {
      if (response.ok) {
        reset();
        window.location.href = "http://localhost:5173/pending_task/private";
      } else {
        response.json().then((response) => {
          setError(response.input, {
            type: "manual",
            message: response.errorMessage,
          });
        });
        if (response.status === 409) {
          window.location.href = "http://localhost:5173/pending_task/private";
        }
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

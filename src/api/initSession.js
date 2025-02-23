//Funcion que verifica si existe un determinado usuario

export const initSession = async (data, reset, modifyUser, setError) => {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    });

    if (response.ok) {
      const responseData = await response.json();

      if (responseData.password !== data.password) {
        setError("password", {
          type: "manual",
          message: "Contraseña inválida",
        });

        return;
      }

      reset();
      modifyUser(responseData);
    } else {
      setError("name", {
        type: "manual",
        message: "Usuario no encontrado",
      });
    }
  } catch (error) {
    modifyUser({});
    console.error("Credenciales invalidas", error);
  }
};

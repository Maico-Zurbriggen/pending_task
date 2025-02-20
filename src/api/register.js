//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = async (data, reset, modifyAuth) => {
  delete data.confirmPassword;
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      reset();
      modifyAuth(true);
    }
  } catch (error) {
    console.error('Error de red: ', error);
    modifyAuth(false);
  }
}
//Funcion que realiza la solicitud para almacenar un nuevo usuario

export const register = async (data, reset, modifyUser) => {
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
      const responseData = await response.json();
      reset();
      modifyUser(responseData);
    }
  } catch (error) {
    console.error('Error de red: ', error);
    modifyUser({});
  }
}
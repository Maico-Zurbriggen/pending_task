//Funcion que verifica si existe un determinado usuario

export const initSession = async (data, reset, modifyAuth) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });

    if (response.ok) {
      reset()
      modifyAuth(true);
    }
  } catch (error) {
    modifyAuth(false);
    console.error("Credenciales invalidas", error);
  }
  
}
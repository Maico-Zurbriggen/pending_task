export const initSession = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });

    return response;
  } catch (error) {
    console.error("Credenciales invalidas", error);
  }
  
}
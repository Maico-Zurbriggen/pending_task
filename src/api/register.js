export const register = async (data) => {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const newUser = await response.json();
      console.log("usuario agregado", newUser);
    }
  } catch (error) {
    console.error('Error de red: ', error);
  }
}
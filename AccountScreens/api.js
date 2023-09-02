// api.js
const API_URL = 'https://lisheapisapp.pythonanywhere.com/Account'; // Your API URL here

export const loginUser = async (email, password) => {
  try {
    const response = await fetch('${API_URL}/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
      console.log("Failed")
    }

    const data = await response.json();
    return data.token; // Assuming the token is returned from the API

  } catch (error) {
    throw error;
  }
};

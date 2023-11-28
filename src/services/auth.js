import axios from "axios";

const login = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/login',body);
        console.log(response.data);
        return response.data;     
      } catch (error) {
        console.error('Gagal menyimpan data ke server:', error);
        return null;
      }
}

const register = async (body) => {
  try {
    const response = await axios.post('http://localhost:3000/register',body);
    console.log(response.data);
    return response.data;
    // Lakukan sesuatu setelah data berhasil disimpan
  } catch (error) {
    console.error('Gagal menyimpan data ke server:', error);
    return null;
  }
}

const shopRegister = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/register/seller',body);
        console.log(response.data);
        return response.data;     
      } catch (error) {
        console.error('Gagal menyimpan data ke server:', error);
        return null;
      }
}

export {
  login,
  register,
  shopRegister
import axios from "axios";

const addProduct = async (body) => {
    try {
        const response = await axios.post('http://localhost:3000/api/produk',body);
        console.log(response.data);
        return response.data;     
      } catch (error) {
        console.error('Gagal menyimpan data ke server:', error);
        return null;
      }
}

export {
    addProduct,
  }
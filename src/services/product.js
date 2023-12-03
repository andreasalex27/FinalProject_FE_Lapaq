import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const productList = async () => {
  try {
      const response = await axios.get(`${API_URL}/api/produk`);
      console.log(response.data);
      return response.data;     
    } catch (error) {
      console.error('Gagal mengambil data ke server:', error);
      return null;
    }
}

const productId = async (_id) => {
    try {
        const response = await axios.get(`${API_URL}/api/produk/${_id}`);
        console.log(response.data);
        return response.data;     
    } catch (error) {
        console.error('Gagal mengambil data ke server:', error);
        return null;
    }
}

const addProduct = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/produk`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Atur tipe konten sebagai form data
      },
    });
    console.log(response.data);
    return response.data;     
  } catch (error) {
    console.error('Gagal menyimpan data ke server:', error);
    return null;
  }
}

const editProductId = async (_id, formData) => {
  try {
      const response = await axios.put(`${API_URL}/api/produk/${_id}`, formData);
      console.log(response.data);
      return response.data;     
  } catch (error) {
      console.error('Gagal update data ke server:', error);
      return null;
  }
}

const deleteProductId = async (_id) => {
  try {
      const response = await axios.delete(`${API_URL}/api/produk/${_id}`);
      console.log(response.data);
      return response.data;     
  } catch (error) {
      console.error('Gagal delete data ke server:', error);
      return null;
  }
}

export {
  productList,
  productId,
  addProduct,
  editProductId, 
  deleteProductId
}
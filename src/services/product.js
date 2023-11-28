import axios from "axios";

const productList = async () => {
  try {
      const response = await axios.get('http://localhost:3000/api/produk');
      console.log(response.data);
      return response.data;     
    } catch (error) {
      console.error('Gagal mengambil data ke server:', error);
      return null;
    }
}

const addProduct = async (formData) => {
  try {
    const response = await axios.post('http://localhost:3000/api/produk', formData, {
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

export {
  productList,
  addProduct
}
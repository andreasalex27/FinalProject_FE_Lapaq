import axios from "axios";

const buyerId = async (_id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/users/${_id}`);
        console.log(response.data);
        return response.data;     
      } catch (error) {
        console.error('Gagal mengambil data ke server:', error);
        return null;
      }
}

export {
  buyerId
}
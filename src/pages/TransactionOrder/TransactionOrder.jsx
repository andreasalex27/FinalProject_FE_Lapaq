import React, { useState, useEffect } from 'react';
import { getOrder } from '../../services/order';
import { productId } from '../../services/product';
import { getUserToken } from '../../utils/jwt';

const TransactionOrder = () => {
  const [products, setProducts] = useState([]);
  const [tokenUser, setTokenUser] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenUserData = getUserToken();
        setTokenUser(tokenUserData);

        const token = tokenUserData.token;
        const userBuyerId = tokenUserData.user._id;

        const response = await getOrder(userBuyerId, token);
        if (response && Array.isArray(response.payload)) {
          const updatedProducts = await Promise.all(response.payload.map(async (product) => {
            const productDetails = await productId(product.product_id);
            return {
              ...productDetails,
            };
          }));
          setProducts(updatedProducts);
          console.log(products)
        } else {
          console.error('Data produk tidak ditemukan atau bukanlah array:', response);
        }
      } catch (error) {
        console.error('Gagal mengambil data dari server:', error);
      }
    };

    fetchData();
  }, []);

  const defaultImageUrl = 'https://i.imgur.com/2a0RWOy.jpg';

  return (
    <>
      <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
        <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Transaksi</p>
      </div>

      <div className='bayar container p-1 mt-3 rounded d-flex justify-content-center'>
        <div className='row g-2 px-2'>
          {products.map((product, index) => (
            <div className='card mb-1 py-3 px-2 border border-0' key={index} style={{ boxShadow: '0 3px 2px rgba(0, 0, 0, 0.1)', width: '340px', height: '100px'}}>
              <div className='row g-0 d-flex align-items-center'>
                <div className='col-md-2 d-flex align-items-center'>
                  <img src={product.payload.image || defaultImageUrl} alt={product.payload.nama_produk} className="rounded" style={{ height: "60px", width: "60px" }} />
                </div>
                <div className='col-md-10'>
                  <div className='card-body d-flex justify-content-between align-items-center p-0 ps-3'>
                    <div style={{width: "200px"}}>
                      <h5 style={{ fontSize: "14px" }} className="card-title fw-bold">{product.payload.nama_produk}</h5>
                      <p className="card-text" style={{ color: '#2B2A4C', fontSize: "14px" }}><span>Rp </span>{product.payload.harga}</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <button className="btn btn-sm fw-bold text-white" style={{ backgroundColor: '#2B2A4C', fontSize: '10px', width: '70px' }}>
                        bayar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransactionOrder;
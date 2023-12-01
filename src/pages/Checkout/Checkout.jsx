import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { productId } from '../../services/product';

function Checkout() {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [product, setProduct] = useState({
      harga: ''
    });
  
    useEffect(() => {
      const prosesButton = document.getElementById("prosesButton");
  
      prosesButton.addEventListener("click", function () {
        const radioInputs = document.querySelectorAll('input[type="radio"]');
        let isRadioSelected = false;
  
        radioInputs.forEach((input) => {
          if (input.checked) {
            isRadioSelected = true;
            Swal.fire({
              position: "center",
              icon: "success",
              title: '<span style="font-size: 16px; color: green;">Checkout berhasil</span>',
              showConfirmButton: false,
              width: '300px',
              timer: 2000,
            });
            setTimeout(() => {
                navigate('/homepage');
            }, 3000);
          }
        });
  
        if (!isRadioSelected) {
          Swal.fire({
              icon: "question",
              title: '<span style="font-size: 16px; color:#3876BF;">Pilih metode pembayaran</span>',
              showConfirmButton: false,
              width: '300px',
              timer: 3000,
          });
        }
      });
  
      const getProductDetails = async () => {
        try {
          const productData = await productId(_id);
          if (productData) {
            setProduct(productData.payload); // Menyimpan data produk ke state
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      getProductDetails();
    }, [_id, navigate]);

    const handleImageError = (event) => {
        event.target.src = 'https://i.imgur.com/2a0RWOy.jpg';
    };
  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', height: '100vh'}}>
        <div className="container d-flex flex-column justify-content-between px-4" style={{ maxWidth: '390px', backgroundColor: 'white', height: '100%', paddingTop: '1vh', paddingBottom: '10vh'}}>

            <div className="pt-4">
                <h2 className="fw-semibold">Alamat</h2>
            </div>

            <div className="d-flex justify-content-between align-items-center container-md p-0 m-0">
                <div style={{ width: '210px' }}>
                    <p className="m-0 lh" style={{fontSize: '14px'}}>
                        Harap masukan alamat yang valid dan terdaftar di Google Map.
                    </p>
                </div>
                <div>
                    <button className="btn btn-sm" style={{backgroundColor: '#2B2A4C', color: 'white'}}>Tambah</button>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center container-md mt-4 p-0 mb-2">
                <div>
                    <p className='mb-0'>Gunakan alamat default</p>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                </div>
            </div>

            <div style={{ width: '100%', height: '4px', backgroundColor: 'rgb(169, 169, 169)' }}></div>
            
            <div className="d-flex align-items-center py-3">
                <div className="image">
                  <img className="rounded" src={product.image} alt={product.nama_produk} width="70px" height="70px" onError={handleImageError}/>
                </div>
                <div className="title ms-3 me-0" style={{width: '250px'}}>
                  <h3 className="fs-6 mb-2 fw-bold" style={{color: '#2B2A4C'}}>{product.nama_produk}</h3>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <p className="mb-0"><span>Rp </span>{product.harga}</p>
                    </div>
                    <div >
                        <p className='mb-0'> x1</p>
                    </div>
                  </div>
                </div>
              </div>

            <hr className="m-1" />

            <div className="d-flex justify-content-between align-items-center container-md m-0 py-2 px-0" style={{color: "#EA906C", fontSize: '16px'}}>
                <div className="align-items-center"><p className="fw-bolder mb-0">Total Harga</p></div>
                <div id="total" className="align-items-center fw-bold">{product.harga}</div>
            </div>

            <div style={{ width: '100%', height: '4px', backgroundColor: 'rgb(169, 169, 169)' }}></div>

            <div className="mt-3" style={{fontSize: '14px'}}>
                <h2 style={{ fontSize: '20px' }} className="fw-semibold mb-3">
                    Bayar dengan metode
                </h2>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div>
                        <img src="https://i.imgur.com/yv0ZxCG.png" alt="" width="70"/>
                        <span className='ms-2'>Bank Republik Indonesia</span>
                    </div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div>
                        <img src="https://i.imgur.com/vMyEaFH.png" alt="" width="70"/>
                        <span className='ms-2'>Bank Central Asia</span>
                    </div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div>
                        <img src="https://i.imgur.com/nTkl2RO.png" alt="" width="70"/>
                        <span className='ms-2'>Qris</span>
                    </div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div>
                        <img src="https://i.imgur.com/qD8cklZ.png" alt="" width="70"/>
                        <span className='ms-2'>Bayar di tempat</span>
                    </div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
            </div>

            <div className="py-3 mt-4" style={{ width: '100%' }}>
                <button id="prosesButton" className="btn fw-semibold" style={{ width: '100%', height: '40px', backgroundColor: '#B31312', color: 'white' }}>
                    Proses Pemesanan
                </button>
            </div>
      </div>
    </div>
  );
}

export default Checkout;

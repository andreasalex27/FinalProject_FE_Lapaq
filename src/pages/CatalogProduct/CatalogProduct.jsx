import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const CatalogProduct = () => {

    const [product, setProduct] = useState({
        img: 'https://i.imgur.com/2a0RWOy.jpg',
        product: '',
        harga: '',
        deskripsi: ''
    });

    useEffect(() => {
        // Mendapatkan ID produk dari parameter URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Mengambil data produk berdasarkan ID dari API
        fetch(`https://6524d82aea560a22a4ea298b.mockapi.io/product/${productId}`)
        .then(response => response.json())
        .then(productData => {

            if (productData.img) {
                setProduct(productData);
            };
        })
        .catch(error => console.error('Error:', error));
    }, []);

    // Fungsi untuk mengarahkan ke halaman payment.html dengan ID yang sesuai
    const redirectToPaymentPage = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        window.location.href = `payment.html?id=${productId}`;
    };

    // Event untuk navigasi ke halaman pencarian
    const handleSearch = () => {
        window.location.href = 'search.html';
    };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px'}}>
        <div className="container-md p-4 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>
            <div className="form-search search-input">
                <nav className="navbar">
                    <div className="container-fluid form-search">
                    <form className="container-fluid">
                        <div className="input-group wrap-input">
                            <span className="input-group-text" id="basic-addon1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            </span>
                            <input name="search" type="text" className="form-control" placeholder="Search" aria-label="Search" id="search" aria-describedby="basic-addon1" style={{ width: '70%' }}/>
                        </div>
                    </form>
                    </div>
                </nav>
            </div>
            <div className="info-product mt-2 pb-3">
                <div className="img-product" id="img-product">
                    <img className='rounded rounded-3' src={product.img} alt="Product Image" width="100%" height="200px" onError={(e) => { e.target.onerror = null; e.target.src = 'https://i.imgur.com/2a0RWOy.jpg'; }} />
                </div>
                <div className="title-product d-flex justify-content-between mt-3">
                    <div className="name-product" id="name-product">
                        <p className='fs-5 fw-bold' style={{color: '#2B2A4C'}}>{product.product}</p>
                    </div>
                    <div className="price-product" id="price-product">
                        <p className='fs-5 fw-bold' style={{color: '#2B2A4C'}}>{product.harga}</p>
                    </div>
                </div>
                {/*<div className="date-product">
                    <h2>2022-03-27</h2>
                </div>*/}
                <div style={{float: 'right'}}>
                    <Icon icon="bxs:cart-add" color="#b31312" width="35" height="30" />
                </div>
                <div className="desc-product mt-3" id="desc-product">
                    <p className='fs-6 fw-bold mb-2'>Deskripsi</p>
                    <p className="lh-sm" style={{textAlign: 'justify', fontSize: '14px'}}>{product.deskripsi}</p>
                </div>
                <div className="d-grid gap-2 btn-checkout" id="btn-checkout">
                    <button className="btn text-white fw-bold" type="button" onClick={redirectToPaymentPage} style={{backgroundColor: '#b31312'}}>Checkout</button>
                </div>
            </div>

            <hr className="border border-secondary order-2 opacity-25"/>

            <div className="review-product mb-5">
                <div className="title-review">
                    <h1 className='fs-5 fw-bold'>Review</h1>
                </div>
                <div className="seeall-review" style={{float: 'right'}}>
                    <a href="#" style={{textDecoration: 'none', color:"#b31312"}}><p>See all</p></a>
                </div>
                <div className="desc-review mt-5">
                    <div className="d-flex align-items-center">
                        <div className="user-avatar">
                            <img className="rounded-circle" src="https://i.imgur.com/nvH5zBy.jpg" width="45"/>
                        </div>
                        <div className="user-name ms-3">
                            <div className="username">
                                <h2 className='fs-6 fw-bold'>Asep Suseno</h2>
                            </div>
                            <div className="date">
                                <h3 style={{fontSize: '12px'}}>2023-03-27</h3>
                            </div>
                        </div>
                    </div>
                    <div className='user-review mt-2'>
                        <div className="text">
                            <p style={{fontSize: '14px'}}>Mantap barangnya lembut, hangat dan harganya friendly auto checkout deui sikat barudak!!</p>
                        </div>
                        <div className="stars d-flex gap-1">
                            <Icon icon="ph:star-fill" color="#ea906c" width="25" height="25" />
                            <Icon icon="ph:star-fill" color="#ea906c" width="25" height="25" />
                            <Icon icon="ph:star-fill" color="#ea906c" width="25" height="25" />
                            <Icon icon="ph:star-fill" color="#ea906c" width="25" height="25" />
                            <Icon icon="ph:star-fill" color="#eee2de" width="25" height="25" />
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        <div style={{ position: 'fixed', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', width: '390px', height: '120px', backgroundColor: '#EEE2DE', boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.3)'}}>
          <div className="pt-3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="#">
              <Icon icon="ep:menu" color="#ea906c" width="30" />
            </a>
            <a href="#">
              <Icon icon="mdi:cart" color="#ea906c" width="30" />
            </a>
            <a href="#">
              <Icon icon="material-symbols:team-dashboard" color="#ea906c" width="30" />
            </a>
            <a href="#">
              <Icon icon="material-symbols:chat" color="#ea906c" width="30" />  
            </a>
            <a href="#">
              <Icon icon="iconamoon:profile-fill" color="#ea906c" width="30" />            
            </a>
          </div>
        </div> 
    </div>
  );
};

export default CatalogProduct;

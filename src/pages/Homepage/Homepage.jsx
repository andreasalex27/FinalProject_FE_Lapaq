import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import { productList } from '../../services/product';

const Homepage = () => {
  const [products, setProducts] = useState({
    elektronik: [],
    kecantikan: [],
    fashion: []
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await productList();
        if (response && Array.isArray(response.payload)) {
          setProducts(response.payload);
        } else {
          console.error('Data produk tidak ditemukan atau bukanlah array:', response);
        }
      } catch (error) {
        console.error('Gagal mengambil data dari server:', error);
      }
    };

    fetchData();
  }, []);

  // Mengelompokkan produk berdasarkan kategori
  const groupedProducts = products.reduce((grouped, product) => {
    if (!grouped[product.kategori]) {
      grouped[product.kategori] = [];
    }
    grouped[product.kategori].push(product);
    return grouped;
  }, {});

  const defaultImageUrl = 'https://i.imgur.com/2a0RWOy.jpg';

  const openSigninPage = () => {
    navigate("/sign-in");
  };

  const openSignupPage = () => {
    navigate("/sign-up");
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px'}}>
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>
          <div className="container-lg bg py-4" style={{backgroundImage: `url("https://i.imgur.com/HhZqaeQ.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <nav className="navbar d-flex nav px-2">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src="https://i.imgur.com/OXNQ3Sf.png" alt="Bootstrap" width="40"/>
                    </a>
                </div>
                <div className="wrapper-input" onClick={openSigninPage}>
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

            <div className="container-fluid pt-4">
              <div className="d-flex justify-content-center align-items-center text-center gap-3 mx-auto">
                <div onClick={openSigninPage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="material-symbols:team-dashboard" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2 fw-bold" style={{fontSize: "12px", color:"#2b2a4c"}}>Toko Saya</p>
                </div>

                <div onClick={openSigninPage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="icon-park-solid:transaction-order" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2 fw-bold" style={{fontSize: "12px", color:"#2b2a4c"}}>Transaksi</p>
                </div>

                <div onClick={openSigninPage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="mdi:cart" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2 fw-bold" style={{fontSize: "12px", color:"#2b2a4c"}}>Keranjang</p>
                </div>

                <div onClick={openSigninPage} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="material-symbols:orders" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2 fw-bold" style={{fontSize: "12px", color:"#2b2a4c"}}>Pesanan</p>
                </div>

              </div>
            </div>
          </div>

          <div className="container-lg bg" style={{backgroundColor: "#2B2A4C"}}>
            <div className="d-flex">
              <div className="wrapper-img ms-2">
                <img className="imgA" src="https://i.imgur.com/Wc4VeqL.png" alt="" width="140px"/>
              </div>
              <div className="text-white text-end motivasi justify-content-center align-items-center ms-auto py-3 pe-3">
                <p className='lh-sm'>&quot;Yuk, mari kita jalin kerjasama untuk memperkenalkan produk ini kepada lebih banyak orang dan mencapai kesuksesan bersama!&quot;</p>
                <button className="btn btn-danger btn-sm border border-white" onClick={openSigninPage}>Daftar Sekarang</button>
              </div>
            </div>
          </div>
          
          
          <div className='container mt-3 mb-4'>
            {Object.keys(groupedProducts).map(kategori => (
              <div className='row justify-content-center' key={kategori}>
                <h2 className="ms-2 mt-4 mb-0 fs-5 fw-semibold" style={{color: '#2B2A4C'}}>{kategori}</h2>

                <div className='row row-cols-1 row-cols-md-2 g-2 px-2'>
                  {groupedProducts[kategori].map(product => (
                    <div className='col m-0 p-0'>
                      <div className='card my-2 m-2' key={product._id} style={{height: '280px'}}>
                        <img src={product.image || defaultImageUrl} alt={product.nama_produk} className="card-img-top" style={{objectFit: 'cover'}} width="120px"/>
                        <div className="card-body">
                          <h5 style={{ fontSize: "14px" }} className="card-title fw-semibold">{product.nama_produk}</h5>
                          <p className="card-text fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}><span>Rp </span>{product.harga}</p>
                          <div className="rating ms-1" style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px' }}>
                            <div className="d-flex align-items-center">
                              <Icon icon="tabler:star-filled" color="#ea906c" width="20" height="20"/>
                              <span className='fs-6 ms-1 fw-bold' style={{ color:"#ea906c" }}>5,0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>

  );
};

export default Homepage;
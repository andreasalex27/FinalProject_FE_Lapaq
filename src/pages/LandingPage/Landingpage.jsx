import React, { useEffect, useState } from 'react';
import ImageFallback from 'react-image-fallback';
import { Icon } from '@iconify/react';

const Homepage = () => {
  const [products, setProducts] = useState({
    elektronik: [],
    kecantikan: [],
    fashion: []
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://6524d82aea560a22a4ea298b.mockapi.io/product");
        const data = await response.json();
        setProducts({
          elektronik: data.filter(item => item.kategori === "elektronik"),
          kecantikan: data.filter(item => item.kategori === "kecantikan"),
          fashion: data.filter(item => item.kategori === "fashion")
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderProducts = (productList) => {
    const defaultImageUrl = 'https://i.imgur.com/2a0RWOy.jpg';
    return (
      <div className="row">
        {productList.map(item => (
          <div className="col-6 col-md-6 p-0" key={item.id}>
            <div className='card my-2 m-2'>
              <a href={`./catalog.html?id=${item.id}`} className='text-decoration-none text-black'>
                <ImageFallback src={item.img} fallbackImage={defaultImageUrl} alt="..." className="card-img-top" style={{ height: "120px" }}/>
                <div className="card-body">
                  <h5 style={{ fontSize: "14px" }} className="card-title fw-semibold">{item.product}</h5>
                  <p className="card-text">{item.harga}</p>
                  <div className="d-flex">
                    {[...Array(5)].map((_, index) => (
                      <div key={index}>
                        <Icon icon="tabler:star-filled" color="#ea906c" width="15"/>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px'}}>
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>
          <div className="pe-3" style={{backgroundColor: '#2b2a4c', height: '55px', paddingTop: '13px'}}>
            <div className="d-flex justify-content-md-end">
            <div className="ms-auto">
                <button className="btn btn-sm me-md-2 fw-semibold" type="button" style={{backgroundColor: 'white', height: '30px', fontSize: '13px'}}>Register</button>
                <button className="btn btn-sm ms-2 fw-semibold" type="button" style={{backgroundColor: '#B31312', color: 'white', height: '30px', fontSize: '13px'}}>Login</button>
            </div>
            </div>
          </div>
          <div className="container-lg bg py-4" style={{backgroundImage: `url("https://i.imgur.com/HhZqaeQ.png")`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <nav className="navbar d-flex nav px-2">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src="https://i.imgur.com/OXNQ3Sf.png" alt="Bootstrap" width="40"/>
                    </a>
                </div>
                <div className="wrapper-input">
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

            <div className="container-fluid pt-5 pb-3">
              <div className="d-flex justify-content-center align-items-center text-center gap-3 mx-auto">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="material-symbols:team-dashboard" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2" style={{fontSize: "12px"}}>TOKO SAYA</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="icon-park-solid:transaction-order" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2" style={{fontSize: "12px"}}>TRANSAKSI</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="mdi:cart" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2" style={{fontSize: "12px"}}>KERANJANG</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="bg-white rounded d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }}>
                    <Icon icon="material-symbols:orders" color="#2b2a4c" width="25" />
                  </div>
                  <p className="mt-2" style={{fontSize: "12px"}}>PESANAN</p>
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
                <p className='lh-sm'>"Yuk, mari kita jalin kerjasama untuk memperkenalkan produk ini kepada lebih banyak orang dan mencapai kesuksesan bersama!"</p>
                <button className="btn btn-danger btn-sm border border-white">Daftar Sekarang</button>
              </div>
            </div>
          </div>
          
          
          <div className="mt-3 mb-4">
            <div className="container">
              <h4 className="ms-2 mt-4 fs-5 fw-semibold" style={{color: '#2B2A4C'}}>Kecantikan</h4>
              <div className="row justify-content-center gap-2">
                {renderProducts(products.kecantikan)}
              </div>

              {/*<hr className="border border-secondary order-2 opacity-50" style={{marginLeft: '-12px', marginRight: '-12px'}}/>*/}

              <h4 className="ms-2 mt-4 fs-5 fw-semibold" style={{color: '#2B2A4C'}}>Elektronik</h4>
              <div className="row justify-content-center gap-2">
                {renderProducts(products.elektronik)}
              </div>
              
              {/*<hr className="border border-secondary order-2 opacity-50" style={{marginLeft: '-12px', marginRight: '-12px'}}/>*/}

              <h4 className="ms-2 mt-4 fs-5 fw-semibold" style={{color: '#2B2A4C'}}>Pakaian</h4>
              <div className="row justify-content-center gap-2">
                {renderProducts(products.fashion)}
              </div>
            </div>
          </div>
        </div>

        <div style={{ position: 'fixed', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', width: '390px', height: '120px', backgroundColor: '#EEE2DE', boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)'}}>
          <div className="pt-3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <a href="#">
              <Icon icon="ep:menu" color="#b31312" width="30" />
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

export default Homepage;
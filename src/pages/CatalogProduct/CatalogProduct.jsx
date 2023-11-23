import React, { useEffect, useState } from 'react';

const CatalogProduct = () => {

    const [productImage, setProductImage] = useState('https://i.imgur.com/2a0RWOy.jpg'); // Ganti URL_GAMBAR_DEFAULT dengan URL gambar default yang ingin digunakan

    useEffect(() => {
        // Mendapatkan ID produk dari parameter URL
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');

        // Mengambil data produk berdasarkan ID dari API
        fetch(`https://6524d82aea560a22a4ea298b.mockapi.io/product/${productId}`)
        .then(response => response.json())
        .then(product => {

            if (product.img) {
                setProductImage(product.img);
              }
            // Menampilkan detail produk di halaman
            const productImage = document.getElementById('img-product');
            productImage.innerHTML = `<img src="${product.img}" alt="Product Image"/>`;

            const productName = document.getElementById('name-product');
            productName.innerHTML = `<h1>${product.product}</h1>`;

            const productPrice = document.getElementById('price-product');
            productPrice.innerHTML = `<h1>${product.harga}</h1>`;

            //date

            const productDesc = document.getElementById('desc-product');
            productDesc.innerHTML = `<p>${product.deskripsi}</p>`;

            const paymentButton = document.getElementById('btn-checkout');
            paymentButton.innerHTML = `<button class="btn btn-danger" type="button">Checkout</button>`;
            paymentButton.addEventListener('click', redirectToPaymentPage);
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
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>
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
        <section className="info-product">
            <div className="img-product" id="img-product"></div>
            <div className="title-product">
                <div className="name-product" id="name-product"></div>
                <div className="price-product" id="price-product"></div>
            </div>
            <div class="date-product">
                <h2>2022-03-27</h2>
            </div>
            <div class="desc-product" id="desc-product">
                <h2>Deskripsi</h2>
            </div>
            <div class="d-grid gap-2 btn-checkout" id="btn-checkout"></div>
        </section>
        {/* ... Other sections of the catalog */}
      </div>
    </div>
  );
};

export default CatalogProduct;

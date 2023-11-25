import React, {useState, useEffect} from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://6524d82aea560a22a4ea298b.mockapi.io/product');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      const handleImageError = (event) => {
        event.target.src = 'https://i.imgur.com/2a0RWOy.jpg';
      };

    return (
        <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', height: '105vh'}}>
            <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto', height: '100%'}}>

                <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                    <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Produk Saya</p>
                </div>

                <div className="product-list px-4 pt-4">
                    {products.map((product) => (
                        <div key={product.id} className="product-card d-flex align-items-center mb-3 p-3" style={{boxShadow: '0 3px 2px rgba(0, 0, 0, 0.1)'}}>
                            <div className="image">
                                <img src={product.img} alt={product.product} width="70px" height="50px" onError={handleImageError}/>
                            </div>
                            <div className="title ms-3" style={{width: '225px'}}>
                                <h3 className="fs-6 mb-1 fw-bold" style={{color: '#2B2A4C'}}>{product.product}</h3>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0">{product.harga}</p>
                                    <p className="mb-0" style={{color: '#EA906C'}}>100 stok</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div class="d-grid gap-2 mx-4 mt-5 mb-3">
                    <button class="btn fw-bold" type="button" style={{ backgroundColor: '#B31312', color: 'white' }}>Tambah Produk</button>
                </div>
            </div>
        </div>
    )

}

export default ProductList;
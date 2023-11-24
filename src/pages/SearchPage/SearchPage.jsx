import React, { useEffect, useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchAndDisplayData = (searchTerm) => {
      fetch("https://6524d82aea560a22a4ea298b.mockapi.io/product", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Failed to fetch data");
          }
        })
        .then((items) => {
          const filteredItems = items.filter((item) =>
            item.product.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setNotFound(filteredItems.length === 0);
          setFilteredItems(filteredItems);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchAndDisplayData(searchTerm);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif'}}>
        <div className="container-md p-0 pb-5 mx-3" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto', height: '100%' }}>
            <nav className="navbar d-flex nav mx-auto justify-content-center align-items-center py-3">
                <div className="container-lg justify-content-center d d-flex">
                    <form>
                        <div className="input-group wrap-input">
                            <span className="input-group-text" id="basic-addon1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </span>
                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" id="search" aria-describedby="basic-addon1" autoFocus value={searchTerm} onChange={handleInputChange}/>
                        </div>
                    </form>
                </div>
            </nav>

            <div>
                <div className="row container-lg gap-2 d-flex justify-content-center align-items-center mx-auto mt-1" id="list-products">
                    {notFound ? (
                        <span style={{ textAlign: 'center', color: 'red' }}>Hasil tidak ditemukan</span>
                    ) : (
                    filteredItems.map((item) => (
                        <div key={item.id} className="card col-md-6 p-0" style={{ width: '48%' }}>
                            <a href={`./catalog.html?id=${item.id}`} style={{textDecoration: 'none', color: 'black'}}>
                                <img src={item.img || 'https://i.imgur.com/2a0RWOy.jpg'} className="card-img-top" alt="..." width="100%" height="120px"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://i.imgur.com/2a0RWOy.jpg'; // Ganti dengan URL gambar default Anda
                                    }}
                                />
                                <div className="card-body">
                                    <h5 style={{ fontSize: '15px', color: '#2B2A4C' }} className="card-title fw-semibold">{item.product}</h5>
                                    <p className="card-text fw-semibold" style={{color: '#B31312'}}>{item.harga}</p>
                                    <div className="d-flex">
                                        {[...Array(5)].map((_, index) => (
                                            <div key={index}>
                                                <img src="assets/img/Union.svg" alt="" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                    )}
                </div>
            </div>

        </div>
    </div>
  );
};

export default SearchPage;

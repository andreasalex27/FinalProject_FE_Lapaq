import React, { useState } from 'react';
import Swal from 'sweetalert2';


const AddProduct = () => {
  const [formData, setFormData] = useState({
    img: '',
    product: '',
    category: '',
    harga: '',
    jumlahStok: '',
    deskripsi: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Memeriksa apakah ada input yang kosong
    if (
        formData.img === '' ||
        formData.product === '' ||
        formData.harga === '' ||
        formData.jumlahStok === '' ||
        formData.deskripsi === ''
    ) {
        Swal.fire({
            icon: 'error',
            title: '<span style="font-size: 16px; color: red;">Form tidak boleh kosong</span>',
            showConfirmButton: false,
            width: '300px',
            timer: '3000',
        });
        return;
    }
    
    // Memeriksa apakah kategori sudah dipilih
    if (formData.category === '') {
    Swal.fire({
        icon: "question",
        title: '<span style="font-size: 16px; color:#3876BF;">Pilih kategori produk</span>',
        showConfirmButton: false,
        width: '300px',
        timer: 3000,
    });
    return;
    }

    try {
      const response = await fetch('https://6524d82aea560a22a4ea298b.mockapi.io/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          img: formData.img,
          product: formData.product,
          harga: formData.harga,
          deskripsi: formData.deskripsi,
          kategori: formData.kategori,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      // Clear form after successful submission
      setFormData({
        img: '',
        product: '',
        harga: '',
        jumlahStok: '',
        deskripsi: '',
        kategori: '',
      });

    // Tampilkan SweetAlert success setelah produk berhasil ditambahkan
    Swal.fire({
        position: "center",
        icon: "success",
        title: '<span style="font-size: 16px; color: green;">Produk berhasil ditambahkan</span>',
        showConfirmButton: false,
        width: '300px',
        timer: 2000,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        Swal.fire({
            icon: 'error',
            title: '<span style="font-size: 16px; color: red;">Gagal menambahkan produk</span>',
            showConfirmButton: false,
            width: '300px',
            timer: '3000',
        });
      }
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', height: '105vh'}}>
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto', height: '100%'}}>

            <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Tambah Produk</p>
            </div>

            <div className='pt-4 px-4'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="img" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Gambar Produk</label>
                        <input type="text" className="form-control" name="img" value={formData.img} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Nama Produk</label>
                        <input type="text" className="form-control" name="product" value={formData.product} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="kategori" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Kategori Produk</label>
                        <select className="form-select" name="kategori" value={formData.kategori} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <option value="">Pilih Kategori</option>
                            <option value="Kecantikan">Kecantikan</option>
                            <option value="Elektronik">Elektronik</option>
                            <option value="Fashion">Fashion</option>
                        </select>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="harga" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Harga Produk</label>
                        <input type="number" className="form-control" name="harga" value={formData.harga} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="jumlahStok" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Jumlah Stok Produk</label>
                        <input type="number" className="form-control" name="jumlahStok" value={formData.jumlahStok} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="deskripsi" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Deskripsi Produk</label>
                        <textarea name="deskripsi" className="form-control" value={formData.deskripsi} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '200px' }}/>
                    </div>

                    <div className="d-grid gap-2 mt-4 mb-3">
                        <button className="btn fw-bold text-white" type="submit" style={{backgroundColor: '#B31312'}}>Add Product</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    </div>
  );
};

export default AddProduct;

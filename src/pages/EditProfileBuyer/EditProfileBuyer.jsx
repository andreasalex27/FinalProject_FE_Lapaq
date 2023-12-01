import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { buyerId, editBuyerId } from '../../services/user';
import { useParams } from 'react-router-dom';

const EditProfileBuyer = () => {
    const { _id } = useParams();

    const [formData, setFormData] = useState({
        namaDepan: '',
        namaBelakang: '',
        email: '',
        password: '',
        noNik: '',
        alamat: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const productData = await buyerId(_id);
    
                if (productData) {
                    console.log('Product Data:', productData);
    
                    setFormData({
                        namaDepan: productData.payload.nama_depan || '',
                        namaBelakang: productData.payload.nama_belakang || '',
                        email: productData.payload.email || '',
                        password: productData.payload.password || '',
                        noNik: productData.payload.nik || '',
                        alamat: productData.payload.alamat || '',
                    });
                }
            } catch (error) {
                console.error('Gagal mengambil data produk:', error);
            }
        };
    
        fetchProduct();
    }, [_id]);
    
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await editBuyerId(_id, formData);
            if (response && response.message === 'data berhasil diubah') {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: '<span style="font-size: 16px; color: green;">Produk berhasil diubah</span>',
                    showConfirmButton: false,
                    width: '300px',
                    timer: 2000,
                });
            } else {
                throw new Error('Gagal mengubah produk');
            }
        } catch (error) {
            console.error('Error editing product:', error);
            Swal.fire({
                icon: 'error',
                title: '<span style="font-size: 16px; color: red;">Gagal mengubah produk</span>',
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
                <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Edit Profil</p>
            </div>

            <div className='pt-4 px-4'>
                <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Nama Depan</label>
                        <input type="text" className="form-control" name="product" placeholder="Masukkan Nama Produk" defaultValue={formData.namaDepan} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Nama Belakang</label>
                        <input type="text" className="form-control" name="product" placeholder="Masukkan Nama Produk" value={formData.namaBelakang} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat Email</label>
                        <input type="text" className="form-control" name="product" placeholder="Masukkan Nama Produk" value={formData.email} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Password</label>
                        <input type="text" className="form-control" name="product" placeholder="Masukkan Nama Produk" value={formData.password} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="product" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>NIK</label>
                        <input type="text" className="form-control" name="product" placeholder="Masukkan Nama Produk" value={formData.noNik} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '40px' }}/>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="deskripsi" className="form-label fw-bold" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat</label>
                        <textarea name="deskripsi" className="form-control" placeholder="Masukkan Deskripsi Produk" value={formData.alamat} onChange={handleChange} style={{ border: '2px solid #2B2A4C', height: '150px' }}/>
                    </div>

                    <div className="d-grid gap-2 mt-4 mb-3">
                        <button className="btn fw-bold text-white" type="submit" style={{backgroundColor: '#B31312'}}>Edit Profil</button>
                    </div>
                    
                </form>
            </div>
            
        </div>
    </div>
  );
};

export default EditProfileBuyer;
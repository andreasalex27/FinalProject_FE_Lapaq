import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { shopRegister } from '../../services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const clNavy = {
  color: "#2B2A4C",
  fontWeight: "bold"
};
const bdNavy = {
  borderColor: "#2B2A4C",
  borderWidth: "1px",
  borderStyle: "solid",
};

const ShopRegister = () => {
  const [formData, setFormData] = useState({
    namaToko: '',
    alamatToko: '',
    email: '',
    password: '',
    pinToko: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { namaToko, alamatToko, email, password, pinToko } = formData;

    if (!namaToko || !alamatToko || !email || !password || !pinToko) {
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 16px; color: red;">Form tidak boleh kosong</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: 'warning',
        title: '<span style="font-size: 16px; color: #EA906C;">Password harus berisi minimal 8 karakter</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
      });
      return;
    }

    if (!(/^\d{6}$/).test(pinToko)) {
      Swal.fire({
        icon: 'warning',
        title: '<span style="font-size: 16px; color: red;">Pin Toko harus terdiri dari 6 digit angka</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
      });
      return;
    }

    // Lakukan tindakan setelah registrasi berhasil
    console.log('Data valid. Melanjutkan proses registrasi...');

    try {
      const result = await shopRegister({
        nama_toko: namaToko,
        alamat_toko: alamatToko,
        email: email,
        password: password,
        pin: pinToko
      });

      // Cek hasil dari permintaan ke server
      if (result) {
        Swal.fire({
          icon: 'success',
          title: '<span style="font-size: 16px; color: green;">Berhasil daftar toko</span>',
          showConfirmButton: false,
          width: '300px',
          timer: '3000',
        });
        
        window.location.href = '/toko-saya';
      } else {
        Swal.fire({
          icon: 'warning',
          title: '<span style="font-size: 16px; color: red;">Email telah terdaftar</span>',
          showConfirmButton: false,
          width: '300px',
          timer: '3000',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 16px; color: red;">Gagal daftar toko</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', overflow: 'auto'}}>
      <div className="container pt-5 mb-0" style={{ maxWidth: '390px', backgroundColor: 'white', height: '100%' }}>
      
      <img src="https://i.imgur.com/OXNQ3Sf.png" className="img-fluid d-block mx-auto mb-4" alt="Toko" width="100" />
        
        <h1 className="text-center fs-3 my-5 fw-bold" style={{ color: '#B31312' }}>Daftar Toko</h1>
        
        <form className="m-4 mb-5" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="namaToko" className="form-label" style={clNavy}>Nama Toko</label>
            <input type="text" className="form-control" style={bdNavy} id="namaToko" name="namaToko" value={formData.namaToko} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="alamatToko" className="form-label" style={clNavy}>Alamat Toko</label>
            <input type="text" className="form-control" style={bdNavy} id="alamatToko" name="alamatToko" value={formData.alamatToko} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" style={clNavy}>Email</label>
            <input type="email" className="form-control" style={bdNavy} id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"style={clNavy}>Password</label>
            <input type="password" className="form-control" style={bdNavy} id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="pinToko" className="form-label" style={clNavy}>Pin Toko</label>
            <input type="text" className="form-control" style={bdNavy} id="pinToko" name="pinToko" value={formData.pinToko} onChange={handleChange} />
          </div>

          <div className="d-grid gap-2 mt-5">
              <button type="submit" className="btn mb-2 fw-bold text-white" style={{ backgroundColor: '#B31312'}}>Daftar Toko</button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ShopRegister;

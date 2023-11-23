import React, { useState } from 'react';
import logo from "../../assets/lapaq-logo.png";
import "../signUp/SignUp.css";

const SignUp = () => {
  const [errors, setErrors] = useState({
    namaDepan: '',
    namaBelakang: '',
    email: '',
    password: '',
    conPassword: '',
    noNIK: '',
    cbKebijakan: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const namaDepan = form['nama-depan'].value.trim();
    const namaBelakang = form['nama-belakang'].value.trim();
    const email = form['email'].value.trim();
    const password = form['password'].value.trim();
    const conPassword = form['con-password'].value.trim();
    const noNIK = form['no-nik'].value.trim();
    const cbKebijakan = form['cb-kebijakan'].checked;

    const newErrors = {
      nama: !namaDepan || !namaBelakang ? 'Nama depan dan belakang harus diisi' : '',
      email: !email ? 'Email harus diisi' : '',
      password: password.length < 8 ? 'Password harus memiliki minimal 8 karakter' : '',
      conPassword: password !== conPassword ? 'Konfirmasi password harus sama dengan password' : '',
      noNIK: (noNIK.length !== 16 || isNaN(noNIK)) ? 'No NIK harus terdiri dari 16 digit angka' : '',
      cbKebijakan: !cbKebijakan ? 'Harap setujui kebijakan' : ''
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');

    if (hasErrors) {
      return;
    }

    console.log('Data valid. Melanjutkan proses registrasi...');
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312'}}>

      <div className="container pt-5" style={{ maxWidth: '390px', backgroundColor: 'white', height: '100%', paddingTop: '10vh', paddingBottom: '10vh' }}>

        <div className="logo">
          <img src={logo} alt="logo lapaq" style={{width: "30%"}}/>
        </div>

        <div className="form-daftar">
          <h3 id="daftar">Sign Up</h3>
          <form onSubmit={handleSubmit} id="form-regis">
            <div className="row wrapper-nama" style={{width: "87%"}}>
              <div className="col nama-depan">
                <input
                  type="text"
                  id="nama-depan"
                  name="nama-depan"
                  className="form-control input-nama-depan"
                  placeholder="Nama depan"
                />
              </div>

              <div className="col nama-belakang">
                <input
                  type="text"
                  id="nama-belakang"
                  name="nama-belakang"
                  placeholder="Nama belakang"
                />
              </div>
            </div>
            <div className="error">
              {errors.nama && <p>{errors.nama}</p>}
            </div>

            <div className="email">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required />
            </div>
            <div className="error">
              {errors.email && <p>{errors.email}</p>}
            </div>

            <div className="password">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                minLength="8"
                required />
            </div>
            <div className="error">
              {errors.password && <p>{errors.password}</p>}
            </div>

            <div className="con-password">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              <input
                type="password"
                id="con-password"
                name="con-password"
                placeholder="Konfirmasi password"
                required />
            </div>
            <div className="error">
              {errors.conPassword && <p>{errors.conPassword}</p>}
            </div>

            <div className="no-nik">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg>
              <input
                type="text"
                id="no-nik"
                name="no-nik"
                placeholder="No NIK"
                maxLength="16"
                required />
            </div>
            <div className="error">
              {errors.noNIK && <p>{errors.noNIK}</p>}
            </div>

            <div className="cta">
              <div className="cta-kebijakan">
              <input
                  type="checkbox"
                  id="cb-kebijakan"
                  name="Setujui kebijakan" 
                  required/>
                <label htmlFor="setujui-kebijakan">Setujui kebijakan</label>
              </div>
            </div>
            <div className="error">
              {errors.cbKebijakan && <p>{errors.cbKebijakan}</p>}
            </div>

            <button type="submit" id="submit">Register</button>
          </form>
        </div>

        <div className="saran">
          <span>Sudah punya akun? <a href="#">Log In</a></span>
        </div>

      </div>
    </div>
  );
};

export default SignUp;

            
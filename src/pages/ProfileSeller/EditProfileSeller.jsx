import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import library untuk menampilkan pop-up

const EditProfileSeller = () => {
  // State untuk menyimpan data profil
  const [profileData, setProfileData] = useState({
    namaToko: 'Sabrina Hijab Fashion',
    alamatToko: 'Griya Permata Blok B No. 123',
    alamatEmail: 'sabrinafashion@gmail.com',
    nomorTelepon: '086599998766',
    password: 'sabrinafash99',
    pinToko: '879065',
  });

  // Handler untuk mengubah nilai pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  // Handler ketika tombol simpan ditekan
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validasi form
    const { namaToko, alamatToko, alamatEmail, nomorTelepon, password, pinToko } = profileData;

    if (
        !namaToko.trim() ||
        !alamatToko.trim() ||
        !alamatEmail.trim() ||
        !nomorTelepon.trim() ||
        !password.trim() ||
        !pinToko.trim()
    ) {
        Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 16px; color: red;">Form tidak boleh kosong!</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
        customClass: {
            title: 'custom-title-class', // Nama class untuk style khusus (opsional)
        },
        });
        return;
    }

    if (password.length < 8) {
        Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 16px; color: red;">Password harus berisi minimal 8 karakter!</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
        customClass: {
            title: 'custom-title-class', // Nama class untuk style khusus (opsional)
        },
        });
        return;
    }

    if (!/^\d{6}$/.test(pinToko)) {
        Swal.fire({
        icon: 'error',
        title: '<span style="font-size: 16px; color: red;">Pin Toko harus terdiri dari 6 digit angka!</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
        customClass: {
            title: 'custom-title-class', // Nama class untuk style khusus (opsional)
        },
        });
        return;
    }

    // Jika semua validasi terlewati, lakukan proses penyimpanan profil
    // ... Kode untuk menyimpan profil ke backend atau tempat penyimpanan lainnya
    

    // Tampilkan pop-up notifikasi bahwa profil telah diubah
    Swal.fire({
        icon: 'success',
        title: '<span style="font-size: 16px; color: green;">Profil berhasil diubah!</span>',
        showConfirmButton: false,
        width: '300px',
        timer: '3000',
        customClass: {
          title: 'custom-title-class', // Nama class untuk style khusus (opsional)
        },
    });
  };

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', height: '100vh'}}>
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto', height: '100%' }}>

            <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Edit Profil Toko</p>
            </div>

            <div className='p-4'>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="storeName" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Nama Toko</label><br/>
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="text" id="storeName" name="namaToko" value={profileData.namaToko} onChange={handleChange} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="storeAddress" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Alamat Toko</label><br/>
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="text" id="storeAddress" name="alamatToko" value={profileData.alamatToko} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Alamat Email</label><br/>
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="email" id="email" name="alamatEmail" value={profileData.alamatEmail} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="phoneNumber" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Nomor Telepon</label><br/>
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="tel" id="phoneNumber" name="nomorTelepon" value={profileData.nomorTelepon} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Password</label><br/>
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="text" id="password" name="password" value={profileData.password} onChange={handleChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="pin" className='fw-bold mb-1' style={{fontSize: '14px', color: '#2B2A4C'}}>Pin Toko</label><br />
                        <input className='align-items-center rounded px-2 form-control' style={{ border: '2px solid #2B2A4C', height: '40px', fontSize: '14px' }} type="text" id="pin" name="pinToko" value={profileData.pinToko} onChange={handleChange}/>
                    </div>
                    <div class="d-grid gap-2" style={{marginTop: '50px'}}>
                        <button class="btn fw-bold" type="submit" style={{backgroundColor: '#B31312', color: 'white'}}>Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default EditProfileSeller;

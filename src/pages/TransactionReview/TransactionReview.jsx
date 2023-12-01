import React from 'react';
import Swal from 'sweetalert2';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

const TransactionReview = () => {
    const navigate = useNavigate();
    const handleAjukan = () => {
        Swal.fire({
            icon: 'success',
            title: '<span style="font-size: 16px; color: green;">Penilaian berhasil dikirim</span>',
            showConfirmButton: false,
            width: '300px',
            timer: '3000',
        });

        navigate('/homepage/transaksi')
    } 

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px', height: '100vh'}}>
        <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto', height: '100%' }}>
            <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Nilai Produk</p>
            </div>

            <div className='mx-5 mt-5'>
                <p className='fw-bold mb-2' style={{fontSize: '13px'}}>Mohon berikan penilaian produk yang telah anda nilai</p>
                <div className='d-flex'>
                    <Icon icon="ic:round-star" color="#ea906c" width="35" />
                    <Icon icon="ic:round-star" color="#ea906c" width="35" />
                    <Icon icon="ic:round-star" color="#ea906c" width="35" />
                    <Icon icon="ic:round-star" color="#ea906c" width="35" />
                    <Icon icon="ic:round-star" color="#ea906c" width="35" />
                </div>
                <form>
                    <div className="mb-3 mt-4">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-6 fw-bold" style={{color: '#2B2A4C'}}>Komentar</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="d-grid gap-2 mt-5">
                        <button className='btn text-white fw-bold' type="button" onClick={handleAjukan} style={{backgroundColor: '#B31312'}}>Kirim</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default TransactionReview;
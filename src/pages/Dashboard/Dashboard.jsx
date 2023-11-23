import React from 'react';
import { Icon } from '@iconify/react';

const Dashboard = () => {

    return (
        <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px'}}>
            <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>

                <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                    <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Toko Saya</p>
                </div>

                <img src='https://i.imgur.com/AXRB66U.jpg' width="100%"/>

                <div className="product d-flex align-items-center p-3" style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'}}>
                    <div className="image me-3">
                        <img src="https://i.imgur.com/f9AkNUW.jpg" alt="Product" className="img-fluid rounded-circle" width="65" style={{ boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)' }}/>
                    </div>
                    <div className="details d-flex flex-column justify-content-between flex-grow-1 ms-2">
                        <div className="title d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="fs-6 fw-bold" style={{ color: '#B31312' }}>Sabrina Fashion</h4>
                                <p style={{ color: '#EA906C', marginBottom: '0' }}>Rp 2.000.000</p>
                            </div>
                            <div className="button-container">
                                <button className="btn btn-sm fw-bold" style={{ backgroundColor: '#B31312', color: 'white', fontSize: '11px', height: '25px', width: '70px'}}>Lihat</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="icons-container d-flex justify-content-between text-items-center m-3 py-3 px-3">
                    <div className="icon-item text-center ms-3">
                        <Icon icon="gridicons:product" color="#b31312" width="35" />                        
                        <p className="icon-text fw-bold" style={{color: '#b31312'}}>Produk</p>
                    </div>
                    <div className="icon-item text-center">
                        <Icon icon="fluent:money-calculator-24-regular" color="#b31312" width="35" />                        
                        <p className="icon-text fw-bold" style={{color: '#b31312'}}>Keuangan</p>
                    </div>
                    <div className="icon-item text-center">
                        <Icon icon="material-symbols:forum-outline-rounded" color="#b31312" width="35" />                        
                        <p className="icon-text fw-bold" style={{color: '#b31312'}}>Forum</p>
                    </div>
                    <div className="icon-item text-center me-3">
                        <Icon icon="mdi:tooltip-help-outline" color="#b31312" width="35" />                        
                        <p className="icon-text fw-bold" style={{color: '#b31312'}}>Bantuan</p>
                    </div>
                </div>

                <div className='m-3'>
                    <p className="fw-bold mb-2" style={{color: '#b31312', fontSize: '13px'}}>Riwayat Pesanan</p>
                    <div className="icons-container d-flex justify-content-between text-items-center pt-3 rounded" style={{backgroundColor: "#EEE2DE"}}>
                        <div className="icon-item text-center ms-3">
                            <Icon icon="lucide:package" color="#2b2a4c" width="30" />                            
                            <p className="icon-text fw-bold mt-1" style={{color: '#2b2a4c', fontSize: '10px'}}>Pemrosesan</p>
                        </div>
                        <div className="icon-item text-center">
                            <Icon icon="lucide:package-x" color="#2b2a4c" width="30" />                            
                        <p className="icon-text fw-bold mt-1" style={{color: '#2b2a4c', fontSize: '10px'}}>Pembatalan</p>
                        </div>
                        <div className="icon-item text-center">
                            <Icon icon="octicon:package-dependencies-16" color="#2b2a4c" width="30" height="30" />                            
                            <p className="icon-text fw-bold mt-1" style={{color: '#2b2a4c', fontSize: '10px'}}>Pengembalian</p>
                        </div>
                        <div className="icon-item text-center me-3">
                            <Icon icon="ic:outline-rate-review" color="#2b2a4c" width="30" />                            
                            <p className="icon-text fw-bold mt-1" style={{color: '#2b2a4c', fontSize: '10px'}}>Penilaian</p>
                        </div>
                    </div>
                </div>

                <img className="px-3 mb-5" src='https://i.imgur.com/puvVrP9.jpg' width="100%"/>
            </div>
            <div style={{ position: 'fixed', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', width: '390px', height: '120px', backgroundColor: '#EEE2DE', boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)'}}>
                <div className="pt-3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <a href="#">
                        <Icon icon="material-symbols:team-dashboard" color="#b31312" width="30" />
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

export default Dashboard;
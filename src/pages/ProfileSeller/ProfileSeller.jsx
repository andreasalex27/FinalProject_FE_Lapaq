import React, { useState } from "react";
import { Icon } from '@iconify/react';

const ProfileSeller = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('sabrinafash99');
    const [showPin, setShowPin] = useState(false);
    const [pin, setPin] = useState('879065');
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const togglePinVisibility = () => {
        setShowPin(!showPin);
      };

    return (
        <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', fontFamily: 'Montserrat, sans-serif', fontSize: '12px'}}>
            <div className="container-md p-0 pb-5" style={{ maxWidth: '390px', backgroundColor: 'white', margin: 'auto' }}>

                <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                    <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Profil Toko</p>
                </div>

                <div className="text-center mt-5 mb-3">
                    <img className="img-fluid rounded-circle" src="https://i.imgur.com/f9AkNUW.jpg" width="100px" style={{ boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)' }}/>
                    <div className="m-3">
                        <p className="fs-6 fw-bold" style={{color: '#B31312'}}>Sabrina Hijab Fashion</p>
                    </div>
                </div>

                <div className="p-4 mb-3">
                    <div className="mb-3">
                        <div className="mb-0">
                            <p className="fw-bold mb-2" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat Email</p>
                        </div>
                        <div className="align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <p style={{lineHeight: '40px', fontSize: '14px'}}>sabrinafashion@gmail.com</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="mb-0">
                            <p className="fw-bold mb-2" style={{color: '#2B2A4C', fontSize: "14px"}}>Nomor Telepon</p>
                        </div>
                        <div className="align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <p style={{lineHeight: '40px', fontSize: '14px'}}>0865 9999 8766</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="mb-0">
                            <p className="fw-bold mb-2" style={{ color: '#2B2A4C', fontSize: '14px' }}>Password</p>
                        </div>
                        <div className="d-flex align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <input type={showPassword ? 'text' : 'password'} value={password} readOnly style={{ border: 'none', outline: 'none', fontSize: '14px', width: '85%'}}/>
                            <button type="button" onClick={togglePasswordVisibility} style={{ border: 'none', background: 'transparent', cursor: 'pointer', outline: 'none' }}>
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="mb-0">
                            <p className="fw-bold mb-2" style={{ color: '#2B2A4C', fontSize: '14px' }}>PIN Toko</p>
                        </div>
                        <div className="d-flex align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <input type={showPin ? 'text' : 'password'} value={pin} readOnly style={{ border: 'none', outline: 'none', fontSize: '14px', width: '85%'}}/>
                            <button type="button" onClick={togglePinVisibility} style={{ border: 'none', background: 'transparent', cursor: 'pointer', outline: 'none' }}>
                                {showPin ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <div className="mb-0">
                            <p className="fw-bold mb-2" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat Toko</p>
                        </div>
                        <div className="align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                            <p style={{lineHeight: '40px', fontSize: '14px'}}>Griya Permata Blok B No. 123</p>
                        </div>
                    </div>
                </div>

                <div className="d-grid gap-2 mx-4 mb-5">
                    <button className="btn fw-bold" type="button" style={{backgroundColor: '#B31312', color: 'white'}}>Edit Profil</button>
                    <button className="btn fw-bold" type="button" style={{backgroundColor: '#EA906C', color: '#B31312'}}>Logout</button>
                </div>
            </div>

            <div style={{ position: 'fixed', top: '100%', left: '50%', transform: 'translate(-50%, -50%)', width: '390px', height: '120px', backgroundColor: '#EEE2DE', boxShadow: '0px -2px 5px rgba(0, 0, 0, 0.1)'}}>
                <div className="pt-3" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <a href="#">
                        <Icon icon="material-symbols:team-dashboard" color="#ea906c" width="30" />
                    </a>
                    <a href="#">
                        <Icon icon="material-symbols:chat" color="#ea906c" width="30" />  
                    </a>
                    <a href="#">
                        <Icon icon="iconamoon:profile-fill" color="#b31312" width="30" />            
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ProfileSeller;
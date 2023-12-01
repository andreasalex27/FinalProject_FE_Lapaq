import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { sellerId } from "../../services/user";

const ProfileSeller = () => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const [sellerData, setSellerData] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showPin, setShowPin] = useState(false);

    useEffect(() => {
        const fetchSellerData = async () => {
            try {
                const data = await sellerId(_id);
                setSellerData(data.payload); // Menyimpan data payload dari response
            } catch (error) {
                console.error('Error fetching seller data:', error);
            }
        };

        fetchSellerData();
    }, [_id]);

    // Fungsi untuk menampilkan/hide password
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Fungsi untuk menampilkan/hide PIN
    const togglePinVisibility = () => {
        setShowPin(!showPin);
    };

    const openEditProfileSeller = () => {
        navigate(`/homepage/dashboard/profile/edit/${sellerData._id}`);
      };

    return (
        <>
            <div className='pt-4 pb-1' style={{boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)', marginBottom: '3px'}}>
                <p className='text-center fs-6 fw-bold' style={{color: '#B31312'}}>Profil Toko</p>
            </div>

            <div className="text-center mt-3">
                <img className="img-fluid rounded-circle" src="https://i.imgur.com/f9AkNUW.jpg" width="100px" style={{ boxShadow: '0 3px 3px rgba(0, 0, 0, 0.5)' }}/>
                <div className="m-3">
                    <p className="fs-6 fw-bold mb-0" style={{ color: '#B31312' }}>{sellerData?.nama_toko || '-'}</p>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-3">
                    <div className="mb-0">
                        <p className="fw-bold mb-2" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat Email</p>
                    </div>
                    <div className="align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                        <p style={{lineHeight: '40px', fontSize: '14px'}}>{sellerData?.email || '-'}</p>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="mb-0">
                        <p className="fw-bold mb-2" style={{ color: '#2B2A4C', fontSize: '14px' }}>Password</p>
                    </div>
                    <div className="d-flex align-items-center rounded px-2" style={{ border: '2px solid #2B2A4C', height: '40px' }}>
                        <input type={showPassword ? 'text' : 'password'} value={sellerData?.password || '-'} readOnly style={{ border: 'none', outline: 'none', fontSize: '14px', width: '85%'}}/>
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
                        <input type={showPin ? 'text' : 'password'} value={sellerData?.pin || '-'} readOnly style={{ border: 'none', outline: 'none', fontSize: '14px', width: '85%'}}/>
                        <button type="button" onClick={togglePinVisibility} style={{ border: 'none', background: 'transparent', cursor: 'pointer', outline: 'none' }}>
                            {showPin ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>

                <div className="mb-3">
                    <div className="mb-0">
                        <p className="fw-bold mb-2" style={{color: '#2B2A4C', fontSize: "14px"}}>Alamat Toko</p>
                    </div>
                    <div className="align-items-center rounded px-2 py-1" style={{ border: '2px solid #2B2A4C', height: '80px' }}>
                        <p style={{lineHeight: '20px', fontSize: '14px'}}>{sellerData?.alamat_toko || '-'}</p>
                    </div>
                </div>
            </div>

            <div className="d-grid gap-2 mx-4">
                <button className="btn fw-bold" type="button" onClick={openEditProfileSeller} style={{backgroundColor: '#B31312', color: 'white'}}>Edit Profil</button>
                <button className="btn fw-bold" type="button" style={{backgroundColor: '#EA906C', color: '#B31312'}}>Logout</button>
            </div>
        </>

    );
};

export default ProfileSeller;
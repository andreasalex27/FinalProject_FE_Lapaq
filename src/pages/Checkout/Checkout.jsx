import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function Checkout() {
  useEffect(() => {
    const prosesButton = document.getElementById("prosesButton");
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    prosesButton.addEventListener("click", function () {
      const radioInputs = document.querySelectorAll('input[type="radio"]');
      let isRadioSelected = false;

      radioInputs.forEach((input) => {
        if (input.checked) {
          isRadioSelected = true;
          Swal.fire({
            position: "center",
            icon: "success",
            title: '<span style="font-size: 16px; color: green;">Checkout berhasil</span>',
            showConfirmButton: false,
            width: '300px',
            timer: 2000,
          });
          setTimeout(() => {
            window.location.href = "home.html";
          }, 3000);
        }
      });

      if (!isRadioSelected) {
        Swal.fire({
            icon: "question",
            title: '<span style="font-size: 16px;">Pilih metode pembayaran</span>',
            showConfirmButton: false,
            width: '300px',
            timer: 3000,
        });
      }
    });

    fetch(`https://6524d82aea560a22a4ea298b.mockapi.io/product/${productId}`)
      .then((response) => response.json())
      .then((product) => {
        const harga = document.getElementById("harga-item");
        harga.innerHTML = `<p>${product.harga}</p>`;

        const total = document.getElementById("total");
        total.innerHTML = `<p>${product.harga}</p>`;
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', height: '100vh'}}>
        <div className="container d-flex flex-column justify-content-between px-4" style={{ maxWidth: '390px', backgroundColor: 'white', height: '100%', paddingTop: '1vh', paddingBottom: '10vh'}}>

            <div className="pt-4">
                <h2 className="fw-semibold">Alamat</h2>
            </div>

            <div className="d-flex justify-content-between align-items-center container-md p-0 m-0">
                <div style={{ width: '210px' }}>
                    <p className="m-0 lh-1">
                        Harap masukan alamat yang valid dan terdaftar di Google Map.
                    </p>
                </div>
                <div>
                    <button className="btn" style={{backgroundColor: '#2B2A4C', color: 'white'}}>Tambah</button>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center container-md mt-4 p-0">
                <div>
                    <p className='mb-0'>Gunakan alamat default</p>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked disabled/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
                </div>
            </div>

            <div style={{ width: '100%', height: '4px', backgroundColor: 'rgb(169, 169, 169)' }}></div>
            
            <div className="d-flex justify-content-between align-items-center container-md mt-2 p-0 text-secondary">
                <div><p>1 Item</p></div>
                <div id="harga-item"><p>Rp. 150.000</p></div>
            </div>

            <hr className="m-1" />

            <div className="d-flex justify-content-between align-items-center container-md m-0 p-0 text-secondary">
                <div className="align-items-center"><p className="fw-bolder text-black">Total Harga</p></div>
                <div id="total" className="align-items-center"></div>
            </div>

            <div style={{ width: '100%', height: '4px', backgroundColor: 'rgb(169, 169, 169)' }}></div>

            <div className="mt-3">
                <h2 style={{ fontSize: '20px' }} className="fw-semibold mb-3">
                    Bayar dengan metode
                </h2>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div><img src="https://i.imgur.com/yv0ZxCG.png" alt="" /></div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div><img src="https://i.imgur.com/vMyEaFH.png" alt="" /></div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div><img src="https://i.imgur.com/nTkl2RO.png" alt="" /></div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center container-md mb-2 p-0">
                    <div><img src="https://i.imgur.com/qD8cklZ.png" alt="" /></div>
                    <div>
                        <input className="form-check-input radio" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    </div>
                </div>
            </div>

            <div className="py-3 mt-4" style={{ width: '100%' }}>
                <button id="prosesButton" className="btn fw-semibold" style={{ width: '100%', height: '40px', backgroundColor: '#B31312', color: 'white' }}>
                    Proses Pemesanan
                </button>
            </div>
      </div>
    </div>
  );
}

export default Checkout;

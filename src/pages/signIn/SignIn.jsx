import React from 'react'
import "../signIn/SignIn.css"
import logo from '../../assets/lapaq-logo.png'

const SignIn = () => {
  return (
    <div className="body d-flex justify-content-center align-items-center" style={{ backgroundColor: '#B31312', height: '100vh'}}>

<div className="container d-flex flex-column justify-content-between" style={{ maxWidth: '390px', backgroundColor: 'white', height: '100%', paddingTop: '10vh', paddingBottom: '10vh'}}>
        <div className="logo">
          <img src={logo} alt="logo lapaq" />
        </div>
        <div className="form-login">
          <h3 id="login">Log In</h3>
          <form action="/login" method="post" id="login-form">
            <div className="username">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
              </svg>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                required />
            </div>
            <div className="password">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required />
            </div>
            <div className="cta">
              <div className="cta-ingat-saya">
                <input type="checkbox" id="cb-ingat-saya" name="ingatSaya" />
                <label htmlFor="ingatSaya">Ingat Saya </label>
              </div>
              <button type="button" id="lupa-sandi">
                <a href="lupa-sandi">Lupa Sandi</a>
              </button>
            </div>
            <button type="submit" id="btn-login">LOG IN</button>
          </form>
        </div>
        <div className="saran">
          <span>Belum punya akun? <a href="#">Daftar</a></span>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
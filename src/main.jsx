import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SignUp from './pages/signUp/SignUp.jsx'
import SignIn from './pages/signIn/SignIn.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />  
  </React.StrictMode>,
)

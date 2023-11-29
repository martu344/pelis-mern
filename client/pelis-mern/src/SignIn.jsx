import { useState } from 'react'
import {NavLink} from "react-router-dom"


const SignIn = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const datosEmail = (e) => {
    setEmail(e.target.value);
  };

  const datosPassword = (e) => {
    setPassword(e.target.value);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);
   
  };

  return (
    <div className='d-flex flex-column align-items-center text-center justify-content-center w-100 textWhite'>
        <div className='text-center p-2'>
            <img src="logo.png" alt="Movies Hub" class="logo"/>
        </div>
        <div className='d-flex flex-column ancho justify-content-start'>
            <h2 className='text-start'>Inicio de Sesión</h2>
            <form onSubmit={enviarDatos}>
                <div className='d-flex flex-column'>
                    <label className='p-2 text-start' htmlFor="email">Correo Electrónico:</label>
                    <input className='p-2 form-control' type="email" id="email"  value={email} onChange={datosEmail} required />
                </div>
                <div className='d-flex flex-column pb-2'>
                    <label className='p-2 text-start' htmlFor="password">Contraseña:</label>
                    <input className='p-2 form-control' type="password" id="password" value={password} onChange={datosPassword} required />      
                </div>
            <button className='btn colorButton ancho mt-2 p-2' type="submit">Continuar</button>
            </form>
            <p class="align-self-start mt-2">Al continuar, aceptas las <a href="">Condiciones de uso</a> y el <a href="">Aviso de privacidad</a> de Movies Hub</p>
            <div class="d-flex flex-column">
                <button className='btn colorButton p-2 btnRegistro mb-2'><i class="bi bi-google pe-1"></i>Registrese con Google</button>
                <button className='btn colorButton p-2 btnRegistro'><i class="bi bi-instagram pe-1"></i>Registrese con Instagram</button>
            </div>
        </div>
        <div class="d-flex  pt-2">
            <p className='pe-2'>¿No tienes cuenta en Movies Hub?</p><NavLink to="/signup"><a href="" className='ps-2'>Crear tu cuenta</a></NavLink>
            {/* <button className="btn colorButton ancho p-2">Crear tu cuenta de Movies Hub</button> */}
        </div>
      
    </div>
  );
};

export default SignIn;

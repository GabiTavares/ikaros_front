import '../styles/App_components.css';
import '../styles/App_images.css';
import doctor from '../images/doctor.png';
import ikaros from '../images/ikaros.png';
import { useState } from 'react';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

export default function Login() {
  const [email, setEmail] = useState();
  const [pwd, setPassword] = useState();

  const password = pwd // senha do usuario

const saltRounds = 10; //valor aleatorio para a criptografia; numero de rounds

bcrypt.hash(password, saltRounds, (err, hash) => {
  if(err) {
    console.error('erro ao criar a senha:', err);
    return;
  }
  console.log('Senha criptografada:', hash)

})

  function validateDatas() {
    if(email === 'gabi@gmail.com' && pwd === 'gabi123'){
      window.location.href = '/Home'
    }else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Email or password invalidated',
        showConfirmButton: false,
        timer: 1000
      })
    }
  }
  
  return (
    <div className="all">
      <div className='login'>
        <h1>WELCOME!</h1>
        <div className='datas'>
        <p>E-mail</p>
        <input 
        id='input-email' 
        type='text' 
        autoComplete='off'
        onChange={(e) => setEmail(e.target.value)}/>
        <p>Password <strong className='forgot'>Forgot Password?</strong></p>
        <input onChange={(e) => setPassword(e.target.value)} type='password'/>
          </div>
        <button className='Logar' onClick={(e) => validateDatas(e)}>Login</button>
      </div>
        <div className='asdfg'>
            <img className='doctors' src={doctor} alt='iconeMedico'/>
          </div>
          <div className='dev'>
              <p>Developed By</p>
              <img src={ikaros} alt='logo'/>
              </div>
    </div>
  );
}


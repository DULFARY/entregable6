import React, { useState } from 'react'
import UseAunth from '../hooks/UseAunth.JS'
import { useForm } from 'react-hook-form'
import UserLogged from '../components/LoginPage/UserLogged.jsx'
import './styles/LoginPage.css'

const loginPage = () => {

  const[ user, setUser] = useState(JSON.parse(localStorage.getItem ('user')));


  const {register, handleSubmit,reset } = useForm();

  const {loginUser }  = UseAunth ()


  const submit = data => {
    loginUser (data)
    reset({
      email: '',
      password: ''
    })
  }

  if(localStorage.getItem('token')) {
    return< UserLogged setUser={setUser} user={user}/>;

  }

  return (
    <div className='user_login'>
      <form className='container_login'  onSubmit={handleSubmit(submit)}>
        <label >
          <span className='loggin_registro'>USER</span>
          <img className='login_img' src="/user.png" alt="" />
          <span className='correo'>Email</span>
          <input className='input_email' {...register('email')} type= "email"/>
        </label>
        <label>
          <span className='contraseña'>password</span>
          <input className='register_inp' {...register('password')} type= "password" />
        </label>
        <button className='boton'>submit</button>
      </form>

    </div>
  )
}

export default loginPage
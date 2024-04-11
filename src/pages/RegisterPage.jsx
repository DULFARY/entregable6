import { useForm } from "react-hook-form"
import UseAunth from "../hooks/UseAunth.JS"
import './styles/RegisterPage.css'

const RegisterPage = () => {


   const { register, handleSubmit, reset} = useForm ()

   const {registerUser} = UseAunth()


   const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })

   


  }


  return (
       <div className="container_register">
      <form className="for_register" onSubmit={handleSubmit (submit)}>
        <h2  className="title_register">Register</h2>
        <label>
          <span className="name_register">First Name</span>
          <input className="input_register" {...register('firstName')}type="text" />
        </label>
        <label>
          <span className="last_register">Last Name</span>
          <input className="input_last"{...register('lastName')} type="text" />
        </label>
        <label>
          <span className="email_register">Email</span>
          <input className="input_email" {...register('email')} type="email" />
        </label>
        <label>
          <span className="name_passwor">Password</span>
          <input className="input_paswor" {...register('password')}type="password" />
        </label>
        <label>
          <span className="gender_register">Gender</span>
          < 
            select className="input_gender" {...register('gender')}>
            <option value='unknown'>Unknown</option>
            <option value='male'>male</option>
            <option value='female'>female</option>
            <option value='other'>I prefer don't say it</option>

          </select>
        </label>
        <button className="button_register">Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage

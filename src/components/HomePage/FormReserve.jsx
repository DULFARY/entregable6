import React from 'react'
import './styles/FormReserve.css'
import { useForm } from "react-hook-form";
import useCrud from '../../hooks/UseCrud';

const FormReserve = ({hotelId}) => {

  const {handleSubmit, register, reset} = useForm()

  const [,,createBooking] = useCrud()

  const submit = data=> {
    const url = 'https://entreg6-backend-hotel.onrender.com/bookings'
    data.hotelId = Number(hotelId)
    createBooking( url, data)

  }
  return (
    <section className='container_reserva'>
      <h3 className='titulo_reserva'>Do you want to reserve this hotel?</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div className='reserve_inou'>
        <label>
          <span className='reseva_in'>Check-in</span>
          <input className='input_in'{...register('checkIn')} type="date" />
        </label>
        <label className='input_outche'>
          <span className='reseva_out'>Check-out</span>
          <input className='input_out'{...register('checkOut')} type="date" />
        </label>
        </div>
        <button className='reserva_boton'>Submit</button>
      </form>
    </section>
  )
}

export default FormReserve 
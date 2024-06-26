import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/UseCrud'
import ReserveCard from '../components/ResevationsPage.jsx/ReserveCard'
import FormReviews from '../components/ResevationsPage.jsx/FormReviews'

const ReservationsPage = () => {

  const[reserveSelected, setReserveSelected] =useState()

   const [ bookings, getBookings,,deleteBooking] = useCrud()

   useEffect(() => {
    const url = 'https://entreg6-backend-hotel.onrender.com/bookings'
    getBookings(url)
   },[])
   

  return (
    <section>
      <FormReviews
      reserveSelected={reserveSelected}
      setReserveSelected={setReserveSelected}
      />
      <h2 className='reservation_in'>ReservationsPage</h2>
      <div>
        {
          bookings?.map(reserve => (
            <ReserveCard
            key={reserve.id}
            reserve={reserve}
            setReserveSelected ={setReserveSelected}
            deleteBooking={deleteBooking}

            />
          ))
        }
      </div>

    </section>
  )
}

export default ReservationsPage

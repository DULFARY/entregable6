import React from 'react'
import useCrud from '../../hooks/UseCrud'
import { useForm } from 'react-hook-form'

const FormReviews = ({reserveSelected, setReserveSelected}) => {
  

  

  const{handleSubmit, reset, register} = useForm()

  const [,, createReview] = useCrud()

  const submit = data => {
    const url = 'https://entreg6-backend-hotel.onrender.com/reviews'
    data.hotelId = reserveSelected?.hotel.id  
    data.rating= +data.rating
    createReview(url,data)
    setReserveSelected()

  }
 
  return (
    <article>
      <h3>Reserve</h3>
      <section>
        <header>
          <img src={reserveSelected?.hotel.images[0].url} alt="" />
        </header>
        <h4>{reserveSelected?.hotel.name}</h4>
        <p>
          {reserveSelected?.hotel.city.name},{" "}
          {reserveSelected?.hotel.city.country}
        </p>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reserveSelected?.reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price</span>
            <span>{reserveSelected?.subtotal}</span>
          </li>
        </ul>
      </section>
       <form onSubmit={handleSubmit(submit)}>
       <label>
          <span>Rating</span>
          <select {...register('rating')}>
            <option value="5">⭐⭐⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="2">⭐⭐</option>
            <option value="1">⭐</option>
          </select>
        </label>
        <label>
          <span>Comments</span>
          <textarea {...register('comment')} />
        </label>
        <button>Submit</button>
      </form>
    </article>

  )
}

export default FormReviews
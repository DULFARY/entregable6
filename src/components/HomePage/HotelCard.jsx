import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/HotelCard.css'

  const HotelCard = ({hotel}) => {

     const Navigate  = useNavigate()
     const handleClick = () => {
      Navigate(`/hotels/${hotel.id}`)
     }

  return (
    
    <article className='card__container'>
        <header >
            <img className='card__imagen'src={hotel.images[0].url} alt="" />
        </header>
        <section className='card__hoteles'>
            <h3>{hotel.name}</h3>
            <p>{hotel.rating}</p>
            <span> {hotel.city.name}, {hotel.city.country}</span>
            <div>{hotel.price}</div>
        </section>
        <footer>
            <button className='boton_card' onClick={handleClick}>see more...</button>
        </footer>
    </article>
  
  )
}

export default HotelCard
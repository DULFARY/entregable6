import React from "react";

const ReserveCard = ({ reserve,setReserveSelected,deleteBooking}) => {
  const checkIn = new Date(reserve.checkIn);
  const checkOut = new Date(reserve.checkOut);
 const reservationsDays = (checkOut - checkIn)/(1000 * 60 * 60 * 24)

  const handleReview = () => {
    const obj = {
      ...reserve,
      reservationsDays,
      subtotal: reserve.hotel.price * reservationsDays
    }
    setReserveSelected(obj)
  }
  
   const handleDeleteBooking =() => {
    const url = `https://entreg6-backend-hotel.onrender.com/bookings/${reserve.id}`
    deleteBooking(url,reserve.id)

  }
 
  return (
    <article>
      <header>
        <img src={reserve.hotel.images[0].url} alt="" />
      </header>
      <section>
        <h3>{reserve.hotel.name}</h3>
        <div>
          {reserve.hotel.city.name}, {reserve.hotel.city.country}
        </div>
        <div onClick={handleReview} >Rate and comment this visit...</div>
      </section>
      <section>
        <ul>
          <li>
            <span>Reservation Days</span>
            <span>{reservationsDays}</span>
          </li>
          <li>
            <span>subtotal Price</span>
            <span>{reservationsDays * reserve.hotel.price}</span>
          </li>
        </ul>
      </section>
      <footer>
        <button onClick={handleDeleteBooking}>
          <i className="bx bx-trash"></i>
        </button>
      </footer>
    </article>
  );
};

export default ReserveCard;

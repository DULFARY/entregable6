import  { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Overlay,Map } from 'pigeon-maps'
import OtherHotels from '../components/OtherHotels/OtherHotels'
import FormReserve from '../components/HomePage/FormReserve'
import SliderImgs from '../components/shared/SliderImgs'


const HotelsldPage = () => {

   const {id} = useParams()

   const url =`https://entreg6-backend-hotel.onrender.com/hotels/${id}`
    const [hotel, getHotel] = useFetch(url);

   useEffect(() => {
    getHotel()
   },[id])


  return (
    <div>
    <h2>{hotel?.name}</h2>
    <h3>RATING - {hotel?.rating}</h3>
    <SliderImgs
       hotel={hotel}
    /> 
      <div>

      {hotel && (
      <Map 
      height={200} 
      defaultCenter={[+hotel?.lat, +hotel?.lon]} 
      Zoom={15} 
      maxZoom={16}
      minZoom={10}
      >

        <Overlay anchor={[+hotel?.lat, +hotel?.lon]} offset={[20, 20]}>
          <img src="/imghotel.png" width= {40}alt="" />
        </Overlay>
       </Map>
       )}
      </div>
      <section>
        <h3>
          {hotel?.city.name}, {hotel?.city.country}</h3>
        <p>
          <i className="bx bx-map"></i>
          <span>{hotel?.address}</span>
        </p>
        <p>{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <FormReserve hotelId={hotel?.id}/>
        : <h4>If you want to make a reservation, plase <Link to= '/login'>login</Link></h4>
      }
      
      <OtherHotels
      hotel={hotel}
      />
      
      

    
    </div>

    

  )
}

export default HotelsldPage

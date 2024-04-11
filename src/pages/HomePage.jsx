import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import HotelCard from '../components/HomePage/HotelCard'
import CategoryFilter from '../components/CategoryFilter';
import './styles/HomePage.css'
import PriceFilter from '../components/HomePage/PriceFilter';

const HomePage = () => {
 const[inputName, setInputName] =  useState ('');

 const [fromto, setFromTo] = useState({
  from: 0,
  to:Infinity
 })
 

  const hotels = useSelector(states => states.hotels);

  const inputValue = useRef()

  const handleChange = () => {
    setInputName(inputValue.current.value)

  }


    const cbfilter = hotelInfo => {
      //filter by Name
      const filterName = hotelInfo.name
      .toLowerCase()
      .includes(inputName.toLowerCase().trim());
      //filter price

      const price = Number(hotelInfo.price)
      const filterPrice = price >= fromto.from && price <= fromto.to

       return filterName && filterPrice; 


    };
    



  return (
    <div className='container_homepage'>
      <div className='input_info'>
        <input
         onChange={handleChange} 
         value = {inputName}
         ref= {inputValue} 
        type='text'
        />

        </div> 
        <aside>
          <h3 className='home_filter'>filters</h3>
          
          <PriceFilter
          setFromTo={setFromTo}
          />
          <CategoryFilter/>
        </aside>
        <div className="container_card">
        {hotels?.filter(cbfilter).map((hotelInfo) => (
          <HotelCard key={hotelInfo.id} hotel={hotelInfo}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage

import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import { getHotelsThunk } from '../store/states/hotels.slice';
import {useDispatch} from 'react-redux'


const CategoryFilter = () => {

    const url= 'https://entreg6-backend-hotel.onrender.com/cities'
     const [cities, getCities] = useFetch(url);

   useEffect (() =>{
    getCities();
   },[]);
 

   const dispatch =useDispatch();

   const handleFilterCity =(id)=> {
    let url;


    if (id) {
        url =`https://entreg6-backend-hotel.onrender.com/hotels?cityId=${id}`;
    } else{
        url = 'https://entreg6-backend-hotel.onrender.com/hotels';
    }
     dispatch (getHotelsThunk(url));
   };



   
  return (
    <section>
        <h3 className='filter_cities'>cities</h3>
        <ul>
        <li onClick={() => handleFilterCity()}>all cities</li>
        {cities?.map((city) => (
           <li onClick={() => handleFilterCity(city.id)} key ={city.id}>{city.name}</li>

        ))}


        </ul>
      
    </section>
  )
}

export default CategoryFilter

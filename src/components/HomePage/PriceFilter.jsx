import { useForm } from "react-hook-form"
import './styles/PriceFilter.css'


const PriceFilter = ({setFromTo}) => {
 const {handleSubmit, register, reset}= useForm()

 const submit = data => {
    const from = data.from
    const to = data.to


    setFromTo({
        from: from === ''? 0 : +from,
        to: to === '' ? Infinity : Number(to),
    })
    
 }
 
  return (
    <section className="container_filter">
      <h3 className="filter_price">Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <span className="filter_from">From</span>
          <input  className="input_from"{...register('from')} type="number" />
        </label>
        <label>
          <span className="filter_to">To</span>
          <input className="input_to"{...register('to')}type="number" />
        </label>
        <button className="filter_button">Apply</button>
      </form>
    </section>
  )
}

export default PriceFilter
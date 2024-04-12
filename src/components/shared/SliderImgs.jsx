import { useState } from 'react'
import './styles/SliderImg.css'


const SliderImgs = ({hotel}) => {

   const [imgSelected, setImgSelected] = useState(0)

  const objStyle = {
    width:`${hotel?.images.length * 100}%`,
    transform: `translateX(calc(-${imgSelected}/${hotel?.images.length} * 100%))`,
  }

    const handlePrev= () => {
      if (imgSelected !== 0) {

        setImgSelected(imgSelected -1)

      }

     
    }

    const handleNext = () => {
      if (imgSelected !==hotel?.images.length -1){
        setImgSelected(imgSelected +1 )

      }
      
    }

  return (
    <div className="slider">
      <button onClick={handlePrev} className='slider__btn'>&lt;</button>
      <div style= {objStyle} className="slider__movale">
        {
          hotel?.images.map(imgInfo => (
            <div key={imgInfo.url}className="slider__img-container">
              <img className="slaider__img" src={imgInfo.url} alt=""/>
            </div>
            ))
        }
      </div>
      <button onClick={handleNext}  className='slider__btn slider__next'>&gt;</button>
    </div>
  )
}

export default SliderImgs
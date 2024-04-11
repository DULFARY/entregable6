import './styles/SliderImg.css'


const SliderImg = ({hotel}) => {

    
  return (
    <div className="slider">
      <div className="slider-movale">
        {
          hotel?.images.map(imgInfo => (
            <div className="slider__img-container">
              <img key={imgInfo.url} className="slaider__img" src={imgInfo.url} alt=""/>
            </div>
            ))
        }
      </div>
    </div>
  )
}

export default SliderImg
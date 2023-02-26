import img1 from '../images/slider/bg1.webp'
import img2 from '../images/slider/bg2.webp'
import img3 from '../images/slider/bg3.webp'

function Slider() {
  return (
<div id="slider" className="carousel slide">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={img1} className="d-block w-100 h-500" alt="img1" />
        </div>
        <div className="carousel-item">
            <img src={img2} className="d-block w-100 h-500" alt="img2" />
        </div>
        <div className="carousel-item">
            <img src={img3} className="d-block w-100 h-500" alt="img3" />
        </div>
    </div>
    <button 
    className="carousel-control-prev" 
    type="button" data-bs-target="#slider" 
    data-bs-slide="prev"
    >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
    </button>
    <button 
    className="carousel-control-next" 
    type="button" 
    data-bs-target="#slider" 
    data-bs-slide="next"
    >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
    </button>
</div>
  )
}

export default Slider
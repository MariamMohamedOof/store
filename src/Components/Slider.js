import sh1 from './photos/sh p.PNG';
import sh2 from './photos/sh1.jfif';
import './Slider.css';

function Slider(){
    return (
<>
<div id="carouselExample"   className="carousel slide">
  <div   className="carousel-inner">
    <div   className="carousel-item active">
<img src={sh2}
      className="d-block w-100 h" alt="..." />

    </div>
    <div   className="carousel-item">
        <img src={sh1}
    className="d-block w-100 h" alt="..." />

    </div>

    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcRaTPJTuAuosfegayydWmmlt1pFFUD53hQ&usqp=CAU"  
    
      className="d-block w-100 h" alt="..." />
    </div>
  </div>
  <button   className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span   className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span   className="visually-hidden">Previous</span>
  </button>
  <button   className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span   className="carousel-control-next-icon" aria-hidden="true"></span>
    <span   className="visually-hidden">Next</span>
  </button>
</div>
</>

    );
}
export default Slider;
import React from 'react';
import { useEffect } from 'react';
import Typed from 'typed.js'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import Ai from './Ai';
import logo from './images/logo.jpg';
import elite from './images/file.png';
import stu1 from './images/studio_img.jpg';
import light from './images/light.jpg';
import img1 from './images/image01.jpg'
import img2 from './images/image02.jpg'
import img3 from './images/image03jpg.jpg'
import img4 from './images/image04.png'
import img5 from './images/image5.jpg'
import img6 from './images/image06_1100x619.jpg'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Nav from './Nav';
import Footer from './Footer';

function Home() {
  const navigate=useNavigate();
  useEffect(() => {
    const options = {
      strings: ["On the Streets...", "On the House...", "On the Unknown..."],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.text', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Nav></Nav>

      {/* Carousel */}
      <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={stu1} className="d-block w-100 c-img" alt="Slide 1" />
            <div className="carousel-caption top-0 mt-4">
              <p className="mt-5 fs-3 text-uppercase"></p>
              <h1 className="display-1 fw-bolder text-capitalize"></h1>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={light} className="d-block w-100 c-img" alt="Slide 2" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5"></p>
              <p className="display-1 fw-bolder text-capitalize"></p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src="https://img.freepik.com/premium-photo/vr-gear-setup-gaming-focus-dynamic-lighting-ar-wallpaper_1153869-254.jpg?w=1380" className="d-block w-100 c-img" alt="Slide 3" />
            <div className="carousel-caption top-0 mt-4">
              <p className="text-uppercase fs-3 mt-5"></p>
              <p className="display-1 fw-bolder text-capitalize"></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card */}
      <div className='explore'>

        <h1><span>Exp</span>lore</h1>
        <h1 className='text'></h1>
      </div>
      {/* <img src='https://i.pinimg.com/736x/33/d8/27/33d827e8f42f90ce5b617371b283441f.jpg'></img> */}
      
      <div className='home_cards'>

        <div className="card" style={{ width: '18rem' }}>
          <img src={img1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Studio</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a className="btn btn-primary" onClick={()=>navigate("/studio")}>Book Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={img2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cameras</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" onClick={()=>navigate("/camera")}>Book Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={img3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Software</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" onClick={()=>navigate("/soft")}>Book Now</a>
          </div>
        </div>

      </div>
      <div className='explore'>

      
      <h1 className='text'></h1>
      </div>
      
      <div className='home_cards'>

        <div className="card" style={{ width: '18rem' }}>
          <img src={img4} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Mics</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" onClick={()=>navigate("/mic")}>Book Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={img5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lights</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" onClick={()=>navigate("/lig")}>Book Now</a>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img src={img6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Editors</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary" onClick={()=>navigate("/editor")}>Book Now</a>
          </div>
        </div>

      </div>

       {/* Card */}

       <Footer/>
            <Ai/>



    </div>
  );
}

export default Home;
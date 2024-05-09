import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../images/Slide1.avif'
import Slide2 from '../images/Slide2.avif'
import Slide3 from '../images/Slide3.avif'


function ImageSlider() {
  return (
    <div id='gallery'>
        <Carousel>
      <Carousel.Item  interval={1000}>
        <img 
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Journey Through the Solar System</h3>
          <p>Embark on a visual odyssey through our celestial neighborhood, featuring stunning images of planets, moons, asteroids, and comets captured by space probes and telescopes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Slide3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Mysteries of the Cosmos</h3>
          <p>Explore the enigmatic phenomena that captivate astronomers worldwide, from black holes and dark matter to the birth of stars and galaxies.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Slide2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Beyond Earth: Human Exploration</h3>
          <p>
          Witness humanity's ventures beyond the confines of our planet, from historic moon landings to ambitious plans for crewed missions to Mars and beyond.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
      
    </div>
  )
}

export default ImageSlider

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'


function Carousels() {
    
        const [index, setIndex] = useState(0);
    
        const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
        }
    
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src='https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' // Replace with your image URL
          alt='First slide'
          className='img-responsive'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=' // Replace with your image URL
          alt='Second slide'
          className='img-responsive'
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src='https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg' // Replace with your image URL
          alt='Third slide'
          className='img-responsive'
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels
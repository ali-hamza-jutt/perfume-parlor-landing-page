import React from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css';

import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpeg';
import carousel3 from '../assets/carousel3.jpeg';
import carousel4 from '../assets/carousel4.webp';

const Carousel = () => {
    return (
        <>
           <style jsx>{`
  .custom-carousel, .custom-carousel img {
    height: 70vh;
    max-height: 70vh;
    margin: 0; /* Remove any default margin */
  }
  @media (max-width: 768px) {
    .custom-carousel, .custom-carousel img {
      height: 20vh;
    }
  }
  @media (min-width: 769px) and (max-width: 912px) {
    .custom-carousel, .custom-carousel img {
      height: 30vh;
    }
  }
`}</style>

            <CCarousel controls transition="crossfade" className="custom-carousel">
                <CCarouselItem>
                    <CImage className="d-block w-100 custom-carousel" src={carousel4} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 custom-carousel" src={carousel2} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 custom-carousel" src={carousel3} alt="slide 3" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 custom-carousel" src={carousel1} alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </>
    )
}

export default Carousel;
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../../../Media/img/slider/slider2.png';
import slider2 from '../../../Media/img/slider/slider3.png';
import slider3 from '../../../Media/img/slider/slide4.png';

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <div >
             <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 h-400 "
          src={slider3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Electric tools and Element</h3>
          <p>Necessary Electric tools that mostly use for servicing   </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 h-400 "
          src={slider1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Re-checkup</h3>
          <p>Check up after repairing something electric mandatory. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'400px'}}>
        <img
          className="d-block w-100 h-400 "
          src={slider2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Set up new connection</h3>
          <p>
          New electric setup for your new house
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Slider;
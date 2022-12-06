import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "./../../assets/FIX1.png";
import hero2 from "./../../assets/FIX2.png";
import hero3 from "./../../assets/9.png";

const Hero = () => {
  return (
    <>
      <div className="container-lg mt-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={hero1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;

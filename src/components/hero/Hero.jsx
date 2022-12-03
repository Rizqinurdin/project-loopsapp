import React from "react";
import { Carousel } from "react-bootstrap";
import hero1 from "./../../assets/11.png";
import hero2 from "./../../assets/10.png";
import hero3 from "./../../assets/9.png";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container className="mt-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={hero1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={hero3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default Hero;

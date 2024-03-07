import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import image1 from "../assets/img1.jfif";
import image2 from "../assets/images.jfif";
import "../style/service.css";

const Service = () => {
  return (
    <div>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={3}
        infinite={true}
        interval={100}
        
      >
        <Slider className="slides">
          <Slide index={0} className="slide">
            <div className="carousel">
              <img src={image1} />
              <p>Some Service</p>
            </div>
          </Slide>
          <Slide index={0}>
            <div className="carousel">
              <img src={image2} />
              <p>Giving Infomation</p>
            </div>
          </Slide>
          <Slide index={2}>Slide 3</Slide>
        </Slider>

        <div className="btns">
          <ButtonBack className="btn">Back</ButtonBack>
          <ButtonNext className="btn">Next</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Service;

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
        <img src="img1.jpg"  alt="" />
      </div>
      <div>
        <img src="img2.jpg" alt="" />
      </div>
      <div>
       <img src="img3.jpg" alt="" />
      </div>
      <div>
      <img src="img4.jpg" alt="" />
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
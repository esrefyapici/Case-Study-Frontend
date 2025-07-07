import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "../components/ProductCard/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "40px",
        zIndex: 2,
        left: "-30px",
      }}
      onClick={onClick}
    />
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        fontSize: "40px",
        zIndex: 2,
        right: "-30px",
      }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchMove: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container mx-20 md:mx-20" key={products.length}>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import Slider from "react-slick";
import bannerImgFour from "../public/images/rakshab.jpeg";
import bannerImgTwo from "../public/images/ug_oreo.jpeg";
import bannerImgThree from "../public/images/pg_oreo.jpeg";

const bannerBackgroundStyle = {
  backgroundImage: `url('/images/act_bg.jpeg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

const infoBoxStyle = {
  position: "absolute",
  bottom: "0",
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  color: "#fff",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const Indicator = ({ totalSlides, currentSlide }) => (
  <ul
    style={{
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      bottom: "-14px", // Adjust the bottom position as needed
      left: "0",
      right: "0",
    }}
  >
    {Array.from({ length: totalSlides }).map((_, index) => (
      <li
        key={index}
        style={{
          width: "10px",
          height: "10px",
          margin: "0 5px",
          borderRadius: "50%",
          background: currentSlide === index ? "white" : "gray",
        }}
      ></li>
    ))}
      
  </ul>
      
);

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(0);
  const sliderRef = useRef(null);

  const infoText = [
    "UG Freshie Night",
    "PG Freshie Night",
    "AEA wishes everybody Happy Rakdha Bandhan",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  useEffect(() => {
    const handleSlideChange = () => {
      const nextSlide = (currentSlide + 1) % infoText.length;
      setCurrentSlide(nextSlide);
    };

    const interval = setInterval(handleSlideChange, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide, infoText]);

  useEffect(() => {
    // Get the height of the currently displayed image and set it as the carousel height
    const currentImage = sliderRef.current.innerSlider.list.querySelector(
      `.slick-slide[data-index="${currentSlide}"] img`
    );

    if (currentImage) {
      setCarouselHeight(currentImage.clientHeight);
    }
  }, [currentSlide]);

  return (
    <>
      <Header />
      <div className={`w-100 h-[${carouselHeight}px] md:h-[650px]`} style={bannerBackgroundStyle}>
        <Slider {...settings} ref={sliderRef}>
          <div className="relative">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Image
                className="w-auto h-auto md:h-[650px] object-cover"
                src={bannerImgTwo}
                loading={"lazy"}
                alt="bannerImgTwo"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Image
                className="w-auto h-auto md:h-[650px] object-cover"
                src={bannerImgThree}
                loading={"lazy"}
                alt="bannerImgThree"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="relative">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Image
                className="w-auto h-auto md:h-[650px] object-cover"
                src={bannerImgFour}
                loading={"lazy"}
                alt="bannerImgFour"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Slider>

        <div style={infoBoxStyle}>
          <p>{infoText[currentSlide]}</p>
        </div>
        <Indicator totalSlides={infoText.length} currentSlide={currentSlide} />
      </div>
      <Footer />
    </>
  );
};

export default Banner;

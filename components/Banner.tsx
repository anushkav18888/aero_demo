import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bannerImgFour from "../public/images/bannerImgOne.jpg";
import bannerImgTwo from "../public/images/bannerImgTwo.jpg";
import bannerImgThree from "../public/images/bannerImgThree.jpg";
import bannerImgOne from "../public/images/bannerImgFour.jpg";
import { useState } from 'react';


function SampleNextArrow(props:any) {
  const { onClick } = props;

  return (
    <div
      className="w-36 h-8 md:w-48 md:h-10 absolute bottom-10 md:bottom-32 z-30 right-4 md:right-10 border-[1px] px-2 bg-black/50 shadow-btnShadow overflow-hidden border-gray-900"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm md:text-base uppercase relative flex items-center justify-end cursor-pointer group">
        <span className="text-lg">
          <FaChevronRight />
        </span>
        <span className="absolute left-1/2 transform -translate-x-1/2">Next</span>
      </div>
    </div>
  );
}

function SamplePrevArrow(props:any) {
  const { onClick } = props;

  return (
    <div
      className="w-36 h-8 md:w-48 md:h-10 absolute bottom-10 md:bottom-32 z-30 left-4 md:left-10 border-[1px] border-gray-900 px-2 bg-black/50 shadow-btnShadow overflow-hidden"
      onClick={onClick}
      style={{ backgroundColor: "#18181B" }}
    >
      <div className="w-full h-full text-gray-300 text-sm md:text-base uppercase relative flex items-center justify-between cursor-pointer group">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="static mr-2">Previous</span>
      </div>
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,        // Enable autoplay
    autoplaySpeed: 10000,   // Set the interval to 5000 milliseconds (5 seconds)
  };

  return (
    <div className="w-full h-auto md:h-[650px] relative">
      <Slider {...settings}>
        <div className="relative">
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgOne}
            loading={"eager"}
            alt="bannerImgOne"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgTwo}
            loading={"lazy"}
            alt="bannerImgTwo"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgThree}
            loading={"lazy"}
            alt="bannerImgThree"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full h-auto md:h-[650px] object-cover"
            src={bannerImgFour}
            loading={"lazy"}
            alt="bannerImgFour"
          />
        </div>
      </Slider>
      <div className="mt-8 md:mt-12" /> {/* Add margin to create space */}
    </div>
  );
};

export default Banner;

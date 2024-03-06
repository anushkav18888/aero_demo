import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import bannerImgFour from '../public/images/bannerImgOne.jpg';
import bannerImgTwo from '../public/images/bannerImgTwo.jpg';
import bannerImgThree from '../public/images/bannerImgThree.jpg';
import bannerImgOne from '../public/images/bannerImgFour.jpg';

function MobileNextArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="w-36 h-8 absolute bottom-2 z-30 right-4 border-[1px] px-1 bg-black/50 shadow-btnShadow border-gray-900"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-end cursor-pointer group">
        <span className="text-lg">
          <FaChevronRight />
        </span>
        <span className="absolute left-1/2 transform -translate-x-1/2">Next</span>
      </div>
    </div>
  );
}

function MobilePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="w-36 h-8 absolute bottom-2 z-30 left-4 border-[1px] px-2 bg-black/50 shadow-btnShadow border-gray-900"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase relative flex items-center justify-between cursor-pointer group">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="static mr-2">Previous</span>
      </div>
    </div>
  );
}

function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="w-48 h-10 absolute bottom-8 z-30 right-10 border-[1px] px-2 bg-black/50 shadow-btnShadow overflow-hidden border-gray-900"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-base uppercase relative flex items-center justify-end cursor-pointer group">
        <span className="text-lg">
          <FaChevronRight />
        </span>
        <span className="absolute left-1/2 transform -translate-x-1/2">Next</span>
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="w-48 h-10 absolute bottom-8 z-30 left-10 border-[1px] px-2 bg-black/50 shadow-btnShadow overflow-hidden border-gray-900"
      onClick={onClick}
      style={{ backgroundColor: '#18181B' }}
    >
      <div className="w-full h-full text-gray-300 text-base uppercase relative flex items-center justify-between cursor-pointer group">
        <span className="text-lg">
          <FaChevronLeft />
        </span>
        <span className="static mr-2">Previous</span>
      </div>
    </div>
  );
}

const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: isMobile ? <MobileNextArrow /> : <SampleNextArrow />,
    prevArrow: isMobile ? <MobilePrevArrow /> : <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        <div className="relative">
          <Image
            className="w-full md:h-[650px] "
            src={bannerImgOne}
            loading={'eager'}
            alt="bannerImgOne"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full md:h-[650px] "
            src={bannerImgTwo}
            loading={'lazy'}
            alt="bannerImgTwo"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full md:h-[650px] "
            src={bannerImgThree}
            loading={'lazy'}
            alt="bannerImgThree"
          />
        </div>
        <div className="relative">
          <Image
            className="w-full md:h-[650px] "
            src={bannerImgFour}
            loading={'lazy'}
            alt="bannerImgFour"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

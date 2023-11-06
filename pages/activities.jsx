import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Head from "next/head";
import bannerImgTwo from '../public/images/ug_oreo.jpeg';
import bannerImgThree from '../public/images/pg_oreo.jpeg';
import bannerImgFour from '../public/images/dusherra.jpeg';

const images = ['/images/ug_oreo.jpeg', '/images/pg_oreo.jpeg', '/images/dusherra.jpeg'];
const imageText = [
  'UG Freshers-2023',
  'PG Freshers-2023',
  'AEA wishes Happy Dussehra 2023',
];

const HeaderFooterCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change the interval to the desired time (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
        <Head>
        <title>Innovation and discovery beyond our skies</title>
        <link rel="icon" href="/plane5.png" />
      </Head>
      <>
        <Header />

        <div className="carousel-container">
          <Carousel
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            selectedItem={currentImage}
            autoPlay={false} // Disable the default autoplay behavior
            renderThumbs={() => null}
          >
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Image ${index}`} />
                <p>{imageText[index]}</p>
              </div>
            ))}
          </Carousel>
        </div>

        <Footer />
      </>

      <style jsx>{`
        .carousel-container {
          background: url('/images/act_bg.jpeg');
          background-size: cover;
          background-position: center;
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .carousel-container .slide {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .carousel-container img {
          max-height: 90vh;
          width: auto;
        }
      `}</style>
    </div>
  );
};

export default HeaderFooterCarousel;

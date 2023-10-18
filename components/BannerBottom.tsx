import React, { useState } from "react";
import Image from "next/image";
import Activity1 from "../public/images/group.jpeg";
import Activity2 from "../public/images/peakpx.jpg";

const BannerBottom = () => {
  const [isHovered, setIsHovered] = useState(false);

  const backgroundImageStyle = {
    backgroundImage: `url(${Activity2.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'filter 0.3s ease-in-out',
    width: '100%', // Set the width to 100% of the viewport width
    height: 'auto', // Make the height auto to maintain aspect ratio
  };

  const handleActivity1Hover = () => {
    setIsHovered(true);
  };

  const handleActivity1MouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-grey text-black min-h-screen flex flex-col items-center justify-center" style={backgroundImageStyle}>
      <style jsx>{`
        .banner-title,
        .banner-subtitle,
        .banner-description {
          display: flex;
          flex-direction: column;
          align-items: flex-start; // Adjust alignment to the bottom left
          transition: transform 0.3s ease-in-out;
        }
        .activity1 {
          width: 100%; // Set the width to 100%
          max-width: 400px; // Limit the maximum width for larger screens
          height: auto; // Make the height auto to maintain aspect ratio
          overflow: hidden;
          border: 4px solid white;
          transform: scale(${isHovered ? 1.1 : 1});
          transition: transform 0.3s ease-in-out;
          margin: 0 auto 20px; // Center horizontally and add margin for spacing
        }
      `}</style>
      <div className="max-w-4xl mx-4 lg:mx-20 flex flex-col items-center lg:flex-row">
        <div
          className={`activity1 ${isHovered ? 'zoomed' : ''}`}
          onMouseOver={handleActivity1Hover}
          onMouseOut={handleActivity1MouseOut}
        >
          <Image
            src={Activity1}
            alt="Activity1"
            layout="responsive"
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 lg:p-9">
          <div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-1 banner-title">
              AEA
            </h1>

            <h5 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-10 banner-subtitle">
              WHO ARE WE?
            </h5>
            <p className="text-md lg:text-lg text-white banner-description">
              Aerospace Engineering Association (AEA) is a student body 
              representing students within the Aerospace Engineering department. Our job is to conduct and organize treks, cultural nights, orientations, and what not...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;

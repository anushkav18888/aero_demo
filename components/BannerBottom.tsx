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
    width: '99vw', // Set the width to 100% of the viewport width
    height: '10px', // Change the height to 10 pixels (or any other value)
   
    top: 0, // Attach to the top
    left: 0, // Attach to the left
  };

  const handleActivity1Hover = () => {
    setIsHovered(true);
  };

  const handleActivity1MouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-grey text-black min-h-screen flex items-center justify-center" style={backgroundImageStyle}>
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
          width: 458px; // Set the width
          height: 364px; // Set the height to make it a square
          overflow: hidden;
          border: 4px solid white;
          transform: scale(${isHovered ? 1.1 : 1});
          transition: transform 0.3s ease-in-out;
          margin-left: -205px;
          margin-top: 150px; // Add margin to separate it from text
        }
      `}</style>
      <div className="max-w-4xl mx-20 flex flex-wrap items-center">
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
        <div className="w-full lg:w-1/2 p-9" style={{ marginTop: '210px' }}>
          <div>
            <h1 className="text-5xl font-bold text-white mb-1 banner-title">
              AEA
            </h1>

            <h5 className="text-3xl font-bold text-white mb-10 banner-subtitle">
              WHO ARE WE?
            </h5>
            <p className="text-lg text-white banner-description">
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

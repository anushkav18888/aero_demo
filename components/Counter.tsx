import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import Activity2 from '../public/aea/images/counterimg.jpeg';

const backgroundImageStyle = {
  backgroundImage: `url(${Activity2.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transition: 'filter 0.3s ease-in-out',
  height: '200px',
};

type CounterBoxProps = {
  value: number;
};

const slowConfig = { duration: 2500, tension: 300, friction: 10 };

const CounterBox: React.FC<CounterBoxProps> = ({ value }) => {
  const displayValue = value >= 25 ? '25+' : value;

  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: slowConfig,
  });

  return (
    <div className="counter-circle">
      <animated.div className="animated-number">
        {number.interpolate((num) => Math.floor(num) === 25 ? '25+' : Math.floor(num))}
      </animated.div>
    </div>
  );
};

const CounterBox1: React.FC<CounterBoxProps> = ({ value }) => {
  const displayValue = value >= 600 ? '600+' : value;

  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    config: slowConfig,
  });

  return (
    <div className="counter-circle">
      <animated.div className="animated-number">
        {number.interpolate((num) => Math.floor(num) === 600 ? '600+' : Math.floor(num))}
      </animated.div>
    </div>
  );
};

const Bottom: React.FC = () => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      // You can add a callback here to load your counters or take other actions when in view.
    }
  }, [inView]);

  return (
    <div className="bg-grey text-black min-h-screen flex items-center justify-center p-4" style={backgroundImageStyle}>
      <style jsx>{`
        .counter-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .counter-circle {
          width: 100px;
          height: 100px;
          border: 2px solid black;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4px 3px;
        }

        .animated-number {
          font-size: 30px;
          color: black;
        }

        .counter-label {
          text-align: center;
        }

        @media (max-width: 768px) {
          .counter-circle {
            width: 80px;
            height: 80px;
            font-size: 24px;
          }
        }
      `}</style>

      <div className="counter-container" ref={inViewRef}>
        {inView && (
          <>
            <div className="counter-circle">
              <CounterBox value={68} />
            </div>
            <div className="counter-label" style={{ fontWeight: 'bold' }}>Department Rank Worldwide</div>
            <div className="counter-circle">
              <CounterBox value={25} />
            </div>
            <div className="counter-label" style={{ fontWeight: 'bold' }}>Faculty</div>
            <div className="counter-circle">
              <CounterBox1 value={600} />
            </div>
            <div className="counter-label" style={{ fontWeight: 'bold' }}>Students</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Bottom;

import React, { useRef, useEffect, useState } from 'react';

const FlyInOnScroll = ({ children, className = '', duration = 0.5, distance = '400px' }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`${className} fly-in-on-scroll${visible ? ' fly-in-on-scroll-animate' : ''}`}
      style={{
        '--fly-duration': `${duration}s`,
        '--fly-distance': distance,
        display: 'inline-block'
      }}
    >
      {children}
    </span>
  );
};

export default FlyInOnScroll; 
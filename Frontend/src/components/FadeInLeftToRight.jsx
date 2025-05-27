import React, { useRef, useEffect, useState } from 'react';
import './fadeInLeftToRight.css';

const FadeInLeftToRight = ({ children, duration = 1.5, className = '' }) => {
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
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={`fade-in-left-to-right ${className} ${visible ? 'fade-in-ltr-animate' : ''}`}
      style={{ '--fade-duration': `${duration}s` }}
    >
      {children}
    </span>
  );
};

export default FadeInLeftToRight; 